---
layout: post
title: Vue Workflow Designer Expressions and Variables | Syncfusion®
description: Learn how workflow steps read data from earlier steps with expressions and the variable picker in the Syncfusion Vue Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Expressions and the Variable Picker in Vue Workflow Designer

During a run, each step can read the data that earlier steps produced, such as the body of an API response or the values submitted in a form. Step settings refer to that data with expressions, which the Workflow Designer resolves just before the step runs. The variable picker in the property panel inserts the right expression for a value, so users don't need to type paths by hand.

## Expression syntax

Expressions start with `$`, followed by the path of the value. They can be used in the following ways:

* **As a whole setting value:** `$.nodes["getOrder"].response.body.total`. A setting that contains only an expression keeps the value's type, such as a number or a list.
* **Inside text, in double braces:** Order <code>&#123;&#123;$.nodes["getOrder"].response.body.id&#125;&#125;</code> has shipped. The value is converted to text.
* **With special characters in a field name:** `$.nodes["orderForm"].response["Delivery date"]`. Use brackets and quotes for names that contain spaces or other special characters.

The following roots are available.

| Root | Description |
|---|---|
| `$.nodes["<stepId>"]` | Returns the result of an earlier step, identified by its `id`. Its `response` property holds the step output. The bracket form works for every valid identifier, including identifiers that contain hyphens. |
| `$.previousStep` | Returns the result of the step that ran just before the current step. |
| `$.loop` | Returns the current item, its index, the item count, and the whole list, for steps inside a Loop step and in Filter conditions. See [Loop](./workflow-steps#loop). |
| `$.input` | Returns the input data of the run, which is also the response of the trigger step. See [Provide input data](#provide-input-data). |

## Use the variable picker

Settings that accept expressions have a variable picker button in the property panel. The picker shows only the data that the selected step can reach, and it inserts the matching expression when the user selects a value. It groups the data in the following cards.

| Card | Description | Inserted expression |
|---|---|---|
| A card for each earlier step, titled with the step name | Contains the response of that step, such as an API response, the submitted form values, the variables of a Set Variable step, or the payload of a webhook. | `$.nodes["<stepId>"].response...` |
| **Previous step response** | Contains the response of the step directly before the selected step. | `$.previousStep.response...` |
| **Loop** | Contains the current item, its index, the item count, and the whole list, for steps inside a Loop step. | `$.loop.currentItem`, `$.loop.index`, `$.loop.count`, `$.loop.all` |
| **Array item fields** | Contains the fields of the list items, for Filter and Sort steps. | `$.loop.currentItem...` |

Run the workflow once to fill the cards with real data. Until then, the cards show the fields that are known from the step settings, such as form fields and Set Variable names.

The following Notify step reads data from an earlier step, from a Set Variable step, and from the previous step.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
const notifyStep = {
    id: 'notify', stepType: 'Notify', name: 'Notify customer',
    props: {
        channel: 'Email',
        to: '{{$.nodes["getCustomer"].response.body.email}}',
        subject: 'Order {{$.nodes["setOrder"].response.orderId}}',
        message: 'Total: {{$.previousStep.response.body.total}}'
    }
};
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
const notifyStep = {
    id: 'notify', stepType: 'Notify', name: 'Notify customer',
    props: {
        channel: 'Email',
        to: '{{$.nodes["getCustomer"].response.body.email}}',
        subject: 'Order {{$.nodes["setOrder"].response.orderId}}',
        message: 'Total: {{$.previousStep.response.body.total}}'
    }
};
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Provide input data

To start a run with input data, pass it in the `input.response` property of the `context` argument of the `runExecution` method. The data becomes the response of the trigger step, so later steps read it from the trigger's card in the variable picker.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <button type="button" @click="runWithInput">Run with input</button>
        <ejs-workflowdesigner ref="workflow" id="workflow" height="500px"></ejs-workflowdesigner>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const workflow = ref(null);

function runWithInput() {
    // The workflow starts from a Manual Trigger step with the identifier 'start'.
    workflow.value.ej2Instances.runExecution({ input: { response: { orderId: 'SO-1001' } } });
    // A later step reads the value with {{$.nodes["start"].response.orderId}}.
}
</script>
{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% raw %}
<template>
    <div id="app">
        <button type="button" @click="runWithInput">Run with input</button>
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
    methods: {
        runWithInput: function () {
            // The workflow starts from a Manual Trigger step with the identifier 'start'.
            this.$refs.workflow.ej2Instances.runExecution({ input: { response: { orderId: 'SO-1001' } } });
            // A later step reads the value with {{$.nodes["start"].response.orderId}}.
        }
    }
};
</script>
{% endraw %}
{% endhighlight %}
{% endtabs %}

## Rules

Expressions are designed to read data safely, so the following rules apply:

* Expressions only read values. They can't call functions or change data.
* The `__proto__`, `prototype`, and `constructor` path segments are rejected, as are global names such as `window` and `document`.
* Values whose names look like secrets, such as `password`, `token`, or `apiKey`, are masked in the execution log.
* An expression that can't be resolved during a run produces an empty value, and the execution log reports it.
* The `validateWorkflow` method reports expressions with invalid syntax as `EXPRESSION_SYNTAX` errors.
