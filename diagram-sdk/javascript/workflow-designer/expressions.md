---
layout: post
title: Expressions and runtime context in JavaScript Workflow Designer | Syncfusion®
description: Learn how to read data from triggers, earlier steps, variables and loops with expressions in the Syncfusion® JavaScript Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Expressions and runtime context in JavaScript Workflow Designer

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
{% highlight js tabtitle="app.js" %}

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
{% highlight js tabtitle="app.js" %}

designer.runExecution({ input: { response: { orderId: 'SO-1001' } } });

{% endhighlight %}
{% endtabs %}

## Rules

* Expressions only read values. They can't call functions.
* The `__proto__`, `prototype` and `constructor` segments, plus global names such as `window` and `document`, are rejected.
* Paths whose names look like secrets (for example `password`, `token` or `apiKey`) are masked in the execution log.
* Invalid syntax is reported by `validateWorkflow`.
