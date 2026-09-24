---
layout: post
title: Getting started in TypeScript Workflow Designer control | Syncfusion
description: Checkout and learn about getting started in TypeScript Workflow Designer control of Syncfusion Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/workflow-designer
---

# Getting started in TypeScript Workflow Designer control

The Workflow Designer is a canvas-based control for authoring, validating and previewing automation workflows. It provides a step collection, a drag-and-drop canvas, a property panel for configuring each step, and an execution engine that runs the workflow in the browser.

## Dependencies

Install the package using the following command.

```bash

npm install @syncfusion/ej2-workflow-designer

```

## Adding the theme

Import the Essential JS 2 theme into your application stylesheet.

```css

@import "@syncfusion/ej2/material.css";

```

## Adding the control

Add a host element with an explicit height. The control does not size itself.

```html

<div id="workflow" style="height: 600px;"></div>

```

Initialize the control and render it to that element.

```ts

import { WorkflowDesigner } from '@syncfusion/ej2-workflow-designer';

const workflow: WorkflowDesigner = new WorkflowDesigner({
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', nodeName: 'Start', props: {} },
        {
            id: 'amount',
            stepType: 'SetVariable',
            nodeName: 'Set amount',
            props: { variables: [{ variableName: 'amount', value: 2500 }] }
        },
        { id: 'end', stepType: 'End', nodeName: 'End', props: { endMessage: 'Done' } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'amount', targetPort: 'input' },
        { id: 'c2', sourceStepId: 'amount', targetStepId: 'end', targetPort: 'input' }
    ]
});

workflow.appendTo('#workflow');

```

> Every connection requires an explicit `targetPort` of `input`. The value is not defaulted, and omitting it raises the `TARGET_PORT_INVALID` validation message.

Select **Execute** in the toolbar to run the workflow and watch the execution path highlight on the canvas.

## See also

* [Steps](./steps)
* [Execution](./execution)
* [Validation](./validation)
