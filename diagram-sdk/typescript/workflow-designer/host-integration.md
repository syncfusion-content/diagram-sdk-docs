---
layout: post
title: Host integration in TypeScript Workflow Designer control | Syncfusion®
description: Learn how to deliver notifications, handle approvals, supply credentials, run custom steps and intercept requests in the Syncfusion TypeScript Workflow Designer.
platform: ej2-typescript
control: Workflow Designer
publishingplatform: typescript
documentation: ug
domainurl: ##DomainURL##
---

# Host integration in TypeScript Workflow Designer control

Some steps need work that only your application can do, such as sending an email or reading a secret. The designer raises an event for these steps, and the step waits until you finish it.

The arguments of these events contain:

* `complete(result)` – finishes the step successfully.
* `fail(error)` – fails the step. Its error handling then applies.
* `signal` – an `AbortSignal` that is aborted when the run is stopped or the step times out.

## Notifications

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

const designer: WorkflowDesigner = new WorkflowDesigner({
    notifyRequested: (args: WorkflowNotifyEventArgs) => {
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
});

{% endhighlight %}
{% endtabs %}

`args.notification` holds the step settings, with expressions already resolved. Call `fail` for every unsuccessful outcome, including HTTP error responses, so that the step's [error handling](./execution#error-handling) (retries, `continueOnError`, the error port) applies. If you call `complete`, the step is treated as successful.

## Approvals

The `approvalRequested` event provides `reviewers`, `requestMessage` and `requestFields`. Complete it with an `ApprovalDecisionResult`:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

approvalRequested: (args: WorkflowApprovalEventArgs) => {
    myApprovalService.request(args.requestMessage, args.reviewers).then((decision) => {
        args.complete({
            decision: decision.approved ? 'approved' : 'declined',
            comments: decision.comments,
            reviewedBy: decision.user,
            reviewedAt: new Date().toISOString()
        });
    });
}

{% endhighlight %}
{% endtabs %}

When the event isn't handled, a built-in dialog lets the current user decide.

## Custom steps

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

customExecutionRequested: (args: WorkflowCustomExecutionEventArgs) => {
    if (args.actionType === 'createInvoice') {
        invoiceService.create(args.input).then(
            (invoice) => args.complete(invoice),
            (error: Error) => args.fail(error)
        );
    } else {
        args.fail(new Error('Unknown action: ' + args.actionType));
    }
}

{% endhighlight %}
{% endtabs %}

## Credentials

Steps keep only a credential **name**: `authRef` on API Request steps, `credentialRef` on AI steps. When a credential is needed, the designer triggers `credentialRequested`. Resolve the name from your secret store:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

credentialRequested: (args: WorkflowCredentialEventArgs) => {
    // args.purpose is 'ApiRequest', 'AI' or 'AIAssist'.
    getSecret(args.credentialRef).then((secret: string) => {
        if (args.purpose === 'ApiRequest') {
            args.complete({ headers: { Authorization: 'Bearer ' + secret } });
        } else {
            args.complete(secret);
        }
    }, (error: Error) => args.fail(error));
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
{% highlight ts tabtitle="app.ts" %}

beforeRequestSend: (args: WorkflowBeforeRequestSendEventArgs) => {
    if (args.requestType === 'ApiRequest') {
        const url: string = String(args.request.url);
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
| `workflowChanged` | The workflow changed. Provides a snapshot, `changeType` and `affectedItem`. |
| `workflowItemSelected` | The selection changed. |
| `beforeItemRemove` | Before the user removes an item. Set `cancel` to `true` (or a promise of `true`) to keep it. |
| `beforeConnect` | Before the user adds a connection. |
