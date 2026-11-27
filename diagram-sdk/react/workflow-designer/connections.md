---
layout: post
title: React Workflow Designer Connections and Ports | Syncfusion®
description: Learn how connections link workflow steps through input and output ports, and which connection rules the Syncfusion React Workflow Designer enforces.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Connections and Ports in React Workflow Designer

A connection links an output port of one step to the input port of another step. Connections define the order in which steps run: during a run, the Workflow Designer starts at a trigger and follows the connections from step to step. Each connection is a `WorkflowConnection` object in the `workflowConnections` array of the workflow.

| Property | Type | Description |
|---|---|---|
| `id` | `string` | Specifies the unique identifier of the connection. See [Identifier rules](./workflow-steps#identifier-rules). |
| `sourceStepId` | `string` | Specifies the identifier of the step that the connection starts from. |
| `targetStepId` | `string` | Specifies the identifier of the step that the connection ends at. |
| `sourcePort` | `string` | Specifies the output port that the connection leaves from, such as `'true'` on a Condition step. Defaults to `'output'`. |
| `label` | `string` | Specifies the text displayed on the connection, for example to describe a branch. |
| `type` | `WorkflowConnectionType` | Specifies the line shape: `'Straight'`, `'Orthogonal'`, or `'Bezier'`. Defaults to `'Orthogonal'`. |

To set the colors and arrowheads of connections, see [Connection defaults](./appearance#connection-defaults).

## Input port

Every step except a trigger has exactly one input port. A connection always enters its target step through this port, so you choose only the target step with `targetStepId`. Trigger steps have no input port, because they start the workflow.

## Output ports

The output ports of a step depend on its type. The `sourcePort` property of a connection selects one of them, which lets a step lead to different steps depending on the outcome.

| Step type | Output ports |
|---|---|
| `Condition` | `true` and `false`, for the result of the condition rules. |
| `Switch` | One port for each branch name, plus the port named by `defaultBranch` (`default` unless changed), used when no branch matches. |
| `Loop` | `loop`, which runs once for each item, and `done`, which runs after the last item. |
| `Approve` | `approved` and `declined`, for the reviewer's decision. |
| `End` | None. An End step ends its path. |
| All other steps | `output`. |

The following example connects the `true` and `false` output ports of a Condition step to different End steps. Run the workflow to see which branch is followed based on the configured condition.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/connections/connections-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/connections/connections-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/workflow-designer/connections/connections-cs1" %}

## Create connections interactively

Users don't draw connections by hand. Instead, they use the add handle of a step's output port, or the insert handle of an existing connection, to add a step from the step collection. The designer adds the new step with its connections already in place. To add connections from code, use the [`addWorkflowItem`](./update-workflow#add-workflow-items) method.

## Connection rules

The Workflow Designer checks every connection against the following rules, so that a workflow always has a clear order of execution:

* **One connection for each output port:** An output port can lead to only one step. To do several things after a step, connect the steps one after another.
* **No connections into triggers:** A trigger starts the workflow, so a connection can't end at a trigger step.
* **No self-connections or duplicates:** A step can't connect to itself, and the same connection can't be added twice.
* **Valid endpoints and ports:** Both ends must be existing steps, and the connection must use an output port that the source step supports.
* **No cycles:** A connection can't lead back to an earlier step. To repeat steps, use a [Loop](./workflow-steps#loop) step.

A workflow that breaks any of these rules can't run. [Validation](./validation) lists each problem, with the affected step or connection, in the execution log and in the result of the `validateWorkflow` method.

N> When you import a workflow, self-connections, duplicate connections, missing endpoints, invalid ports, cycles, and connections into triggers reject the file. A second connection from the same output port doesn't reject the file; the workflow is loaded, and validation reports the problem.
