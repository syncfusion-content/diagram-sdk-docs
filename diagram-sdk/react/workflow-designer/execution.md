---
layout: post
title: Running workflows in React Workflow Designer | Syncfusion®
description: Learn how to run, stop and monitor workflows, configure execution speed, and handle step errors in the Syncfusion React Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Running workflows in React Workflow Designer

## Run a workflow

Users run the workflow from the **Execute** toolbar command or with <kbd>Ctrl</kbd> + <kbd>Enter</kbd>. To run it from code, call `runExecution`. It returns a promise of the result.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    async function runWorkflow() {
        const result = await workflowInstance.current?.runExecution();
        if (result) {
            console.log(result.status);
            console.log(result.visitedSteps);
            console.log(result.context.nodes);
        }
    }

    return (
        <>
            <WorkflowDesignerComponent id="workflow" ref={workflowInstance} height="500px" />
            <button onClick={runWorkflow}>Run workflow</button>
        </>
    );
}

{% endhighlight %}
{% endtabs %}

Call the methods on the component instance stored in a React ref, as shown in [Getting started](./getting-started).

* `runExecution(context?, triggerId?)` validates the workflow, then runs it from the trigger. When the workflow has several triggers, pass the trigger identifier.
* `runFromStep(stepId, context?)` runs from a single step. Use `context` to supply the data that earlier steps would have produced.
* `stopExecution()` stops the run. `executionCompleted` is triggered with status `'Stopped'`.

The run doesn't start when validation finds errors. Check the workflow first with `validateWorkflow()` (see [Validation](./validation)).

## Execution events

| Event | Triggered when |
|---|---|
| `executionStarted` | A run starts, after validation passes. |
| `beforeStepExecute` | Before each step. Set `cancel` to `true` to end the run with status `'Cancelled'`. |
| `executionStepStarted` | A step starts. |
| `executionStepCompleted` | A step completes. `outputPort` tells you which branch was taken. |
| `executionStepFailed` | A step fails. `retryAttempt` is set during retries. |
| `executionCompleted` | The run ends, whatever the outcome. |

Pass event handlers as component props.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    function onExecutionStepFailed(args: any) {
        console.warn(args.step.name, args.error.code, args.error.message);
    }

    function onExecutionCompleted(args: any) {
        console.log('Run finished:', args.result.status);
    }
    
    return (
        <WorkflowDesignerComponent
            id="workflow"
            height="500px"
            executionStepFailed={onExecutionStepFailed}
            executionCompleted={onExecutionCompleted}
        />
    );
}

{% endhighlight %}
{% endtabs %}

The `executionState` property returns the current run state, such as `'Idle'` or `'Running'`.

## Execution speed

By default, the designer waits 550 ms between steps so users can follow the run on the canvas. Set `executionSettings.executionSpeed` to `0` to run without a delay.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    return (
        <WorkflowDesignerComponent
            id="workflow"
            executionSettings={{ executionSpeed: 0 }}
            height="500px"
        />
    );
}

{% endhighlight %}
{% endtabs %}

## Error handling

Configure each step's behavior on failure with `errorHandling`:

| Property | Description |
|---|---|
| `timeoutMs` | How long the step can run before it fails. `0` uses the default of 30 seconds. |
| `retryPolicy` | `{ enabled, maxAttempts, delayMs }`. `maxAttempts` counts the first attempt. |
| `continueOnError` | Continue to the next step when the step fails. |
| `errorPort` | Add an `error` output port for a recovery path. |

{% tabs %}
{% highlight ts tabtitle="workflow.ts" %}

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

The execution log lists each step's status, input and output. Select a row to inspect the context at that step. Hide the log with `executionLogSettings.visible`.

## Limits

* A run stops after 10,000 step executions.
* Runs happen in the browser and end when the page is closed or reloaded.
* Only one run can be active at a time.
