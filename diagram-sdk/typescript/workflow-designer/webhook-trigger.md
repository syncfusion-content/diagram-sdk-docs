---
layout: post
title: Webhook trigger in TypeScript Workflow Designer control | Syncfusion
description: Learn how to start workflows from webhook calls received by your backend in the Syncfusion TypeScript Workflow Designer control.
platform: ej2-typescript
control: Workflow Designer
publishingplatform: typescript
documentation: ug
domainurl: ##DomainURL##
---

# Webhook trigger in TypeScript Workflow Designer control

A Webhook Trigger step starts the workflow when your backend receives an HTTP call. The designer doesn't receive HTTP requests itself. Your backend verifies the request and forwards it to the page, for example over SignalR or WebSockets. The page then calls `triggerWebhook`.

## Configure the trigger

| Setting | Description |
|---|---|
| `method` | The expected HTTP method. |
| `path` | The expected path. |
| `authMode` | `'None'`, `'Basic'`, `'ApiKeyHeader'`, `'Bearer'`, `'HmacSha256'` or `'Custom'`. |
| `authRef`, `authHeaderName`, `authSignatureHeaderName` | Details your backend uses to verify the request. |
| `responseMode`, `responseCode`, `responseBody` | The response your backend returns. Use `'Immediate'` in this release. |
| `payloadSchema` | The fields of the expected payload, used by the variable picker. |

## Forward a webhook to the designer

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

connection.on('WorkflowWebhookTriggered', async (message: WorkflowWebhookTriggerMessage) => {
    try {
        const result: WorkflowExecutionResult = await designer.triggerWebhook(message);
        console.log('Run finished:', result.status);
    } catch (error) {
        console.error((error as WorkflowError).code);
    }
});

{% endhighlight %}
{% endtabs %}

The message contains `workflowId`, `triggerId`, `payload`, `method`, `path`, `context` and `authenticated`. The payload is available as `$.input.response`, and the request details as `$.input.webhook`.

## Errors

The promise rejects with a `WorkflowError` whose `code` is one of the following:

| Code | Reason |
|---|---|
| `WEBHOOK_INVALID_MESSAGE` | The message, `workflowId` or `triggerId` is missing. |
| `WEBHOOK_IDS_REQUIRED` | `workflowId` or `triggerId` is empty. |
| `WEBHOOK_WORKFLOW_MISMATCH` | `workflowId` doesn't match the loaded workflow. |
| `RUN_IN_PROGRESS` | Another run is active. |
| `WEBHOOK_TRIGGER_NOT_FOUND` | No Webhook Trigger step has this identifier. |
| `WEBHOOK_METHOD_MISMATCH`, `WEBHOOK_PATH_MISMATCH` | The request doesn't match the trigger. |
| `WEBHOOK_AUTH_REQUIRED` | The trigger requires authentication and `authenticated` isn't `true`. |

I> The designer trusts the `authenticated` flag. Verify the signature or credentials on your backend before setting it. Webhooks that arrive during a run are rejected, so queue them on your backend if you need every event to run.
