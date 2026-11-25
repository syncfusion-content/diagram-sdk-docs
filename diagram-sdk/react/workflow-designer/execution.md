---
layout: post
title: Running workflows in React Workflow Designer control | Syncfusion®
description: Learn how to run, stop, and monitor workflows, handle execution events, and control execution speed in the Syncfusion React Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Running Workflows in React Workflow Designer

The Workflow Designer runs workflows in the browser, so users can test a workflow while they build it. Users start a run from the toolbar, and your code can start, stop, and monitor runs with methods and events. This section also covers execution speed, the execution log, and run limits.

## Run a workflow

Users run the whole workflow with the **Execute** toolbar command or by pressing <kbd>Ctrl</kbd> + <kbd>Enter</kbd>. While the workflow runs, **Execute** is replaced by **Stop**, and <kbd>Ctrl</kbd> + <kbd>Enter</kbd> stops the run.

Users can also execute a single selected step, for example to check its settings. Only that step runs; the run doesn't continue to the steps connected after it.

## Run methods

The following methods start and stop runs from code.

| Method | Description |
|---|---|
| [`runExecution`](https://ej2.syncfusion.com/react/documentation/api/workflow-designer#runexecution) | Validates the workflow and runs it from a trigger. It returns a promise that resolves with the `WorkflowExecutionResult` when the run ends. |
| [`stopExecution`](https://ej2.syncfusion.com/react/documentation/api/workflow-designer#stopexecution) | Stops the run in progress. The `executionCompleted` event is then triggered with `result.status` set to `'Stopped'`. |
| [`triggerWebhook`](https://ej2.syncfusion.com/react/documentation/api/workflow-designer#triggerwebhook) | Starts a run from a Webhook Trigger step with a webhook message that your backend received. See [Webhook trigger](./webhook-trigger). |

The `runExecution` method accepts the following optional arguments:

* `context`: Supplies input data for the run, such as the values that a manual trigger needs. See [Provide input data](./expressions#provide-input-data).
* `triggerId`: Specifies the trigger to start from, when the workflow has more than one.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function App() {
    const workflowInstance = React.useRef(null);

    function runWorkflow() {
        const designer = workflowInstance.current;
        if (!designer) {
            return;
        }
        designer.runExecution().then((result) => {
            console.log(result.status); // 'Completed', 'Failed', 'Stopped', or 'Cancelled'
            result.stepResults.forEach((step) => {
                console.log(step.id, step.response); // Each step that ran, in run order
            });
        });
    }

    return (
        <>
            <button type="button" onClick={runWorkflow}>Run workflow</button>
            <WorkflowDesignerComponent
                id="workflow"
                ref={workflowInstance}
                height="500px"
            />
        </>
    );
}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';
import type { WorkflowExecutionResult, WorkflowStepResult } from '@syncfusion/ej2-workflow-designer';

function App() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    function runWorkflow(): void {
        const designer = workflowInstance.current;
        if (!designer) {
            return;
        }

        designer.runExecution().then((result: WorkflowExecutionResult) => {
            console.log(result.status);              // 'Completed', 'Failed', 'Stopped', or 'Cancelled'
            result.stepResults.forEach((step: WorkflowStepResult) => {
                console.log(step.id, step.response); // Each step that ran, in run order
            });
        });
    }

    return (
        <>
            <button type="button" onClick={runWorkflow}>Run workflow</button>
            <WorkflowDesignerComponent
                id="workflow"
                ref={workflowInstance}
                height="500px"
            />
        </>
    );
}
{% endhighlight %}
{% endtabs %}

When validation finds errors, the workflow doesn't run: the run ends with the status `'Failed'`, and `result.error.type` is `'Validation'`. To check the workflow before you run it, call the `validateWorkflow` method. See [Validation](./validation).

N> Only one run can be active at a time. Calling `runExecution` while a run is in progress returns a rejected promise.

The following example loads a workflow with a Manual Trigger, Delay, and End step. Click the **Run workflow** button to start the workflow by using the `runExecution` method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/execution/execution-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/execution/execution-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/workflow-designer/execution/execution-cs1" %}

## Execution result

The `WorkflowExecutionResult` object describes the outcome of a run. It's returned by `runExecution` and `triggerWebhook`, and it's passed to the `executionCompleted` event.

| Property | Description |
|---|---|
| `status` | Specifies the final status of the run: `'Completed'`, `'Failed'`, `'Stopped'`, or `'Cancelled'`. The values are described in the following table. |
| `stepResults` | Lists the steps that ran, in run order, each with its `id`, `stepType`, `name`, and `response`. A step that ran more than once, for example inside a loop, appears once for each run. |
| `visitedConnections` | Lists the identifiers of the connections that the run followed, in order. |
| `lastStep` | Contains the result of the last step that ran. |
| `error` | Describes the error that ended the run, when the run failed, with its `type`, `code`, `message`, and the related `stepId`. |

| Status | Description |
|---|---|
| `'Completed'` | Every path of the run finished. |
| `'Failed'` | A step failed, or the workflow didn't pass validation. For a validation failure, `result.error.type` is `'Validation'`, and `result.error.details` lists the validation messages. |
| `'Stopped'` | The user clicked **Stop**, or your code called `stopExecution`. |
| `'Cancelled'` | The run was cancelled before one of its steps ran. |

## Execution events

The Workflow Designer triggers the following events during a run. Use them to show progress in your own user interface, to record runs, or to react to failures.

| Event | Description |
|---|---|
| [`executionStarted`](https://ej2.syncfusion.com/react/documentation/api/workflow-designer#executionstarted) | Triggers when a run starts, after the workflow passes validation. Its `workflow` argument contains the workflow being run. |
| [`executionStepStarted`](https://ej2.syncfusion.com/react/documentation/api/workflow-designer#executionstepstarted) | Triggers when the run reaches a step, before the step runs. Its arguments contain the `step`, the `stepResults` so far, the `previousStep`, the `incomingConnection`, and the `outgoingConnections`. |
| [`executionStepCompleted`](https://ej2.syncfusion.com/react/documentation/api/workflow-designer#executionstepcompleted) | Triggers after a step completes. Its `result` argument contains the step's response, and `outputPort` tells you which port the run continues from, which identifies the branch taken by Condition and Switch steps. |
| [`executionStepFailed`](https://ej2.syncfusion.com/react/documentation/api/workflow-designer#executionstepfailed) | Triggers when a step fails. Its `error` argument contains the `code` and `message` of the failure. |
| [`executionCompleted`](https://ej2.syncfusion.com/react/documentation/api/workflow-designer#executioncompleted) | Triggers once when a run ends, whatever the outcome, including a stopped run and a run that doesn't start because validation found errors. Its `result` argument contains the `WorkflowExecutionResult`. |

N> The arguments of the step events are copies, so changing them doesn't change the run.

The following example logs failed steps and the final status of each run.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/execution/execution-events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/execution/execution-events-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/workflow-designer/execution/execution-events-cs1" %}

## Execution speed

The `executionSpeed` property of [`executionSettings`](https://ej2.syncfusion.com/react/documentation/api/workflow-designer#executionsettings) sets the pause, in milliseconds, before each step runs. The pause lets users follow the progress of a run on the canvas. The default value is `550`.

* A higher value slows the run down, which suits demonstrations and training.
* A lower value shortens the pause between steps.
* A value of `0` runs the steps without a pause, and Delay steps also complete without waiting, which suits automated tests. Negative values are treated as `0`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
const executionSettings = { executionSpeed: 1000 };
<WorkflowDesignerComponent
    id="workflow"
    executionSettings={executionSettings}
/>
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
type WorkflowProps = React.ComponentProps<typeof WorkflowDesignerComponent>;

const executionSettings: WorkflowProps['executionSettings'] = { executionSpeed: 1000 };
<WorkflowDesignerComponent
    id="workflow"
    executionSettings={executionSettings}
/>
{% endhighlight %}
{% endtabs %}

The `executionSettings` property also sets the `credentialMode`, which controls how AI steps and AI Assist reach the AI provider. See [Credential mode](./security#credential-mode).

## Execution log

The execution log lists the status, input, and output of each step during a run. Users can select a row to inspect the data at that step, and search or clear the log. To hide the log, see [Execution log settings](./user-interface#execution-log).

## Limits

* **Step execution limit:** A run can perform at most 10,000 step executions. The limit counts every time a step runs, not the number of distinct steps; for example, a Loop step that runs three steps for each of 100 items adds 300 step executions. When a run reaches the limit, it ends with the status `'Failed'`, and `result.error.code` is `'STEP_LIMIT'`. For Recurring and Cron schedules, the count starts again at each occurrence. The limit can't be changed; to stay below it, set the `maxIterations` setting of Loop steps.
* **Browser lifetime:** Runs happen in the browser, and they end when the page is closed or reloaded.
* **One run at a time:** Only one run can be active at a time.

## See also

* [Host integration](./host-integration)
* [Validation](./validation)
* [Expressions and the variable picker](./expressions)
