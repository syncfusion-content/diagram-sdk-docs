---
layout: post
title: Angular Workflow Designer User Interface | Syncfusion®
description: Learn how to configure the toolbars, step collection, property panel, execution log, canvas, and sticky notes of the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Customize the User Interface in Angular Workflow Designer

The Workflow Designer lets you show, hide, and configure each part of its user interface: the top toolbar, the canvas toolbar, the step collection, the property panel, and the execution log. You can also configure the canvas behavior, set the size of the designer, and display it right to left. The canvas itself is always displayed.

## Top toolbar

The top toolbar contains the commands that act on the whole workflow. Use the `toolbarSettings` property to show or hide the toolbar and to choose its commands, for example to remove **Import** when workflows are loaded only by your application.

| Property | Type | Default | Description |
|---|---|---|---|
| `visible` | `boolean` | `true` | Specifies whether the top toolbar is displayed. |
| `items` | `WorkflowToolbarItem[]` | `['Undo', 'Redo', 'Layout', 'Execute', 'Lock', 'Export', 'Import']` | Specifies the commands to display. The supported values are described in the following table. |

The following commands can be listed in `items`. They always appear in the order shown, regardless of the order in the array.

| Command | Description |
|---|---|
| `'Execute'` | Runs the workflow from its trigger. While a workflow runs, it's replaced by **Stop**, which ends the run. |
| `'Layout'` | Arranges all steps automatically into a readable left-to-right layout. |
| `'Lock'` | Switches the workflow between editable and read-only states. |
| `'Undo'` | Reverts the most recent change on the canvas. |
| `'Redo'` | Reapplies the most recently undone change. |
| `'Import'` | Opens a JSON file and replaces the current workflow with it. |
| `'Export'` | Downloads the current workflow as a JSON file. |

The following example shows only the **Execute**, **Undo**, **Redo**, and **Export** commands.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"
            [toolbarSettings]="toolbarSettings"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    public toolbarSettings: WorkflowDesignerComponent['toolbarSettings'] = { visible: true, items: ['Execute', 'Undo', 'Redo', 'Export'] };
}
{% endhighlight %}
{% endtabs %}

## Canvas toolbar

The canvas toolbar floats at the bottom of the canvas and contains the commands used while editing. Use the `canvasToolbarSettings` property to show or hide it and to choose its commands.

| Property | Type | Default | Description |
|---|---|---|---|
| `visible` | `boolean` | `true` | Specifies whether the canvas toolbar is displayed. |
| `items` | `WorkflowCanvasToolbarItem[]` | All commands | Specifies the commands to display. The supported values are described in the following table. |

| Command | Description |
|---|---|
| `'Add'` | Opens the step collection so that the user can add a step. |
| `'StickyNote'` | Adds a sticky note to the canvas. |
| `'Select'` | Switches to the selection tool, which selects and moves items. |
| `'Pan'` | Switches to the pan tool, which scrolls the canvas by dragging. |
| `'ZoomOut'` | Decreases the zoom level. |
| `'ZoomIn'` | Increases the zoom level. |
| `'Fit'` | Zooms and scrolls the canvas so that the whole workflow is visible. |
| `'ResetZoom'` | Restores the zoom level to 100%. |
| `'Clear'` | Removes all steps, connections, and sticky notes after the user confirms. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"
            [canvasToolbarSettings]="canvasToolbarSettings"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    public canvasToolbarSettings: WorkflowDesignerComponent['canvasToolbarSettings'] = { items: ['Add', 'ZoomOut', 'ZoomIn', 'Fit'] };
}
{% endhighlight %}
{% endtabs %}

## Step collection

The step collection is the panel that users pick new steps from. It opens when the user adds a step, for example from the **Add** command or the add handle of a step, and is collapsed otherwise. Use the `stepCollectionSettings` property to choose which steps are offered, for example to hide AI steps from users who don't have access to an AI service.

| Property | Type | Default | Description |
|---|---|---|---|
| `visible` | `boolean` | `true` | Specifies whether users can add steps. When `false`, the step collection isn't available and the **Add** commands are disabled. |
| `triggers` | `WorkflowTriggerStepType[]` | `undefined` | Specifies the trigger steps that are listed. When not set, all trigger steps are listed. An empty array hides the category. |
| `actions` | `WorkflowActionStepType[]` | `undefined` | Specifies the action steps that are listed: `SetVariable`, `Filter`, `Sort`, and `ApiRequest`. An empty array hides the category. |
| `flow` | `WorkflowFlowStepType[]` | `undefined` | Specifies the flow steps that are listed: `Delay`, `Condition`, `Switch`, and `Loop`. An empty array hides the category. |
| `human` | `WorkflowHumanStepType[]` | `undefined` | Specifies the human steps that are listed: `Approve` and `Notify`. An empty array hides the category. |
| `ai` | `WorkflowAIStepType[]` | `undefined` | Specifies the AI steps that are listed. An empty array hides the category. |
| `output` | `WorkflowOutputStepType[]` | `undefined` | Specifies the output steps that are listed: `Formatter` and `End`. An empty array hides the category. |
| `custom` | `WorkflowCustomStepDefinition[]` | `empty array` | Specifies the application-defined steps listed in the **Custom** category. The category is hidden when no custom step is defined. |

For details, see [Custom steps](./custom-steps).

The following example offers only the manual and form triggers and hides the AI category.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"
            [stepCollectionSettings]="stepCollectionSettings"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    public stepCollectionSettings: WorkflowDesignerComponent['stepCollectionSettings'] = {
        triggers: ['ManualTrigger', 'FormInputTrigger'],
        ai: []
    };
}
{% endhighlight %}
{% endtabs %}

