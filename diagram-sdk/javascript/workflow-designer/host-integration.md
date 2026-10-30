---
layout: post
title: Host integration in JavaScript Workflow Designer control | Syncfusion®
description: Learn how to deliver notifications, run custom steps and intercept requests in the Syncfusion® JavaScript Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Host integration in JavaScript Workflow Designer control

Some steps need work that only your application can do, such as sending a notification or running custom logic. For these steps, the designer triggers an event, and the step waits until your handler finishes it.

The arguments of these events contain the following members:

* `complete(result)`: Finishes the step successfully.
* `fail(error)`: Fails the step.
* `signal`: An `AbortSignal` that's aborted when the run is stopped or the step times out.

## Notifications

Handle the `notifyRequested` event to deliver the notifications that Notify steps send:

{% tabs %}
{% highlight js tabtitle="app.js" %}

const designer = new ej.workflowdesigner.WorkflowDesigner({
    notifyRequested: (args) => {
        fetch('/api/notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(args.notification),
            signal: args.signal
        })
            .then((response) => {
                if (!response.ok) {
                    // fetch resolves for HTTP 4xx/5xx, so fail the step explicitly.
                    args.fail(new Error('Notification failed with HTTP ' + response.status));
                    return;
                }
                args.complete({ sent: true });
            })
            .catch((error) => args.fail(error));
    }
});

{% endhighlight %}
{% endtabs %}

`args.notification` holds the step settings, with expressions already resolved. Call `fail` for every unsuccessful outcome, including HTTP error responses, so the run reports the step failure. If you call `complete`, the step is treated as successful.

## Approvals

When an approval step runs, the designer shows a built-in dialog for the reviewer.

## Custom steps

Handle the `customExecutionRequested` event to run the work of Custom steps. `actionType` identifies the action:

{% tabs %}
{% highlight js tabtitle="app.js" %}

customExecutionRequested: (args) => {
    if (args.actionType === 'createInvoice') {
        invoiceService.create(args.input).then(
            (invoice) => args.complete(invoice),
            (error) => args.fail(error)
        );
    } else {
        args.fail(new Error('Unknown action: ' + args.actionType));
    }
}

{% endhighlight %}
{% endtabs %}

## Credentials

The `approvalRequested` and `credentialRequested` events are internal and aren't public integration points. For requests that require secrets, route them through your backend and keep credentials server-side. Use `beforeRequestSend` to route API Request and AI Assist requests to your backend; for AI steps, configure `serverUrl`.

## Intercept requests

The `beforeRequestSend` event is triggered before every API Request step, AI step, and AI Assist request. Use it to:

* Change the request in place, for example, to route the URL through your proxy or add headers.
* Supply the response yourself by setting `args.response` to a value or a promise. No request is sent.
* Block the request by setting `args.cancel` to `true`. The step then fails with the code `REQUEST_CANCELLED`.

The following example blocks API requests to any host other than your own API:

{% tabs %}
{% highlight js tabtitle="app.js" %}

beforeRequestSend: (args) => {
    if (args.requestType === 'ApiRequest') {
        const url = String(args.request.url);
        if (!url.startsWith('https://api.mycompany.com/')) {
            args.cancel = true;
        }
    }
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
