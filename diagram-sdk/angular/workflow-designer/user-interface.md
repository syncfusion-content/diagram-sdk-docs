---
layout: post
title: Customize the user interface in Angular Workflow Designer | Syncfusion®
description: Learn how to configure the toolbars, step collection, property panel, execution log, canvas and sticky notes of the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Customize the user interface in Angular Workflow Designer

Configure the designer with Angular input bindings on `<ejs-workflowdesigner>`. Use `@ViewChild` for methods that modify the workflow after it renders.

## Top toolbar

Use `toolbarSettings` to show or hide the toolbar and choose its commands. The available commands are `'Undo'`, `'Redo'`, `'Layout'`, `'Execute'`, `'Lock'`, `'Export'` and `'Import'`. They always appear in a fixed order, whatever order you list them in.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"500px\" [toolbarSettings]=\"toolbarSettings\"></ejs-workflowdesigner>"
})
export class AppComponent {

    public toolbarSettings = { visible: true, items: ['Execute', 'Undo', 'Redo', 'Export'] };
}

{% endhighlight %}
{% endtabs %}

## Canvas toolbar

Use `canvasToolbarSettings` to configure the floating toolbar. The available commands are `'Add'`, `'StickyNote'`, `'Select'`, `'Pan'`, `'ZoomOut'`, `'ZoomIn'`, `'Fit'`, `'ResetZoom'` and `'Clear'`.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"500px\" [canvasToolbarSettings]=\"canvasToolbarSettings\"></ejs-workflowdesigner>"
})
export class AppComponent {

    public canvasToolbarSettings = { items: ['Add', 'ZoomOut', 'ZoomIn', 'Fit'] };
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
{% highlight ts tabtitle="app.component.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner id=\"workflow\" height=\"500px\" [workflowSettings]=\"workflowSettings\" [toolbarSettings]=\"toolbarSettings\" [stepCollectionSettings]=\"stepCollectionSettings\"></ejs-workflowdesigner>"
})
export class AppComponent {

    public workflowSettings = { readOnly: true, showGridLines: false };
    public toolbarSettings = { visible: false };
    public stepCollectionSettings = { visible: false };
}

{% endhighlight %}
{% endtabs %}

## Sticky notes

Sticky notes document a workflow and are never run. Their text supports basic Markdown (headings, bold, italic, inline code and bullet lists). Add a note with the **Sticky Note** canvas command or <kbd>Shift</kbd> + <kbd>S</kbd>, or from code:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerModule, WorkflowDesignerComponent } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner #workflow id=\"workflow\" height=\"500px\"></ejs-workflowdesigner><button type=\"button\" (click)=\"addStickyNote()\">Add sticky note</button>"
})
export class AppComponent {
    @ViewChild('workflow') public workflowDesigner!: WorkflowDesignerComponent;

    addStickyNote(): void { this.workflowDesigner.addWorkflowItem({ id: 'note1', text: '## Payment check\nRuns **every hour**.', position: { x: 80, y: 40 }, size: { width: 240, height: 140 } }); }
}

{% endhighlight %}
{% endtabs %}

## Dimensions

`width` and `height` accept pixels or any CSS length. Both default to `'100%'`. Make sure the parent element has a height when you use percentages.