N> The category settings only change what users can add. Steps of a hidden type that are already in a workflow, or that are loaded with `importWorkflow`, are still displayed and run.

### Show the step collection from code

The `showStepCollectionPalette` method opens or closes the step collection, for example from a button in your own toolbar. Pass `true` to show it and `false` to hide it. Only the panel's visibility changes; the workflow, selection, zoom, and scroll position are kept.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerComponent, WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <button type="button" (click)="addStep()">Add step</button>
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    @ViewChild('workflow')
    public workflow?: WorkflowDesignerComponent;

    public addStep(): void {
        const designer = this.workflow;
        if (!designer) {
            return;
        }

        designer.showStepCollectionPalette(true);
    }
}
{% endhighlight %}
{% endtabs %}

Calling the method with the current state has no effect. Showing the step collection also has no effect while the workflow is read-only or running, or when `stepCollectionSettings.visible` is `false`.

## Property panel

The property panel displays the editor of the selected step or connection. Use the `propertyPanelSettings` property to control whether it's available and when it opens.

| Property | Type | Default | Description |
|---|---|---|---|
| `visible` | `boolean` | `true` | Specifies whether the property panel is available. When `false`, it never opens, which suits a viewer where users only inspect workflows. |
| `openOnStepSelection` | `boolean` | `false` | Specifies whether the panel opens when the user selects a step with a single click. When `false`, the user double-clicks a step or connection, or presses <kbd>Enter</kbd>, to open it. Once the panel is open, it follows the selection. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"
            [propertyPanelSettings]="propertyPanelSettings"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    public propertyPanelSettings: WorkflowDesignerComponent['propertyPanelSettings'] = { openOnStepSelection: true };
}
{% endhighlight %}
{% endtabs %}

N> Selecting a sticky note doesn't open the property panel. Users edit a sticky note directly on the canvas.

## Execution log

The execution log is docked below the canvas. During a run, it lists the progress, status, input, and output of each step, and users can select a row to inspect the data at that step. The log is collapsed when the designer is first displayed; users can expand it, search it, and clear it.

Use the `executionLogSettings` property to configure the log.

| Property | Type | Default | Description |
|---|---|---|---|
| `visible` | `boolean` | `true` | Specifies whether the execution log is displayed. When `false`, runs still work and the [execution events](./execution#execution-events) are still triggered, so you can show the progress in your own user interface. |

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"
            [executionLogSettings]="executionLogSettings"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    public executionLogSettings: WorkflowDesignerComponent['executionLogSettings'] = { visible: false };
}
{% endhighlight %}
{% endtabs %}

N> Changing `executionLogSettings` after the designer is rendered rebuilds the log, so entries from earlier runs are cleared.

## Canvas

Use the `workflowSettings` property to configure how users interact with the canvas.

| Property | Type | Default | Description |
|---|---|---|---|
| `tool` | `WorkflowTool` | `'SingleSelection'` | Specifies the active canvas tool. `'SingleSelection'` selects one item at a time, `'MultiSelection'` allows several items to be selected, and `'ZoomPan'` scrolls the canvas by dragging. |
| `minZoom` | `number` | `0.2` | Specifies the smallest zoom level that users can reach, where `1` is 100%. |
| `maxZoom` | `number` | `30` | Specifies the largest zoom level that users can reach, where `1` is 100%. |
| `showGridLines` | `boolean` | `true` | Specifies whether grid lines are drawn on the canvas. |
| `readOnly` | `boolean` | `false` | Specifies whether the workflow is read-only. Users can't edit or import a workflow, but they can still run and export it. The **Lock** command toggles this state. |

The following example creates a read-only viewer without grid lines, the top toolbar, or the step collection.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"
            [workflowSettings]="workflowSettings"
            [toolbarSettings]="toolbarSettings"
            [stepCollectionSettings]="stepCollectionSettings"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    public workflowSettings: WorkflowDesignerComponent['workflowSettings'] = { readOnly: true, showGridLines: false };

    public toolbarSettings: WorkflowDesignerComponent['toolbarSettings'] = { visible: false };

    public stepCollectionSettings: WorkflowDesignerComponent['stepCollectionSettings'] = { visible: false };
}
{% endhighlight %}
{% endtabs %}

## Sticky notes

Sticky notes add documentation to the canvas, such as the purpose of a branch or instructions for the people who maintain the workflow. They are saved with the workflow and never run. Their text supports basic Markdown: headings, bold, italic, inline code, and bulleted lists.

Users add a sticky note with the **Sticky Note** canvas command or by pressing <kbd>Shift</kbd> + <kbd>S</kbd>, and double-click a note to edit its text. To add a note from code, see [Add workflow items](./update-workflow#add-workflow-items).

## Dimensions

Use the `width` and `height` properties to set the size of the Workflow Designer. Both default to `'100%'`.

* A number is treated as pixels. For example, `640` is the same as `'640px'`.
* A string is used as a CSS length, such as `'800px'`, `'100%'`, or `'80vh'`.

N> When you use a percentage height, make sure that the parent element has a height. Otherwise, the designer has no height to fill.

## Right-to-left rendering

Set the `enableRtl` property to `true` to display the Workflow Designer from right to left, for example for Arabic or Hebrew users. The toolbars, panels, and dialogs are mirrored. To translate the designer text as well, see [Localization](./localization).

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"
            [enableRtl]="true"></ejs-workflowdesigner>
    `
})
export class AppComponent {

}
{% endhighlight %}
{% endtabs %}

## See also

* [Customize step appearance](./appearance)
* [Step templates](./step-templates)
* [Custom steps](./custom-steps)
