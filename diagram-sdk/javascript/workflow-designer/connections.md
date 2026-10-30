---
layout: post
title: Connections and ports in JavaScript Workflow Designer control | Syncfusion®
description: Learn how to connect steps, use output ports and validate connections in the Syncfusion® JavaScript Workflow Designer control.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Connections and ports in JavaScript Workflow Designer control

<<<<<<< HEAD
A connection links an output port of one step to the input port of another step. The run follows connections from the trigger.

| Property | Type | Description |
|---|---|---|
| `id` | `string` | A unique identifier. |
| `sourceStepId` | `string` | The step the connection starts from. |
| `targetStepId` | `string` | The step the connection ends at. |
=======
A connection links an output port of one step to the input port of another step. During a run, the designer follows the connections from the trigger.

| Property | Type | Description |
|---|---|---|
| `id` | `string` | A unique identifier. See [Identifier rules](./workflow-steps#identifier-rules). |
| `sourceStepId` | `string` | The step that the connection starts from. |
| `targetStepId` | `string` | The step that the connection ends at. |
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
| `sourcePort` | `string` | The output port. Defaults to `'output'`. |
| `label` | `string` | The text shown on the connection. |
| `type` | `'Straight' \| 'Orthogonal' \| 'Bezier'` | The line shape. Defaults to `'Orthogonal'`. |

## Output ports

<<<<<<< HEAD
=======
The output ports of a step depend on its type:

>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
| Step type | Output ports |
|---|---|
| `Condition` | `true`, `false` |
| `Switch` | One port for each branch name |
| `Loop` | `loop` (runs for each item), `done` (runs after the last item) |
| `Approve` | `approved`, `declined` |
| `End` | None |
| All other steps | `output` |

<<<<<<< HEAD
When `errorHandling.errorPort` is `true`, the step also has an `error` port. That port runs when the step fails.
=======
When a step's `errorHandling.errorPort` is `true`, the step also has an `error` port, which runs when the step fails.

The following connections route the two outcomes of an Approve step to different steps:
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

{% tabs %}
{% highlight js tabtitle="app.js" %}

const connections = [
    { id: 'toApproved', sourceStepId: 'approval', sourcePort: 'approved', targetStepId: 'createOrder' },
    { id: 'toDeclined', sourceStepId: 'approval', sourcePort: 'declined', targetStepId: 'notifyUser' }
];

{% endhighlight %}
{% endtabs %}

## Create connections interactively

<<<<<<< HEAD
Drag from a step's output port to another step. You can also use the **Add** handle on a step or connection to insert a new step from the step collection with its connections already in place.

## Validate connections

The `beforeConnect` event is triggered before the user adds a connection. Set `cancel` to `true` to reject it.
=======
Drag from a step's output port to another step. You can also use the **Add** handle on a step or connection to insert a new step from the step collection, with its connections already in place.

## Validate connections

The `beforeConnect` event is triggered before the user adds a connection. To reject the connection, set `cancel` to `true`.

The following example allows only one connection out of the trigger:
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

{% tabs %}
{% highlight js tabtitle="app.js" %}

const designer = new ej.workflowdesigner.WorkflowDesigner({
    height: '640px',
    beforeConnect: (args) => {
        // Allow only one connection out of the trigger.
        if (args.connection.sourceStepId === 'start' && hasOutgoing('start')) {
            args.cancel = true;
        }
    }
});

{% endhighlight %}
{% endtabs %}

## Connection rules

<<<<<<< HEAD
* Each output port can lead to only **one** step (`FANOUT`). To do several things after a step, connect them one after another.
* Trigger steps can't have incoming connections (`TRIGGER_INCOMING`).
* A step can't connect to itself, and the same connection can't be added twice.
* Both ends must be existing steps, using ports the step type supports.
* Workflows can't contain cycles (`CYCLE`). To repeat steps, use a [Loop](./workflow-steps#loop) step.

[Validation](./validation) reports every break of these rules, and a workflow with errors can't run. On import, self-connections, duplicate connections, missing endpoints, invalid ports, cycles and incoming connections to triggers reject the file. A second connection from the same port (`FANOUT`) is loaded but reported.
=======
* Each output port can lead to only one step (`FANOUT`). To do several things after a step, connect them one after another.
* Trigger steps can't have incoming connections (`TRIGGER_INCOMING`).
* A step can't connect to itself, and the same connection can't be added twice.
* Both ends must be existing steps, and the connection must use ports that the step type supports.
* Workflows can't contain cycles (`CYCLE`). To repeat steps, use a [Loop](./workflow-steps#loop) step.

[Validation](./validation) reports every break of these rules, and a workflow with errors can't run.

On import, the following problems reject the file: self-connections, duplicate connections, missing endpoints, invalid ports, cycles, and incoming connections to triggers. A second connection from the same port (`FANOUT`) is loaded but reported.
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
