---
layout: post
title: Running workflows in TypeScript Workflow Designer control | Syncfusion®
description: Learn how to run, stop and monitor workflows, configure execution speed, and handle step errors in the Syncfusion TypeScript Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Running Workflows in EJ2 TypeScript Workflow Designer

Users can run a workflow from the toolbar, and your code can start, stop, and monitor runs. This section also covers execution speed, error handling, the execution log, and run limits.

## Run a workflow

Users run the workflow with the **Execute** toolbar command or by pressing <kbd>Ctrl</kbd> + <kbd>Enter</kbd>. To run it from code, call [`runExecution`](https://ej2.syncfusion.com/documentation/api/workflow-designer/#runexecution), which returns a promise of the result:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { WorkflowExecutionResult } from '@syncfusion/ej2-workflow-designer';

designer.runExecution().then((result: WorkflowExecutionResult) => {
    console.log(result.status);          // 'Completed', 'Failed', 'Stopped', or 'Cancelled'
    console.log(result.visitedSteps);    // Identifiers of the steps that ran
    console.log(result.context.nodes);   // Responses of every step
});

{% endhighlight %}
{% endtabs %}

The following methods control a run:

* `runExecution(context?, triggerId?)` validates the workflow and then runs it from the trigger. When the workflow has several triggers, pass the trigger identifier.
* [`runFromStep(stepId, context?)`](https://ej2.syncfusion.com/documentation/api/workflow-designer/#runfromstep) runs the workflow from a single step. Use `context` to supply the data that earlier steps would have produced.
* [`stopExecution()`](https://ej2.syncfusion.com/documentation/api/workflow-designer/#stopexecution) stops the run. `executionCompleted` is then triggered with the status `'Stopped'`.

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
{% highlight ts tabtitle="app.ts" %}

import {
    WorkflowDesigner, ExecutionStepFailedEventArgs, ExecutionCompletedEventArgs
} from '@syncfusion/ej2-workflow-designer';

const designer: WorkflowDesigner = new WorkflowDesigner({
    height: '640px',
    executionStepFailed: (args: ExecutionStepFailedEventArgs) => {
        console.warn(args.step.name, args.error.code, args.error.message);
    },
    executionCompleted: (args: ExecutionCompletedEventArgs) => {
        console.log('Run finished:', args.result.status);
    }
});
designer.appendTo('#workflowDesigner');

{% endhighlight %}
{% endtabs %}

The `executionState` property returns the current run state, such as `'Idle'` or `'Running'`.

## Execution speed

By default, the designer waits 550 ms between steps so that users can follow the run on the canvas. To run without a delay, set `executionSettings.executionSpeed` to `0`:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

const designer: WorkflowDesigner = new WorkflowDesigner({
    executionSettings: { executionSpeed: 0 }
});

{% endhighlight %}
{% endtabs %}

## Error handling

Use the `errorHandling` property of a step to set what happens when it fails:

| Property | Description |
|---|---|
| `timeoutMs` | How long the step can run before it fails. `0` uses the default of 30 seconds. |
| `retryPolicy` | `{ enabled, maxAttempts, delayMs }`. `maxAttempts` includes the first attempt. |
| `continueOnError` | Continues to the next step when the step fails. |
| `errorPort` | Adds an `error` output port for a recovery path. |

The following API Request step times out after 10 seconds, tries up to three times, and routes failures to its `error` port:

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

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

The execution log lists the status, input, and output of each step. Select a row to inspect the context at that step. To hide the log, set `executionLogSettings.visible` to `false`.

## Limits

* A run stops after 10,000 step executions.
* Runs happen in the browser, and they end when the page is closed or reloaded.
* Only one run can be active at a time.
