---
layout: post
title: Authoring in TypeScript Workflow Designer control | Syncfusion
description: Checkout and learn about authoring in TypeScript Workflow Designer control of Syncfusion Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/workflow-designer
---

# Authoring in TypeScript Workflow Designer control

Workflow items can be added, updated and removed at run time.

| Task | API |
|---|---|
| Add a step, connection or sticky note | `addWorkflowItem` |
| Update an item | `updateWorkflowItem` |
| Remove an item | `removeWorkflowItem` |
| Clear the canvas | `clearWorkflow` |
| Undo and redo | `undo`, `redo` |

```ts

workflow.addWorkflowItem({
    id: 'notify',
    stepType: 'Notify',
    nodeName: 'Email requester',
    props: {
        channel: 'Email',
        to: 'requester@example.com',
        subject: 'Claim received',
        message: 'Your claim has been received.'
    }
});

workflow.updateWorkflowItem('notify', { nodeName: 'Notify requester' });

workflow.removeWorkflowItem('notify');

```

## Authoring events

| Event | Raised |
|---|---|
| `workflowChanged` | After any successful mutation |
| `workflowItemSelected` | When the canvas selection changes |
| `workflowPropertyChanged` | After a step property edit, debounced |

## Read-only mode

Set `workflowSettings.readOnly` to make the canvas non-editable. Mutation methods become no-ops.

## See also

* [Persistence](./persistence)
* [Customization](./customization)
