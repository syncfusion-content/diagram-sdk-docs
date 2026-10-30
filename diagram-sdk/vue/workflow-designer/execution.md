---
layout: post
title: Running workflows in Vue Workflow Designer | Syncfusion®
description: Learn how to run, stop and monitor workflows, configure execution speed, and handle step errors in the Syncfusion Vue Workflow Designer.
control: Workflow Designer
platform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Running workflows in Vue Workflow Designer

Users can run a workflow from the toolbar, and your code can start, stop, and monitor runs. This section also covers execution speed, error handling, the execution log, and run limits.

## Run a workflow

Users run the workflow with the **Execute** toolbar command or by pressing <kbd>Ctrl</kbd> + <kbd>Enter</kbd>. To run it from code, call [`runExecution`](https://ej2.syncfusion.com/vue/documentation/api/workflow-designer/#runexecution), which returns a promise of the result:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner ref="designer"></ejs-workflowdesigner>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';
const designer = ref(null);

onMounted(() => {
designer.value.ej2Instances.runExecution().then((result) => {
    console.log(result.status);          // 'Completed', 'Failed', 'Stopped', or 'Cancelled'
    console.log(result.visitedSteps);    // Identifiers of the steps that ran
    console.log(result.context.nodes);   // Responses of every step
});
});
</script>

{% endhighlight %}
{% endtabs %}

The following methods control a run:

* `runExecution(context?, triggerId?)` validates the workflow and then runs it from the trigger. When the workflow has several triggers, pass the trigger identifier.
* [`runFromStep(stepId, context?)`](https://ej2.syncfusion.com/vue/documentation/api/workflow-designer/#runfromstep) runs only the specified step; it doesn't continue through connected steps. Use `context` to supply the data that step needs.
* [`stopExecution()`](https://ej2.syncfusion.com/vue/documentation/api/workflow-designer/#stopexecution) stops the run. `executionCompleted` is then triggered with the status `'Stopped'`.

The run doesn't start when validation finds errors. To check the workflow first, call `validateWorkflow()`. For details, see [Validation](./validation).

## Execution events

| Event | Triggered when |
|---|---|
| `executionStarted` | A run starts, after validation passes. |
| `beforeStepExecute` | Before each step runs. Set `cancel` to `true` to end the run with the status `'Cancelled'`. |
| `executionStepStarted` | A step starts. |
| `executionStepCompleted` | A step completes. `outputPort` tells you which branch was taken. |
| `executionStepFailed` | A step fails. `retryAttempt` is set during retries. |
| `executionCompleted` | The run ends, whatever the outcome. |

The following example logs failed steps and the final status of each run:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner :height="height" :executionStepFailed="executionStepFailed" :executionCompleted="executionCompleted"></ejs-workflowdesigner>
</template>

<script setup>
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const height = '640px';
const executionStepFailed = (args) => {
    console.warn(args.step.name, args.error.code, args.error.message);
};
const executionCompleted = (args) => {
    console.log('Run finished:', args.result.status);
};
</script>

{% endhighlight %}
{% endtabs %}

The `executionState` property returns the current run state, such as `'Idle'` or `'Running'`.

## Execution speed

By default, the designer waits 550 ms between steps so that users can follow the run on the canvas. To run without a delay, set `executionSettings.executionSpeed` to `0`:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner :executionSettings="executionSettings"></ejs-workflowdesigner>
</template>

<script setup>
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const executionSettings = { executionSpeed: 0 };
</script>

{% endhighlight %}
{% endtabs %}

## Execution log

The execution log lists the status, input, and output of each step. Select a row to inspect the context at that step. To hide the log, set `executionLogSettings.visible` to `false`.

## Limits

* A run stops after 10,000 step executions.
* Runs happen in the browser, and they end when the page is closed or reloaded.
* Only one run can be active at a time.
