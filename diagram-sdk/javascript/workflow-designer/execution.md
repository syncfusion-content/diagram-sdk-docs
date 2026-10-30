---
layout: post
title: Running workflows in JavaScript Workflow Designer control | Syncfusion®
description: Learn how to run, stop and monitor workflows, configure execution speed, and handle step errors in the Syncfusion® JavaScript Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Running workflows in JavaScript Workflow Designer control

<<<<<<< HEAD
## Run a workflow

Users run the workflow from the **Execute** toolbar command or with <kbd>Ctrl</kbd> + <kbd>Enter</kbd>. To run it from code, call `runExecution`. It returns a promise of the result.
=======
Users can run a workflow from the toolbar, and your code can start, stop, and monitor runs. This section also covers execution speed, error handling, the execution log, and run limits.

## Run a workflow

Users run the workflow with the **Execute** toolbar command or by pressing <kbd>Ctrl</kbd> + <kbd>Enter</kbd>. To run it from code, call [`runExecution`](https://ej2.syncfusion.com/documentation/api/workflow-designer/#runexecution), which returns a promise of the result:
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

{% tabs %}
{% highlight js tabtitle="app.js" %}



designer.runExecution().then((result) => {
    console.log(result.status);          // 'Completed', 'Failed', 'Stopped' or 'Cancelled'
    console.log(result.visitedSteps);    // Identifiers of the steps that ran
    console.log(result.context.nodes);   // Responses of every step
});

{% endhighlight %}
{% endtabs %}

<<<<<<< HEAD
* `runExecution(context?, triggerId?)` validates the workflow, then runs it from the trigger. When the workflow has several triggers, pass the trigger identifier.
* `runFromStep(stepId, context?)` runs from a single step. Use `context` to supply the data that earlier steps would have produced.
* `stopExecution()` stops the run. `executionCompleted` is triggered with status `'Stopped'`.

The run doesn't start when validation finds errors. Check the workflow first with `validateWorkflow()` (see [Validation](./validation)).
=======
The following methods control a run:

* `runExecution(context?, triggerId?)` validates the workflow and then runs it from the trigger. When the workflow has several triggers, pass the trigger identifier.
* [`runFromStep(stepId, context?)`](https://ej2.syncfusion.com/documentation/api/workflow-designer/#runfromstep) runs the workflow from a single step. Use `context` to supply the data that earlier steps would have produced.
* [`stopExecution()`](https://ej2.syncfusion.com/documentation/api/workflow-designer/#stopexecution) stops the run. `executionCompleted` is then triggered with the status `'Stopped'`.

The run doesn't start when validation finds errors. To check the workflow first, call `validateWorkflow()`. For details, see [Validation](./validation).
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

## Execution events

| Event | Triggered when |
|---|---|
| `executionStarted` | A run starts, after validation passes. |
<<<<<<< HEAD
| `beforeStepExecute` | Before each step. Set `cancel` to `true` to end the run with status `'Cancelled'`. |
=======
| `beforeStepExecute` | Before each step runs. Set `cancel` to `true` to end the run with the status `'Cancelled'`. |
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
| `executionStepStarted` | A step starts. |
| `executionStepCompleted` | A step completes. `outputPort` tells you which branch was taken. |
| `executionStepFailed` | A step fails. `retryAttempt` is set during retries. |
| `executionCompleted` | The run ends, whatever the outcome. |

<<<<<<< HEAD
=======
The following example logs failed steps and the final status of each run:

>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
{% tabs %}
{% highlight js tabtitle="app.js" %}

const designer = new ej.workflowdesigner.WorkflowDesigner({
    height: '640px',
    executionStepFailed: (args) => {
        console.warn(args.step.name, args.error.code, args.error.message);
    },
    executionCompleted: (args) => {
        console.log('Run finished:', args.result.status);
    }
});

{% endhighlight %}
{% endtabs %}

The `executionState` property returns the current run state, such as `'Idle'` or `'Running'`.

## Execution speed

<<<<<<< HEAD
By default, the designer waits 550 ms between steps so users can follow the run on the canvas. Set `executionSettings.executionSpeed` to `0` to run without a delay.
=======
By default, the designer waits 550 ms between steps so that users can follow the run on the canvas. To run without a delay, set `executionSettings.executionSpeed` to `0`:
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

{% tabs %}
{% highlight js tabtitle="app.js" %}

const designer = new ej.workflowdesigner.WorkflowDesigner({
    executionSettings: { executionSpeed: 0 }
});

{% endhighlight %}
{% endtabs %}

## Error handling

<<<<<<< HEAD
Configure each step's behavior on failure with `errorHandling`:
=======
Use the `errorHandling` property of a step to set what happens when it fails:
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

| Property | Description |
|---|---|
| `timeoutMs` | How long the step can run before it fails. `0` uses the default of 30 seconds. |
<<<<<<< HEAD
| `retryPolicy` | `{ enabled, maxAttempts, delayMs }`. `maxAttempts` counts the first attempt. |
| `continueOnError` | Continue to the next step when the step fails. |
| `errorPort` | Add an `error` output port for a recovery path. |
=======
| `retryPolicy` | `{ enabled, maxAttempts, delayMs }`. `maxAttempts` includes the first attempt. |
| `continueOnError` | Continues to the next step when the step fails. |
| `errorPort` | Adds an `error` output port for a recovery path. |

The following API Request step times out after 10 seconds, tries up to three times, and routes failures to its `error` port:
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

{% tabs %}
{% highlight js tabtitle="app.js" %}

const step = {
    id: 'getRates', stepType: 'ApiRequest',
    props: { method: 'GET', url: 'https://example.com/rates' },
    errorHandling: {
        timeoutMs: 10000,
        retryPolicy: { enabled: true, maxAttempts: 3, delayMs: 2000 },
        errorPort: true
    }
};

{% endhighlight %}
{% endtabs %}

## Execution log

<<<<<<< HEAD
The execution log lists each step's status, input and output. Select a row to inspect the context at that step. Hide the log with `executionLogSettings.visible`.
=======
The execution log lists the status, input, and output of each step. Select a row to inspect the context at that step. To hide the log, set `executionLogSettings.visible` to `false`.
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

## Limits

* A run stops after 10,000 step executions.
<<<<<<< HEAD
* Runs happen in the browser and end when the page is closed or reloaded.
=======
* Runs happen in the browser, and they end when the page is closed or reloaded.
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
* Only one run can be active at a time.
