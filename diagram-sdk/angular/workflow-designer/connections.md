---
layout: post
title: Connections and ports in Angular Workflow Designer | Syncfusion®
description: Learn how to connect steps, use output ports and validate connections in the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Connections and ports in Angular Workflow Designer

A connection links an output port of one step to the input port of another step. The run follows connections from the trigger.

| Property | Type | Description |
|---|---|---|
| `id` | `string` | A unique identifier. |
| `sourceStepId` | `string` | The step the connection starts from. |
| `targetStepId` | `string` | The step the connection ends at. |
| `sourcePort` | `string` | The output port. Defaults to `'output'`. |
| `label` | `string` | The text shown on the connection. |
| `type` | `'Straight' \| 'Orthogonal' \| 'Bezier'` | The line shape. Defaults to `'Orthogonal'`. |

## Output ports

| Step type | Output ports |
|---|---|
| `Condition` | `true`, `false` |
| `Switch` | One port for each branch name |
| `Loop` | `loop` (runs for each item), `done` (runs after the last item) |
| `Approve` | `approved`, `declined` |
| `End` | None |
| All other steps | `output` |

When `errorHandling.errorPort` is `true`, the step also has an `error` port. That port runs when the step fails.

{% tabs %}
{% highlight ts tabtitle="workflow.ts" %}

const connections = [
    { id: 'toApproved', sourceStepId: 'approval', sourcePort: 'approved', targetStepId: 'createOrder' },
    { id: 'toDeclined', sourceStepId: 'approval', sourcePort: 'declined', targetStepId: 'notifyUser' }
];

{% endhighlight %}
{% endtabs %}

Add these objects to the `workflowConnections` array of the workflow definition before loading it with `importWorkflow`.

## Create connections interactively

Drag from a step's output port to another step. You can also use the **Add** handle on a step or connection to insert a new step from the step collection with its connections already in place.

## Validate connections

The `beforeConnect` event is triggered before the user adds a connection. Set `cancel` to `true` to reject it. Pass the handler as an Angular event binding.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"640px\" (beforeConnect)=\"onBeforeConnect($event)\"></ejs-workflowdesigner>"
})
export class AppComponent {

    onBeforeConnect(args: any): void { if (args.connection.sourceStepId === 'start') args.cancel = true; }
}

{% endhighlight %}
{% endtabs %}

## Connection rules

* Each output port can lead to only **one** step (`FANOUT`). To do several things after a step, connect them one after another.
* Trigger steps can't have incoming connections (`TRIGGER_INCOMING`).
* A step can't connect to itself, and the same connection can't be added twice.
* Both ends must be existing steps, using ports the step type supports.
* Workflows can't contain cycles (`CYCLE`). To repeat steps, use a [Loop](./workflow-steps#loop) step.

[Validation](./validation) reports every break of these rules, and a workflow with errors can't run. On import, self-connections, duplicate connections, missing endpoints, invalid ports, cycles and incoming connections to triggers reject the file. A second connection from the same port (`FANOUT`) is loaded but reported.
