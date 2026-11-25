---
layout: post
title: JavaScript Workflow Designer Integration | Syncfusion®
description: Learn how to deliver notifications, run custom steps, intercept requests, and handle workflow changes in the Syncfusion JavaScript Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Host Integration in EJ2 JavaScript Workflow Designer

Some steps need work that only your application can do, such as sending an email or updating an internal system. For these steps, the Workflow Designer triggers an event, and the step waits until your handler finishes it. Your application can also inspect every outgoing request and respond to changes that users make to the workflow.

## Complete a step from your application

The [`notifyRequested`](https://ej2.syncfusion.com/javascript/documentation/api/workflow-designer#notifyrequested) and [`customExecutionRequested`](https://ej2.syncfusion.com/javascript/documentation/api/workflow-designer#customexecutionrequested) events pause the step until your handler reports the outcome. Their arguments contain the following members:

| Member | Description |
|---|---|
| `complete(result)` | Finishes the step successfully. The value you pass becomes the response of the step, which later steps can read. |
| `fail(error)` | Fails the step with the given `Error`. The step is reported as failed in the execution log and in the `executionStepFailed` event. |
| `signal` | Specifies an `AbortSignal` that's aborted when the run is stopped or the step times out. Pass it to your own requests so that they're cancelled too. |

Only the first call to `complete` or `fail` takes effect. The step waits until one of them is called, the step times out, or the run is stopped.

## Notifications

Handle the `notifyRequested` event to deliver the notifications that Notify steps send, through your email, messaging, or push service. When no handler is bound to this event, Notify steps fail.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/workflow-designer-notify-requested/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/workflow-designer-notify-requested/index.html %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/workflow-designer-notify-requested" %}

In addition to `complete`, `fail`, and `signal`, the event arguments (`WorkflowNotifyRequestedEventArgs`) contain the following properties.

| Property | Description |
|---|---|
| `step` | Specifies the Notify step that's running. |
| `notification` | Specifies the notification settings (`WorkflowNotification`), with expressions already resolved. `channel` and `message` are always set; the other fields depend on the channel. See [Notify](./workflow-steps#notify). |
| `stepResults` | Lists the results of the steps that ran so far, in run order. |
| `previousStep` | Specifies the result of the step that ran just before, if any. |

N> Values from earlier steps are inserted into `args.notification` as they are. Escape them before you use them in HTML, such as an email body. Call `fail` for every unsuccessful outcome, including HTTP error responses, so that the run reports the failure.

## Custom steps

Handle the `customExecutionRequested` event to perform the work of Custom steps. When no handler is bound to this event, Custom steps fail. The event arguments (`WorkflowCustomExecutionRequestedEventArgs`) contain the following properties, in addition to `complete`, `fail`, and `signal`.

| Property | Description |
|---|---|
| `step` | Specifies the Custom step that's running. For a step created from a custom step definition, `step.customStepId` identifies the definition and `step.props` holds the field values. |
| `actionType` | Specifies the `actionType` setting of a built-in Custom step, which identifies the action to perform. |
| `input` | Specifies the `input` setting of a built-in Custom step, with expressions already resolved. |
| `stepResults` | Lists the results of the steps that ran so far, in run order. |
| `previousStep` | Specifies the result of the step that ran just before, if any. |

The following example handles a built-in Custom step that creates an invoice and returns the invoice data.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/workflow-designer-host-integration/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/workflow-designer-host-integration/index.html %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/workflow-designer-host-integration" %}

To offer custom steps with their own fields in the step collection, see [Custom steps](./custom-steps).

## Credentials

Keep production secrets on your server. Workflows save only credential names, never secrets. To authenticate requests:

* For API Request steps, add the authentication header in the `beforeRequestSend` event, or route the request through your backend, which adds the credentials.
* For AI steps and AI Assist, use the default `'Reference'` credential mode with a backend endpoint that holds the provider key. See [Credential mode](./security#credential-mode).

## Intercept requests

The [`beforeRequestSend`](https://ej2.syncfusion.com/javascript/documentation/api/workflow-designer#beforerequestsend) event triggers before every request that an API Request step, an AI step, or AI Assist sends. Use it as a single policy point for outgoing traffic, for example to allow only your own hosts or to add authentication.

| Property | Description |
|---|---|
| `requestType` | Specifies the kind of request: `'ApiRequest'`, `'AI'`, or `'AIAssist'`. |
| `request` | Specifies the request that's about to be sent. Change it in place, for example to route the URL through your proxy or to add headers as `{ key, value }` pairs. |
| `response` | Specifies a response that you supply yourself, as a value or a promise. When it's set, no request is sent. |
| `cancel` | Specifies whether to block the request. When `true`, the step fails with the code `REQUEST_CANCELLED`. |
| `step` | Specifies the step that sends the request. It isn't set for AI Assist requests. |

The following example blocks API requests to any host other than your own API, and adds an authorization header to the allowed requests.

{% tabs %}
{% highlight js tabtitle="index.js" %}
function onBeforeRequestSend(args) {
    if (args.requestType === 'ApiRequest') {
        var request = args.request;
        if (!request.url.startsWith('https://api.mycompany.com/')) {
            args.cancel = true;
            return;
        }
        // getUserToken stands for your application's sign-in code.
        request.headers = (request.headers || []).concat([
            { key: 'Authorization', value: 'Bearer ' + getUserToken() }
        ]);
    }
}
var designer = new ej.workflowdesigner.WorkflowDesigner({
    height: '500px',
    beforeRequestSend: onBeforeRequestSend
});
designer.appendTo('#workflowDesigner');
{% endhighlight %}
{% endtabs %}

## Edit-time events

The following events report what happens while users build a workflow. Use them to save drafts, enable your own commands, or show details of the selected item.

| Event | Description |
|---|---|
| [`created`](https://ej2.syncfusion.com/javascript/documentation/api/workflow-designer#created) | Triggers once after the Workflow Designer has finished rendering. Use it to load the first workflow or to call other methods safely. |
| [`workflowChanged`](https://ej2.syncfusion.com/javascript/documentation/api/workflow-designer#workflowchanged) | Triggers after the workflow changes, whether the change is made in the user interface, through `importWorkflow`, or with the add, update, and remove methods. Its arguments contain a `workflow` snapshot, the `changeType`, the `affectedItem`, and the `changedProperties`. |
| [`selectionChanged`](https://ej2.syncfusion.com/javascript/documentation/api/workflow-designer#selectionchanged) | Triggers when the selection on the canvas changes. Its `selectedItem` argument contains the selected step, connection, or sticky note, or `null` when the selection is cleared. |

The `changeType` argument of the `workflowChanged` event has one of the following values.

| Value | Description |
|---|---|
| `StepAdded`, `StepRemoved`, `StepModified` | A step was added, removed, or changed. |
| `ConnectionAdded`, `ConnectionRemoved`, `ConnectionModified` | A connection was added, removed, or changed. |
| `StickyNoteAdded`, `StickyNoteRemoved`, `StickyNoteModified` | A sticky note was added, removed, or changed. |
| `WorkflowImported` | The whole workflow was replaced by `importWorkflow` or the **Import** command. |
| `WorkflowModified` | The workflow changed in a way that doesn't belong to a single item. |

The following example loads a workflow when the designer is ready and saves a draft whenever the workflow changes.

{% tabs %}
{% highlight js tabtitle="index.js" %}
function onCreated() {
    // loadDraft stands for your application's load code.
    designer.importWorkflow(loadDraft());
}
function onWorkflowChanged(args) {
    console.log('Workflow changed:', args.changeType);
    // saveDraft stands for your application's save code.
    saveDraft(designer.exportWorkflow());
}
var designer = new ej.workflowdesigner.WorkflowDesigner({
    height: '500px',
    created: onCreated,
    workflowChanged: onWorkflowChanged
});
designer.appendTo('#workflowDesigner');
{% endhighlight %}
{% endtabs %}

## See also

* [Custom steps](./custom-steps)
* [Running workflows](./execution)
* [Security considerations](./security)
