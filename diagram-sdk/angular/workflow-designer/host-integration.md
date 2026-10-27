---
layout: post
title: Host integration in Angular Workflow Designer | Syncfusion
description: Learn how to deliver notifications, handle approvals, supply credentials, run custom steps and intercept requests in the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Host integration in Angular Workflow Designer

Some steps need work that only your application can do, such as sending an email or reading a secret. The designer raises an event for these steps, and the step waits until you finish it.

The arguments of these events contain:

* `complete(result)` – finishes the step successfully.
* `fail(error)` – fails the step. Its error handling then applies.
* `signal` – an `AbortSignal` that is aborted when the run is stopped or the step times out.

Pass these event callbacks as event bindings on `<ejs-workflowdesigner>`.
The service names in the examples (`myApprovalService`, `invoiceService` and `getSecret`) represent application-provided integrations.

## Notifications

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"500px\" (notifyRequested)=\"onNotifyRequested($event)\"></ejs-workflowdesigner>"
})
export class AppComponent {

    onNotifyRequested(args: any): void {
        fetch('/api/notify', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(args.notification), signal: args.signal })
            .then((response: Response) => { if (!response.ok) { args.fail(new Error('Notification failed with HTTP ' + response.status)); return; } args.complete({ sent: true }); })
            .catch((error: Error) => args.fail(error));
    }
}

{% endhighlight %}
{% endtabs %}

`args.notification` holds the step settings, with expressions already resolved. Call `fail` for every unsuccessful outcome, including HTTP error responses, so that the step's [error handling](./execution#error-handling) (retries, `continueOnError`, the error port) applies. If you call `complete`, the step is treated as successful.

## Approvals

The `approvalRequested` event provides `reviewers`, `requestMessage` and `requestFields`. Complete it with an `ApprovalDecisionResult`:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"500px\" (approvalRequested)=\"onApprovalRequested($event)\"></ejs-workflowdesigner>"
})
export class AppComponent {

    onApprovalRequested(args: any): void {
        myApprovalService.request(args.requestMessage, args.reviewers).then((decision: any) => args.complete({ decision: decision.approved ? 'approved' : 'declined', comments: decision.comments, reviewedBy: decision.user, reviewedAt: new Date().toISOString() }));
    }
}

{% endhighlight %}
{% endtabs %}

When the event isn't handled, a built-in dialog lets the current user decide.

## Custom steps

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"500px\" (customExecutionRequested)=\"onCustomExecutionRequested($event)\"></ejs-workflowdesigner>"
})
export class AppComponent {

    onCustomExecutionRequested(args: any): void {
        if (args.actionType === 'createInvoice') invoiceService.create(args.input).then((invoice: any) => args.complete(invoice), (error: Error) => args.fail(error));
        else args.fail(new Error('Unknown action: ' + args.actionType));
    }
}

{% endhighlight %}
{% endtabs %}

## Credentials

Steps keep only a credential **name**: `authRef` on API Request steps, `credentialRef` on AI steps. When a credential is needed, the designer triggers `credentialRequested`. Resolve the name from your secret store:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"500px\" (credentialRequested)=\"onCredentialRequested($event)\"></ejs-workflowdesigner>"
})
export class AppComponent {

    onCredentialRequested(args: any): void {
        getSecret(args.credentialRef).then((secret: string) => args.purpose === 'ApiRequest' ? args.complete({ headers: { Authorization: 'Bearer ' + secret } }) : args.complete(secret), (error: Error) => args.fail(error));
    }
}

{% endhighlight %}
{% endtabs %}

Secrets are attached after `beforeRequestSend`, and they never appear in event arguments, the execution log or exported JSON.

## Intercept requests

`beforeRequestSend` is triggered before every API Request step, AI step and AI Assist request. Use it to:

* change the request in place, for example to route the URL through your proxy or add headers;
* supply the response yourself by setting `args.response` to a value or a promise, in which case no request is sent;
* block the request by setting `args.cancel = true`, in which case the step fails with code `REQUEST_CANCELLED`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"500px\" (beforeRequestSend)=\"onBeforeRequestSend($event)\"></ejs-workflowdesigner>"
})
export class AppComponent {

    onBeforeRequestSend(args: any): void {
        if (args.requestType === 'ApiRequest' && !String(args.request.url).startsWith('https://api.mycompany.com/')) args.cancel = true;
    }
}

{% endhighlight %}
{% endtabs %}

## Edit-time events

| Event | Description |
|---|---|
| `workflowChanged` | The workflow changed. Provides a snapshot, `changeType` and `affectedItem`. |
| `workflowItemSelected` | The selection changed. |
| `beforeItemRemove` | Before the user removes an item. Set `cancel` to `true` (or a promise of `true`) to keep it. |
| `beforeConnect` | Before the user adds a connection. |
