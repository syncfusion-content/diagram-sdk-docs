---
layout: post
title: Connections and ports in Vue Workflow Designer | Syncfusion®
description: Learn how to connect steps, use output ports and validate connections in the Syncfusion Vue Workflow Designer.
control: Workflow Designer
platform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Connections and ports in Vue Workflow Designer

A connection links an output port of one step to the input port of another step. During a run, the designer follows the connections from the trigger.

| Property | Type | Description |
|---|---|---|
| `id` | `string` | A unique identifier. See [Identifier rules](./workflow-steps#identifier-rules). |
| `sourceStepId` | `string` | The step that the connection starts from. |
| `targetStepId` | `string` | The step that the connection ends at. |
| `sourcePort` | `string` | The output port. Defaults to `'output'`. |
| `label` | `string` | The text shown on the connection. |
| `type` | `'Straight' \| 'Orthogonal' \| 'Bezier'` | The line shape. Defaults to `'Orthogonal'`. |

## Output ports

The output ports of a step depend on its type:

| Step type | Output ports |
|---|---|
| `Condition` | `true`, `false` |
| `Switch` | One port for each branch name |
| `Loop` | `loop` (runs for each item), `done` (runs after the last item) |
| `Approve` | `approved`, `declined` |
| `End` | None |
| All other steps | `output` |

The following connections route the two outcomes of an Approve step to different steps:

{% tabs %}
{% highlight js tabtitle="App.vue" %}

const connections = [
    { id: 'toApproved', sourceStepId: 'approval', sourcePort: 'approved', targetStepId: 'createOrder' },
    { id: 'toDeclined', sourceStepId: 'approval', sourcePort: 'declined', targetStepId: 'notifyUser' }
];

{% endhighlight %}
{% endtabs %}

## Create connections interactively

Drag from a step's output port to another step. You can also use the **Add** handle on a step or connection to insert a new step from the step collection, with its connections already in place.

## Validate connections

The `beforeConnect` event is triggered before the user adds a connection. To reject the connection, set `cancel` to `true`.

The following example allows only one connection out of the trigger:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner ref="designer" :beforeConnect="beforeConnect"></ejs-workflowdesigner>
</template>

<script setup>
import { ref } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const designer = ref(null);
// Returns true when the step already has an outgoing connection.
function hasOutgoing(stepId){
    return (designer.value.ej2Instances.getWorkflow().workflowConnections || []).some(
        (connection) => connection.sourceStepId === stepId
    );
}

const beforeConnect = (args) => {
    if (args.connection.sourceStepId === 'start' && hasOutgoing('start')) {
        args.cancel = true;
    }
};
</script>

{% endhighlight %}
{% endtabs %}

## Connection rules

* Each output port can lead to only one step (`FANOUT`). To do several things after a step, connect them one after another.
* Trigger steps can't have incoming connections (`TRIGGER_INCOMING`).
* A step can't connect to itself, and the same connection can't be added twice.
* Both ends must be existing steps, and the connection must use ports that the step type supports.
* Workflows can't contain cycles (`CYCLE`). To repeat steps, use a [Loop](./workflow-steps#loop) step.

[Validation](./validation) reports every break of these rules, and a workflow with errors can't run.

On import, the following problems reject the file: self-connections, duplicate connections, missing endpoints, invalid ports, cycles, and incoming connections to triggers. A second connection from the same port (`FANOUT`) is loaded but reported.
