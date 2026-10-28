---
layout: post
title: Expressions and runtime context in React Workflow Designer | Syncfusion®
description: Learn how to read data from triggers, earlier steps, variables and loops with expressions in the Syncfusion React Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Expressions and runtime context in React Workflow Designer

During a run, each step can read data from the runtime context. Step settings refer to that data with expressions.

## Expression syntax

* A full value: `$.previousStep.response.body.total`
* Embedded in text: `Order {% raw %}{{$.input.response.orderId}}{% endraw %} has shipped.`
* A field name with spaces: `$.input.response["Delivery date"]`

In the property panel, the variable picker inserts expressions for you.

## Runtime context

| Path | Description |
|---|---|
| `$.input.response` | The trigger data, such as the submitted form values or the webhook payload. |
| `$.input.webhook` | The webhook request details (method, path, and headers) for webhook-triggered runs. |
| `$.previousStep` | The step that ran just before the current one, with its `id`, `stepType`, and `response`. |
| `$.nodes.<stepId>.response` | The response of any step that has already run. |
| `$.variables.<name>` | The values stored by Set Variable steps. |
| `$.loop.currentItem`, `$.loop.index`, `$.loop.count`, `$.loop.all` | The current Loop iteration. |

The following Notify step reads data from an earlier step, a variable, and the previous step:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}
{% raw %}

const notifyStep = {
    id: 'notify', stepType: 'Notify',
    props: {
        channel: 'Email',
        to: '{{$.nodes.getCustomer.response.body.email}}',
        subject: 'Order {{$.variables.orderId}}',
        message: 'Total: {{$.previousStep.response.body.total}}'
    }
};

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Provide initial context

To supply input data, pass a context to `runExecution` or `runFromStep`:

{% tabs %}
{% highlight ts tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    async function runWithInput() {
        const designer = workflowInstance.current;
        if (designer) {
            await designer.runExecution({ input: { response: { orderId: 'SO-1001' } } });
        }
    }

    return (
        <>
            <WorkflowDesignerComponent id="workflow" ref={workflowInstance} height="500px" />
            <button onClick={runWithInput}>Run with input</button>
        </>
    );
}

{% endhighlight %}
{% endtabs %}

## Rules

* Expressions only read values. They can't call functions.
* The `__proto__`, `prototype`, and `constructor` segments are rejected, as are global names such as `window` and `document`.
* Paths whose names look like secrets (for example, `password`, `token`, or `apiKey`) are masked in the execution log.
* `validateWorkflow` reports invalid syntax.
