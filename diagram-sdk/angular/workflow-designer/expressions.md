---
layout: post
title: Expressions and runtime context in Angular Workflow Designer | Syncfusion®
description: Learn how to read data from triggers, earlier steps, variables and loops with expressions in the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Expressions and runtime context in Angular Workflow Designer

During a run, each step can read data from the **runtime context**. Step settings refer to that data with expressions.

## Expression syntax

* A full value: `$.previousStep.response.body.total`
* Embedded in text: `Order {{$.input.response.orderId}} has shipped.`
* A field name with spaces: `$.input.response["Delivery date"]`

The variable picker in the property panel inserts expressions for you.

## Runtime context

| Path | Description |
|---|---|
| `$.input.response` | The trigger data, such as the submitted form values or the webhook payload. |
| `$.input.webhook` | Webhook request details (method, path, headers) for webhook-triggered runs. |
| `$.previousStep` | The step that ran just before the current one: `id`, `stepType` and `response`. |
| `$.nodes.<stepId>.response` | The response of any step that has already run. |
| `$.variables.<name>` | Values stored by Set Variable steps. |
| `$.loop.currentItem`, `$.loop.index`, `$.loop.count`, `$.loop.all` | The current Loop iteration. |

{% tabs %}
{% highlight ts tabtitle="workflow.ts" %}

const notifyStep = {
    id: 'notify', stepType: 'Notify',
    props: {
        channel: 'Email',
        to: '{{$.nodes.getCustomer.response.body.email}}',
        subject: 'Order {{$.variables.orderId}}',
        message: 'Total: {{$.previousStep.response.body.total}}'
    }
};

{% endhighlight %}
{% endtabs %}

## Provide initial context

Pass a context to `runExecution` or `runFromStep` to supply input data. For example:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerModule, WorkflowDesignerComponent } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner #workflow id=\"workflow\" height=\"500px\"></ejs-workflowdesigner><button type=\"button\" (click)=\"runWithInput()\">Run with input</button>"
})
export class AppComponent {
    @ViewChild('workflow') public workflowDesigner!: WorkflowDesignerComponent;

    async runWithInput(): Promise<void> { await this.workflowDesigner.runExecution({ input: { response: { orderId: 'SO-1001' } } }); }
}

{% endhighlight %}
{% endtabs %}

## Rules

* Expressions only read values. They can't call functions.
* The `__proto__`, `prototype` and `constructor` segments, plus global names such as `window` and `document`, are rejected.
* Paths whose names look like secrets (for example `password`, `token` or `apiKey`) are masked in the execution log.
* Invalid syntax is reported by `validateWorkflow`.
