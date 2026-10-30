---
layout: post
title: Host integration in React Workflow Designer | Syncfusion®
description: Learn how to deliver notifications, run custom steps and intercept requests in the Syncfusion React Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Host integration in React Workflow Designer

Some steps need work that only your application can do, such as sending a notification or running custom logic. For these steps, the designer triggers a public event, and the step waits until your handler finishes it.

The arguments of these events contain the following members:

* `complete(result)`: Finishes the step successfully.
* `fail(error)`: Fails the step. The step's error handling then applies.
* `signal`: An `AbortSignal` that's aborted when the run is stopped or the step times out.

## Notifications

Handle the `notifyRequested` event to deliver the notifications that Notify steps send:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    function onNotifyRequested(args: any) {
        fetch('/api/notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(args.notification),
            signal: args.signal
        })
            .then((response: Response) => {
                if (!response.ok) {
                    // fetch resolves for HTTP 4xx/5xx, so fail the step explicitly.
                    args.fail(new Error('Notification failed with HTTP ' + response.status));
                    return;
                }
                args.complete({ sent: true });
            })
            .catch((error: Error) => args.fail(error));
    }

    return <WorkflowDesignerComponent id="workflow" height="500px" notifyRequested={onNotifyRequested} />;
}

{% endhighlight %}
{% endtabs %}

`args.notification` holds the step settings, with expressions already resolved. Call `fail` for every unsuccessful outcome, including HTTP error responses, so the run reports the step failure. If you call `complete`, the step is treated as successful.

## Custom steps

Handle the `customExecutionRequested` event to run the work of Custom steps. `actionType` identifies the action:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    function onCustomExecutionRequested(args: any) {
        if (args.actionType === 'createInvoice') {
            invoiceService.create(args.input).then(
                (invoice) => args.complete(invoice),
                (error: Error) => args.fail(error)
            );
        } else {
            args.fail(new Error('Unknown action: ' + args.actionType));
        }
    }

    return <WorkflowDesignerComponent id="workflow" height="500px" customExecutionRequested={onCustomExecutionRequested} />;
}

{% endhighlight %}
{% endtabs %}

## Credentials

The `approvalRequested` and `credentialRequested` events are internal and aren't public integration points. Approval steps use the built-in approval dialog. For requests that require secrets, route them through your backend and keep credentials server-side. Use `beforeRequestSend` to route API Request and AI Assist requests to your backend; for AI steps, configure `serverUrl`.

## Intercept requests

The `beforeRequestSend` event is triggered before every API Request step, AI step, and AI Assist request. Use it to:

* Change the request in place, for example, to route the URL through your proxy or add headers.
* Supply the response yourself by setting `args.response` to a value or a promise. No request is sent.
* Block the request by setting `args.cancel` to `true`. The step then fails with the code `REQUEST_CANCELLED`.

The following example blocks API requests to any host other than your own API:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    function onBeforeRequestSend(args: any) {
        if (args.requestType === 'ApiRequest') {
            const url: string = String(args.request.url);
            if (!url.startsWith('https://api.mycompany.com/')) {
                args.cancel = true;
            }
        }
    }

    return <WorkflowDesignerComponent id="workflow" height="500px" beforeRequestSend={onBeforeRequestSend} />;
}

{% endhighlight %}
{% endtabs %}

## Edit-time events

| Event | Description |
|---|---|
| `workflowChanged` | The workflow changed. Provides a snapshot, `changeType`, and `affectedItem`. |
| `workflowItemSelected` | The selection changed. |
| `beforeItemRemove` | Triggered before the user removes an item. Set `cancel` to `true`, or to a promise of `true`, to keep the item. |
| `beforeConnect` | Triggered before the user adds a connection. See [Validate connections](./connections#validate-connections). |
