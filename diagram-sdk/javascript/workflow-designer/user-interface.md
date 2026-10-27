---
layout: post
title: Customize the user interface in JavaScript Workflow Designer | Syncfusion®
description: Learn how to configure the toolbars, step collection, property panel, execution log, canvas and sticky notes of the Syncfusion® JavaScript Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Customize the user interface in JavaScript Workflow Designer

## Top toolbar

Use `toolbarSettings` to show or hide the toolbar and choose its commands. The available commands are `'Undo'`, `'Redo'`, `'Layout'`, `'Execute'`, `'Lock'`, `'Export'` and `'Import'`. They always appear in a fixed order, whatever order you list them in.

{% tabs %}
{% highlight js tabtitle="app.js" %}

const designer = new ej.workflowdesigner.WorkflowDesigner({
    toolbarSettings: { visible: true, items: ['Execute', 'Undo', 'Redo', 'Export'] }
});

{% endhighlight %}
{% endtabs %}

## Canvas toolbar

Use `canvasToolbarSettings` to configure the floating toolbar. The available commands are `'Add'`, `'StickyNote'`, `'Select'`, `'Pan'`, `'ZoomOut'`, `'ZoomIn'`, `'Fit'`, `'ResetZoom'` and `'Clear'`.

{% tabs %}
{% highlight js tabtitle="app.js" %}

canvasToolbarSettings: { items: ['Add', 'ZoomOut', 'ZoomIn', 'Fit'] }

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
{% highlight js tabtitle="app.js" %}

const viewer = new ej.workflowdesigner.WorkflowDesigner({
    workflowSettings: { readOnly: true, showGridLines: false },
    toolbarSettings: { visible: false },
    stepCollectionSettings: { visible: false }
});

{% endhighlight %}
{% endtabs %}

## Sticky notes

Sticky notes document a workflow and are never run. Their text supports basic Markdown (headings, bold, italic, inline code and bullet lists). Add a note with the **Sticky Note** canvas command or <kbd>Shift</kbd> + <kbd>S</kbd>, or from code:

{% tabs %}
{% highlight js tabtitle="app.js" %}

designer.addWorkflowItem({
    id: 'note1',
    text: '## Payment check\nRuns **every hour**.',
    position: { x: 80, y: 40 },
    size: { width: 240, height: 140 }
});

{% endhighlight %}
{% endtabs %}

## Dimensions

`width` and `height` accept pixels or any CSS length. Both default to `'100%'`. Make sure the parent element has a height when you use percentages.
