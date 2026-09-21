---
layout: post
title: Customization in TypeScript Workflow Designer control | Syncfusion
description: Checkout and learn about customization in TypeScript Workflow Designer control of Syncfusion Workflow Designer.
platform: ej2-typescript
control: Workflow Designer
publishingplatform: ej2-typescript
documentation: ug
domainurl: https://help.syncfusion.com/workflow-designer
---

# Customization in TypeScript Workflow Designer control

The designer surfaces are configured independently.

## Canvas

`workflowSettings` controls the canvas.

| Property | Description |
|---|---|
| `tools` | Enabled canvas tools |
| `minZoom`, `maxZoom` | Zoom bounds |
| `layoutSettings` | Automatic layout configuration |
| `enableUndoRedo` | Enables the undo and redo history |
| `showGridLines` | Shows the background grid |
| `readOnly` | Makes the canvas non-editable |

## Toolbars

`toolbarSettings` configures the top toolbar, and `canvasToolbarSettings` the floating canvas toolbar. Both accept `enabled` and `items`.

```ts

toolbarSettings: {
    enabled: true,
    items: ['Execute', 'Layout', 'Lock', 'Undo', 'Redo', 'Import', 'Export']
}

```

## Step collection

`stepCollectionSettings` configures the step palette with `enabled`, `collapsedByDefault` and `enableSearch`.

## Property panel

`propertyPanelSettings` accepts `enabled`, `openOnNodeSelection`, `allowToggle` and `position`.

## Execution log

`executionLogSettings` accepts `enabled` and `collapsible`. The log records each step execution with its status and timing, and the details pane shows the input, output and JSON context for a selected entry.

## Error handling

`errorSettings` accepts `defaultTimeoutMs`, `continueOnError` and `retryPolicy`. Step-level error handling overrides these workflow-level values.

## See also

* [Execution](./execution)
* [Layout](./layout)
