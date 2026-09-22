---
layout: post
title: Persistence in TypeScript Workflow Designer control | Syncfusion
description: Checkout and learn about persistence in TypeScript Workflow Designer control of Syncfusion Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/workflow-designer
---

# Persistence in TypeScript Workflow Designer control

A workflow can be serialized to JSON and restored later.

```ts

// Returns a JSON string.
const json = workflow.exportWorkflow();

// Supplying a file name downloads the JSON and returns a Blob instead.
const blob = workflow.exportWorkflow({ fileName: 'expense-approval.json' });

// Accepts a JSON string, a definition object, or a File.
await workflow.importWorkflow(json);

```

## Definition shape

A workflow definition uses `workflowSteps` and `workflowConnections`.

```ts

{
    id: 'expense-approval',
    name: 'Expense approval',
    workflowSteps: [ /* ... */ ],
    workflowConnections: [ /* ... */ ]
}

```

> The definition uses `workflowSteps` and `workflowConnections`, not `steps` and `connections`. Supplying the wrong keys produces an empty workflow rather than an error.

## See also

* [Authoring](./authoring)
