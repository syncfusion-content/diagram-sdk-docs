---
layout: post
title: Running workflows in Angular Workflow Designer | Syncfusion®
description: Learn how to run, stop and monitor workflows, configure execution speed, and handle step errors in the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Running workflows in Angular Workflow Designer

## Run a workflow

Users run the workflow from the **Execute** toolbar command or with <kbd>Ctrl</kbd> + <kbd>Enter</kbd>. To run it from code, call `runExecution`. It returns a promise of the result.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerModule, WorkflowDesignerComponent } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner #workflow id=\"workflow\" height=\"500px\"></ejs-workflowdesigner><button type=\"button\" (click)=\"runWorkflow()\">Run workflow</button>"
})
export class AppComponent {
    @ViewChild('workflow') public workflowDesigner!: WorkflowDesignerComponent;

    async runWorkflow(): Promise<void> {
        const result = await this.workflowDesigner.runExecution();
        if (result) console.log(result.status, result.visitedSteps, result.context.nodes);
    }
}

{% endhighlight %}
{% endtabs %}

Call the methods on the component instance stored in a `@ViewChild` reference, as shown in [Getting started](./getting-started).

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

Pass event handlers as Angular component bindings.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"500px\" (executionStepFailed)=\"onExecutionStepFailed($event)\" (executionCompleted)=\"onExecutionCompleted($event)\"></ejs-workflowdesigner>"
})
export class AppComponent {

    onExecutionStepFailed(args: any): void { console.warn(args.step.name, args.error.code, args.error.message); }
    onExecutionCompleted(args: any): void { console.log('Run finished:', args.result.status); }
}

{% endhighlight %}
{% endtabs %}

The `executionState` property returns the current run state, such as `'Idle'` or `'Running'`.

## Execution speed

By default, the designer waits 550 ms between steps so users can follow the run on the canvas. Set `executionSettings.executionSpeed` to `0` to run without a delay.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"500px\" [executionSettings]=\"executionSettings\"></ejs-workflowdesigner>"
})
export class AppComponent {

    public executionSettings = { executionSpeed: 0 };
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
