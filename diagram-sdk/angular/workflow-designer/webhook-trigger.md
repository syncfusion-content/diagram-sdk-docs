---
layout: post
title: Webhook trigger in Angular Workflow Designer | Syncfusion
description: Learn how to start workflows from webhook calls received by your backend in the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Webhook trigger in Angular Workflow Designer

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
{% highlight ts tabtitle="app.component.ts" %}

import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { WorkflowDesignerModule, WorkflowDesignerComponent } from '@syncfusion/ej2-angular-workflow-designer';
import type { WorkflowWebhookTriggerMessage } from '@syncfusion/ej2-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner #workflow id=\"workflow\" height=\"500px\"></ejs-workflowdesigner>"
})
export class AppComponent implements AfterViewInit, OnDestroy {
    @ViewChild('workflow') public workflowDesigner!: WorkflowDesignerComponent;

    private onWorkflowWebhookTriggered = async (message: WorkflowWebhookTriggerMessage): Promise<void> => {
        try { const result = await this.workflowDesigner.triggerWebhook(message); console.log('Run finished:', result.status); }
        catch (error) { console.error(error); }
    };
    ngAfterViewInit(): void { connection.on('WorkflowWebhookTriggered', this.onWorkflowWebhookTriggered); }
    ngOnDestroy(): void { connection.off('WorkflowWebhookTriggered', this.onWorkflowWebhookTriggered); }
}

{% endhighlight %}
{% endtabs %}

This example assumes `connection` is an established SignalR or WebSocket client that provides `on` and `off` event methods.

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
