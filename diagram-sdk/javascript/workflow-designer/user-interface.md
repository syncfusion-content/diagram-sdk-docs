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

<<<<<<< HEAD
## Top toolbar

Use `toolbarSettings` to show or hide the toolbar and choose its commands. The available commands are `'Undo'`, `'Redo'`, `'Layout'`, `'Execute'`, `'Lock'`, `'Export'` and `'Import'`. They always appear in a fixed order, whatever order you list them in.
=======
You can show, hide, and configure each part of the Workflow Designer: the top toolbar, the canvas toolbar, the panels, and the canvas. You can also add sticky notes and set the size of the designer.

## Top toolbar

Use [`toolbarSettings`](https://ej2.syncfusion.com/documentation/api/workflow-designer/#toolbarsettings) to show or hide the toolbar and choose its commands. The available commands are `'Undo'`, `'Redo'`, `'Layout'`, `'Execute'`, `'Lock'`, `'Export'`, and `'Import'`. They always appear in a fixed order, regardless of the order you list them in.
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

{% tabs %}
{% highlight js tabtitle="app.js" %}

const designer = new ej.workflowdesigner.WorkflowDesigner({
    toolbarSettings: { visible: true, items: ['Execute', 'Undo', 'Redo', 'Export'] }
});

{% endhighlight %}
{% endtabs %}

## Canvas toolbar

<<<<<<< HEAD
Use `canvasToolbarSettings` to configure the floating toolbar. The available commands are `'Add'`, `'StickyNote'`, `'Select'`, `'Pan'`, `'ZoomOut'`, `'ZoomIn'`, `'Fit'`, `'ResetZoom'` and `'Clear'`.
=======
Use [`canvasToolbarSettings`](https://ej2.syncfusion.com/documentation/api/workflow-designer/#canvastoolbarsettings) to configure the floating toolbar at the bottom of the canvas. The available commands are `'Add'`, `'StickyNote'`, `'Select'`, `'Pan'`, `'ZoomOut'`, `'ZoomIn'`, `'Fit'`, `'ResetZoom'`, and `'Clear'`.
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

{% tabs %}
{% highlight js tabtitle="app.js" %}

canvasToolbarSettings: { items: ['Add', 'ZoomOut', 'ZoomIn', 'Fit'] }

{% endhighlight %}
{% endtabs %}

## Panels

| Setting | Properties |
|---|---|
<<<<<<< HEAD
| `stepCollectionSettings` | `visible`: when `false`, users can't add steps from the canvas. |
| `propertyPanelSettings` | `visible`, plus `openOnStepSelection`: open the panel with a single click. By default, it opens on double-click or <kbd>Enter</kbd>. |
=======
| `stepCollectionSettings` | `visible`: When `false`, users can't add steps from the canvas. |
| `propertyPanelSettings` | `visible` and `openOnStepSelection`. When `openOnStepSelection` is `true`, the panel opens with a single click. By default, it opens on double-click or when the user presses <kbd>Enter</kbd>. |
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
| `executionLogSettings` | `visible`. |

## Canvas

| `workflowSettings` property | Default | Description |
|---|---|---|
<<<<<<< HEAD
| `tools` | `'SingleSelection'` | `'SingleSelection'`, `'MultiSelection'` or `'ZoomPan'`. |
| `minZoom`, `maxZoom` | `0.2`, `30` | The zoom range, where `1` is 100%. |
| `showGridLines` | `true` | Show grid lines. |
| `readOnly` | `false` | A viewing mode. Users can't change the workflow, but `importWorkflow` still works. |

Control the view from code with `fitToPage()`, `zoomTo(zoom)`, `selectItem(id)` and `bringIntoView(id)`.
=======
| `tools` | `'SingleSelection'` | `'SingleSelection'`, `'MultiSelection'`, or `'ZoomPan'`. |
| `minZoom`, `maxZoom` | `0.2`, `30` | The zoom range, where `1` is 100%. |
| `showGridLines` | `true` | Shows grid lines. |
| `readOnly` | `false` | A viewing mode. Users can't change the workflow, but `importWorkflow` still works. |

To control the view from code, use `fitToPage()`, `zoomTo(zoom)`, `selectItem(id)`, and `bringIntoView(id)`.

The following example creates a read-only viewer without grid lines, the top toolbar, or the step collection:
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

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

<<<<<<< HEAD
Sticky notes document a workflow and are never run. Their text supports basic Markdown (headings, bold, italic, inline code and bullet lists). Add a note with the **Sticky Note** canvas command or <kbd>Shift</kbd> + <kbd>S</kbd>, or from code:
=======
Sticky notes document a workflow and never run. Their text supports basic Markdown: headings, bold, italic, inline code, and bulleted lists. To add a note, use the **Sticky Note** canvas command or press <kbd>Shift</kbd> + <kbd>S</kbd>. You can also add one from code:
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

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

<<<<<<< HEAD
## Dimensions

`width` and `height` accept pixels or any CSS length. Both default to `'100%'`. Make sure the parent element has a height when you use percentages.
=======

## Dimensions

The `width` and `height` properties accept pixels or any CSS length, and both default to `'100%'`. When you use percentages, make sure the parent element has a height.
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
