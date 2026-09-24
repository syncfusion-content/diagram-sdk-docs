---
layout: post
title: Steps in TypeScript Workflow Designer control | Syncfusion
description: Checkout and learn about steps in TypeScript Workflow Designer control of Syncfusion Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/workflow-designer
---

# Steps in TypeScript Workflow Designer control

A step is a node on the canvas. Each step carries an `id`, a `stepType`, a `nodeName`, an optional `position`, and a `props` object whose shape is determined by the step type.

## Supported step types

Eighteen step types are available.

| Category | Step types |
|---|---|
| Triggers | `ManualTrigger`, `ScheduledTrigger`, `WebhookTrigger`, `FormInputTrigger` |
| Data | `SetVariable`, `Filter`, `Sort`, `Formatter` |
| Control flow | `Condition`, `Switch`, `Loop`, `Delay`, `End` |
| Integration | `ApiRequest`, `AI`, `Custom` |
| Human | `Approve`, `Notify` |

## Output ports

Branching steps expose named output ports. A connection selects one through its `sourcePort`.

| Step type | Output ports |
|---|---|
| `Condition` | `true`, `false` |
| `Approve` | `approved`, `declined` |
| `Loop` | `loop`, `done` |
| `Switch` | one port for each configured `branchName`, plus the port named by `defaultBranch` |
| `End` | none |
| All other steps | `output` |

The following workflow routes an expense claim on the `true` and `false` ports of a `Condition` step.

```ts

workflowSteps: [
    { id: 'submit', stepType: 'ManualTrigger', nodeName: 'Claim submitted', props: {} },
    {
        id: 'check',
        stepType: 'Condition',
        nodeName: 'Within limit?',
        props: {
            conditionLogic: 'AND',
            conditions: [
                {
                    field: '$.input.response.amount',
                    valueType: 'Number',
                    operator: 'LessThanOrEqual',
                    value: 5000
                }
            ]
        }
    },
    { id: 'approved', stepType: 'End', nodeName: 'Approved', props: { endMessage: 'Approved' } },
    { id: 'referred', stepType: 'End', nodeName: 'Referred', props: { endMessage: 'Referred' } }
],
workflowConnections: [
    { id: 'c1', sourceStepId: 'submit', targetStepId: 'check', targetPort: 'input' },
    { id: 'c2', sourceStepId: 'check', targetStepId: 'approved', sourcePort: 'true', targetPort: 'input' },
    { id: 'c3', sourceStepId: 'check', targetStepId: 'referred', sourcePort: 'false', targetPort: 'input' }
]

```

## Loops

A `Loop` step iterates the collection resolved from its `itemsPath`. The loop body is connected to the `loop` port, and the `done` port continues after the final iteration.

Body steps must not connect back to the loop step. Iteration is handled internally.

## Sticky notes

Sticky notes are plain-text annotations configured through the `stickyNotes` property. They are excluded from layout and never execute.

## See also

* [Expressions](./expressions)
* [Execution](./execution)
