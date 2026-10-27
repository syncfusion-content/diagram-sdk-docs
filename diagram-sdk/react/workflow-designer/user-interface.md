---
layout: post
title: Customize the user interface in React Workflow Designer | Syncfusion
description: Learn how to configure the toolbars, step collection, property panel, execution log, canvas and sticky notes of the Syncfusion React Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Customize the user interface in React Workflow Designer

Configure the settings with props on `WorkflowDesignerComponent`. Use a React ref for methods that modify the workflow after it renders.

## Top toolbar

Use `toolbarSettings` to show or hide the toolbar and choose its commands. The available commands are `'Undo'`, `'Redo'`, `'Layout'`, `'Execute'`, `'Lock'`, `'Export'` and `'Import'`. They always appear in a fixed order, whatever order you list them in.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    return (
        <WorkflowDesignerComponent
            id="workflow"
            height="500px"
            toolbarSettings={{ visible: true, items: ['Execute', 'Undo', 'Redo', 'Export'] }}
        />
    );
}

{% endhighlight %}
{% endtabs %}

## Canvas toolbar

Use `canvasToolbarSettings` to configure the floating toolbar. The available commands are `'Add'`, `'StickyNote'`, `'Select'`, `'Pan'`, `'ZoomOut'`, `'ZoomIn'`, `'Fit'`, `'ResetZoom'` and `'Clear'`.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    return (
        <WorkflowDesignerComponent
            id="workflow"
            height="500px"
            canvasToolbarSettings={{ items: ['Add', 'ZoomOut', 'ZoomIn', 'Fit'] }}
        />
    );
}

{% endhighlight %}
{% endtabs %}

## Panels

| Setting | Properties |
|---|---|
| `stepCollectionSettings` | `visible`: when `false`, users can't add steps from the canvas. |
| `propertyPanelSettings` | `visible`, plus `openOnStepSelection`: open the panel with a single click. By default, it opens on double-click or <kbd>Enter</kbd>. |
| `executionLogSettings` | `visible`. |

## Canvas

| `workflowSettings` property | Default | Description |
|---|---|---|
| `tools` | `'SingleSelection'` | `'SingleSelection'`, `'MultiSelection'` or `'ZoomPan'`. |
| `minZoom`, `maxZoom` | `0.2`, `30` | The zoom range, where `1` is 100%. |
| `showGridLines` | `true` | Show grid lines. |
| `readOnly` | `false` | A viewing mode. Users can't change the workflow, but `importWorkflow` still works. |

Control the view from code with `fitToPage()`, `zoomTo(zoom)`, `selectItem(id)` and `bringIntoView(id)`.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowViewer() {
    return (
        <WorkflowDesignerComponent
            id="workflow"
            height="500px"
            workflowSettings={{ readOnly: true, showGridLines: false }}
            toolbarSettings={{ visible: false }}
            stepCollectionSettings={{ visible: false }}
        />
    );
}

{% endhighlight %}
{% endtabs %}

## Sticky notes

Sticky notes document a workflow and are never run. Their text supports basic Markdown (headings, bold, italic, inline code and bullet lists). Add a note with the **Sticky Note** canvas command or <kbd>Shift</kbd> + <kbd>S</kbd>, or from code:

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    function addStickyNote() {
        workflowInstance.current?.addWorkflowItem({
            id: 'note1',
            text: '## Payment check\nRuns **every hour**.',
            position: { x: 80, y: 40 },
            size: { width: 240, height: 140 }
        });
    }

    return (
        <>
            <WorkflowDesignerComponent id="workflow" ref={workflowInstance} height="500px" />
            <button onClick={addStickyNote}>Add sticky note</button>
        </>
    );
}

{% endhighlight %}
{% endtabs %}

## Dimensions

`width` and `height` accept pixels or any CSS length. Both default to `'100%'`. Make sure the parent element has a height when you use percentages.
