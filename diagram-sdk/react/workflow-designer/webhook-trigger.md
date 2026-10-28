---
layout: post
title: Webhook trigger in React Workflow Designer | Syncfusion®
description: Learn how to start workflows from webhook calls received by your backend in the Syncfusion React Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Webhook trigger in React Workflow Designer

A Webhook Trigger step starts the workflow when your backend receives an HTTP call. The designer doesn't receive HTTP requests itself. Instead, your backend verifies the request and forwards it to the page, for example, over SignalR or WebSockets. The page then calls `triggerWebhook`.

## Configure the trigger

| Setting | Description |
|---|---|
| `method` | The expected HTTP method. |
| `path` | The expected path. |
| `authMode` | `'None'`, `'Basic'`, `'ApiKeyHeader'`, `'Bearer'`, `'HmacSha256'`, or `'Custom'`. |
| `authRef`, `authHeaderName`, `authSignatureHeaderName` | The details your backend uses to verify the request. |
| `responseMode`, `responseCode`, `responseBody` | The response your backend returns. Set `responseMode` to `'Immediate'`. |
| `payloadSchema` | The fields of the expected payload. The variable picker uses them. |

## Forward a webhook to the designer

When your backend forwards a webhook, pass the message to `triggerWebhook`. The following example receives the message over a SignalR connection:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';
import type { WorkflowWebhookTriggerMessage } from '@syncfusion/ej2-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    React.useEffect(() => {
        async function onWorkflowWebhookTriggered(message: WorkflowWebhookTriggerMessage) {
            const designer = workflowInstance.current;
            if (!designer) {
                return;
            }

            try {
                const result = await designer.triggerWebhook(message);
                console.log('Run finished:', result.status);
            } catch (error) {
                console.error(error);
            }
        }

        connection.on('WorkflowWebhookTriggered', onWorkflowWebhookTriggered);
        return () => connection.off('WorkflowWebhookTriggered', onWorkflowWebhookTriggered);
    }, []);

    return <WorkflowDesignerComponent id="workflow" ref={workflowInstance} height="500px" />;
}

{% endhighlight %}
{% endtabs %}

The message contains `workflowId`, `triggerId`, `payload`, `method`, `path`, `context`, and `authenticated`. In the workflow, the payload is available as `$.input.response` and the request details as `$.input.webhook`.

## Errors

When the webhook can't start a run, the promise rejects with a `WorkflowError` whose `code` is one of the following:

| Code | Reason |
|---|---|
| `WEBHOOK_INVALID_MESSAGE` | The message, `workflowId`, or `triggerId` is missing. |
| `WEBHOOK_IDS_REQUIRED` | `workflowId` or `triggerId` is empty. |
| `WEBHOOK_WORKFLOW_MISMATCH` | `workflowId` doesn't match the loaded workflow. |
| `RUN_IN_PROGRESS` | Another run is active. |
| `WEBHOOK_TRIGGER_NOT_FOUND` | No Webhook Trigger step has this identifier. |
| `WEBHOOK_METHOD_MISMATCH`, `WEBHOOK_PATH_MISMATCH` | The request doesn't match the trigger. |
| `WEBHOOK_AUTH_REQUIRED` | The trigger requires authentication, and `authenticated` isn't `true`. |

I> The designer trusts the `authenticated` flag, so verify the signature or credentials on your backend before you set it. Webhooks that arrive during a run are rejected. If every event must run, queue the webhooks on your backend.
