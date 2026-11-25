---
layout: post
title: Webhook trigger in Vue Workflow Designer control | Syncfusion®
description: Learn how to start a workflow from a webhook that your backend receives, by using the Webhook Trigger step of the Syncfusion Vue Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Webhook Trigger in Vue Workflow Designer

A Webhook Trigger step starts the workflow when an external system calls your backend, for example when an online store reports a new order. The Workflow Designer doesn't receive HTTP requests itself, because it runs in the browser. Instead, your backend verifies the request and forwards it to the page, for example over SignalR or WebSockets, and the page passes it to the [`triggerWebhook`](https://ej2.syncfusion.com/vue/documentation/api/workflow-designer#triggerwebhook) method.

## Configure the trigger

The settings of the `WebhookTrigger` step describe the request that your backend expects and the response it returns. The designer uses `method` and `path` to match incoming messages; the other settings document the endpoint for your backend.

| Setting | Description |
|---|---|
| `method` | Specifies the expected HTTP method, such as `'POST'`. A message with a different method is rejected. |
| `path` | Specifies the expected request path, such as `'orders/created'`. A message with a different path is rejected. |
| `authMode` | Specifies how your backend authenticates the request: `'None'`, `'Basic'`, `'ApiKeyHeader'`, `'Bearer'`, `'HmacSha256'`, or `'Custom'`. |
| `authRef`, `authHeaderName`, `authSignatureHeaderName` | Specify the details your backend uses to verify the request: the credential name (**Credential Reference**), the name of the API key header, and the name of the signature header. The designer doesn't verify requests itself. |
| `responseMode`, `responseCode`, `responseBody` | Specify the response that your backend returns to the caller. Set `responseMode` to `'Immediate'` to return the response as soon as the webhook is accepted. |
| `payloadSchema` | Specifies the fields that the payload is expected to contain, displayed as **Payload Schema**. The fields appear in the variable picker before the first run. |

## Forward a webhook to the designer

When your backend forwards a webhook, pass the message to the `triggerWebhook` method. The method returns a promise that resolves with the `WorkflowExecutionResult` when the run ends. The following example receives the message over a SignalR connection.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
    <div id="app">
        <ejs-workflowdesigner ref="workflow" id="workflow" height="500px"></ejs-workflowdesigner>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const workflow = ref(null);

async function onWorkflowWebhookTriggered(message) {
    const designer = workflow.value.ej2Instances;
    try {
        const result = await designer.triggerWebhook(message);
        console.log('Run finished:', result.status);
    } catch (error) {
        console.error(error.code);
    }
}

// connection is your application's SignalR hub connection.
onMounted(() => connection.on('WorkflowWebhookTriggered', onWorkflowWebhookTriggered));
onBeforeUnmount(() => connection.off('WorkflowWebhookTriggered', onWorkflowWebhookTriggered));
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
    <div id="app">
        <ejs-workflowdesigner ref="workflow" id="workflow" height="500px"></ejs-workflowdesigner>
    </div>
</template>

<script>
import { WorkflowDesignerComponent } from '@syncfusion/ej2-vue-workflow-designer';

export default {
    name: 'App',
    components: {
        'ejs-workflowdesigner': WorkflowDesignerComponent
    },
    mounted: function () {
        // connection is your application's SignalR hub connection.
        connection.on('WorkflowWebhookTriggered', this.onWorkflowWebhookTriggered);
    },
    beforeDestroy: function () {
        connection.off('WorkflowWebhookTriggered', this.onWorkflowWebhookTriggered);
    },
    methods: {
        onWorkflowWebhookTriggered: async function (message) {
            const designer = this.$refs.workflow.ej2Instances;
            try {
                const result = await designer.triggerWebhook(message);
                console.log('Run finished:', result.status);
            } catch (error) {
                console.error(error.code);
            }
        }
    }
};
</script>
{% endhighlight %}
{% endtabs %}

The message (`WorkflowWebhookTriggerMessage`) contains the following properties.

| Property | Description |
|---|---|
| `workflowId` | Required. Specifies the `id` of the loaded workflow, which guards against starting the wrong workflow. |
| `triggerId` | Required. Specifies the identifier of the Webhook Trigger step to start from. |
| `payload` | Specifies the body of the webhook request. It becomes the response of the trigger step. |
| `method`, `path` | Specify the HTTP method and path of the request. They must match the settings of the trigger. |
| `authenticated` | Specifies whether your backend has verified the request. Required when the `authMode` of the trigger isn't `'None'`. |
| `eventId`, `executionId`, `receivedAt` | Specify optional values for correlation and logging. |
| `context` | Specifies optional request details for logging, such as the headers and the source IP address. |

The payload becomes the response of the Webhook Trigger step, so later steps read it with expressions. For example, the `orderId` field of the payload of a trigger with the identifier `orderCreated` is read with <code>&#123;&#123;$.nodes["orderCreated"].response.orderId&#125;&#125;</code>.

## Errors

When a webhook can't start a run, the promise rejects with a `WorkflowError` whose `code` is one of the following values.

| Code | Description |
|---|---|
| `WEBHOOK_INVALID_MESSAGE` | The message, its `workflowId`, or its `triggerId` is missing. |
| `WEBHOOK_IDS_REQUIRED` | The `workflowId` or `triggerId` is empty. |
| `WEBHOOK_WORKFLOW_MISMATCH` | The `workflowId` doesn't match the loaded workflow. |
| `RUN_IN_PROGRESS` | Another run is active. |
| `WEBHOOK_TRIGGER_NOT_FOUND` | No Webhook Trigger step has the given identifier. |
| `WEBHOOK_METHOD_MISMATCH`, `WEBHOOK_PATH_MISMATCH` | The method or path of the request doesn't match the trigger. |
| `WEBHOOK_AUTH_REQUIRED` | The trigger requires authentication, and `authenticated` isn't `true`. |

I> The designer trusts the `authenticated` flag, so verify the signature or credentials on your backend before you set it. Webhooks that arrive during a run are rejected with `RUN_IN_PROGRESS`; if every event must run, queue the webhooks on your backend.
