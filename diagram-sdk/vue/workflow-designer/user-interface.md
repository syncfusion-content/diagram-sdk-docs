---
layout: post
title: Customize the user interface in Vue Workflow Designer | Syncfusion®
description: Learn how to configure the toolbars, step collection, property panel, execution log, canvas and sticky notes of the Syncfusion Vue Workflow Designer.
control: Workflow Designer
platform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Customize the user interface in Vue Workflow Designer

You can show, hide, and configure each part of the Workflow Designer: the top toolbar, the canvas toolbar, the panels, and the canvas. You can also add sticky notes and set the size of the designer.

## Top toolbar

Use [`toolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/workflow-designer/#toolbarsettings) to show or hide the toolbar and choose its commands. The available commands are `'Undo'`, `'Redo'`, `'Layout'`, `'Execute'`, `'Lock'`, `'Export'`, and `'Import'`. They always appear in a fixed order, regardless of the order you list them in.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner :toolbarSettings="toolbarSettings"></ejs-workflowdesigner>
</template>

<script setup>
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const toolbarSettings = { visible: true, items: ['Execute', 'Undo', 'Redo', 'Export'] };
</script>

{% endhighlight %}
{% endtabs %}

## Canvas toolbar

Use [`canvasToolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/workflow-designer/#canvastoolbarsettings) to configure the floating toolbar at the bottom of the canvas. The available commands are `'Add'`, `'StickyNote'`, `'Select'`, `'Pan'`, `'ZoomOut'`, `'ZoomIn'`, `'Fit'`, `'ResetZoom'`, and `'Clear'`.

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner :canvasToolbarSettings="canvasToolbarSettings"></ejs-workflowdesigner>
</template>

<script setup>
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const canvasToolbarSettings = { items: ['Add', 'ZoomOut', 'ZoomIn', 'Fit'] };
</script>

{% endhighlight %}
{% endtabs %}

## Panels

| Setting | Properties |
|---|---|
| `stepCollectionSettings` | `visible`: When `false`, users can't add steps from the canvas. |
| `propertyPanelSettings` | `visible` and `openOnStepSelection`. When `openOnStepSelection` is `true`, the panel opens with a single click. By default, it opens on double-click or when the user presses <kbd>Enter</kbd>. |
| `executionLogSettings` | `visible`. |

## Canvas

| `workflowSettings` property | Default | Description |
|---|---|---|
| `tools` | `'SingleSelection'` | `'SingleSelection'`, `'MultiSelection'`, or `'ZoomPan'`. |
| `minZoom`, `maxZoom` | `0.2`, `30` | The zoom range, where `1` is 100%. |
| `showGridLines` | `true` | Shows grid lines. |
| `readOnly` | `false` | A viewing mode. Users can't change the workflow, but `importWorkflow` still works. |

To control the view from code, use `fitToPage()`, `zoomTo(zoom)`, `selectItem(id)`, and `bringIntoView(id)`.

The following example creates a read-only viewer without grid lines, the top toolbar, or the step collection:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner :workflowSettings="workflowSettings" :toolbarSettings="toolbarSettings" :stepCollectionSettings="stepCollectionSettings"></ejs-workflowdesigner>
</template>

<script setup>
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const workflowSettings = { readOnly: true, showGridLines: false };
const toolbarSettings = { visible: false };
const stepCollectionSettings = { visible: false };
</script>

{% endhighlight %}
{% endtabs %}

## Sticky notes

Sticky notes document a workflow and never run. Their text supports basic Markdown: headings, bold, italic, inline code, and bulleted lists. To add a note, use the **Sticky Note** canvas command or press <kbd>Shift</kbd> + <kbd>S</kbd>. You can also add one from code:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner ref="designer"></ejs-workflowdesigner>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';
const designer = ref(null);

onMounted(() => {
designer.value.ej2Instances.addWorkflowItem({
    id: 'note1',
    text: '## Payment check\nRuns **every hour**.',
    position: { x: 80, y: 40 },
    size: { width: 240, height: 140 }
});
});
</script>

{% endhighlight %}
{% endtabs %}

## Dimensions

The `width` and `height` properties accept pixels or any CSS length, and both default to `'100%'`. When you use percentages, make sure the parent element has a height.
