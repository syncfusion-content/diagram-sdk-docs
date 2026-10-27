---
layout: post
title: Import and export in Angular Workflow Designer | Syncfusion®
description: Learn how to save, load and track changes to workflows as JSON in the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Import and export in Angular Workflow Designer

Workflows are saved as JSON (`WorkflowDefinitionModel`) with `schemaVersion`, `id`, `name`, `workflowSteps`, `workflowConnections` and `stickyNotes`.
Use a `@ViewChild` reference to call the component's methods, as shown in [Getting started](./getting-started).

## Export

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerModule, WorkflowDesignerComponent } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner #workflow id=\"workflow\" height=\"500px\"></ejs-workflowdesigner><button type=\"button\" (click)=\"exportWorkflow()\">Export workflow</button>"
})
export class AppComponent {
    @ViewChild('workflow') public workflowDesigner!: WorkflowDesignerComponent;

    exportWorkflow(): void { const json = this.workflowDesigner.exportWorkflow(); const copy = this.workflowDesigner.getWorkflow(); this.workflowDesigner.saveWorkflow('order-check.json'); console.log(json, copy); }
}

{% endhighlight %}
{% endtabs %}

Users can also export with the **Export** toolbar command or <kbd>Ctrl</kbd> + <kbd>S</kbd>.

N> Secrets are never exported, including inline AI keys and the values of sensitive request headers (`Authorization`, and names containing `secret`, `token` or `password`). Credential references (`authRef`, `credentialRef`) are kept. In `'Inline'` credential mode, keys must be entered again after import.

## Import

`importWorkflow` accepts a JSON string, an object or a `File`, and returns a promise.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerModule, WorkflowDesignerComponent } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner #workflow id=\"workflow\" height=\"500px\"></ejs-workflowdesigner><input type=\"file\" (change)=\"handleFileChange($event)\">"
})
export class AppComponent {
    @ViewChild('workflow') public workflowDesigner!: WorkflowDesignerComponent;

    handleFileChange(event: Event): void {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) this.workflowDesigner.importWorkflow(file).catch((error: Error) => console.error(error));
    }
}

{% endhighlight %}
{% endtabs %}

* Files larger than 5 MB are rejected.
* Workflows with an unknown schema version are rejected.
* Any active run is stopped before the workflow is replaced.

## Track unsaved changes

Replace `myApi.save` with the application's persistence call.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}

import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { WorkflowDesignerModule, WorkflowDesignerComponent } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: "<ejs-workflowdesigner #workflow id=\"workflow\" height=\"500px\"></ejs-workflowdesigner><button type=\"button\" (click)=\"saveWorkflow()\">Save</button>"
})
export class AppComponent implements AfterViewInit, OnDestroy {
    @ViewChild('workflow') public workflowDesigner!: WorkflowDesignerComponent;

    private handleBeforeUnload = (event: BeforeUnloadEvent): void => { if (this.workflowDesigner?.isDirty()) event.preventDefault(); };
    ngAfterViewInit(): void { window.addEventListener('beforeunload', this.handleBeforeUnload); }
    ngOnDestroy(): void { window.removeEventListener('beforeunload', this.handleBeforeUnload); }
    saveWorkflow(): void { myApi.save(this.workflowDesigner.exportWorkflow()).then(() => this.workflowDesigner.markClean()); }
}

{% endhighlight %}
{% endtabs %}

## Edit the workflow from code

| Method | Description |
|---|---|
| `addWorkflowItem(item)` | Adds a step (an object with `stepType`), a connection (an object with `sourceStepId` and `targetStepId`) or a sticky note. |
| `updateWorkflowItem(id, changes, silent?)` | Updates the given properties. `id` can't be changed. |
| `removeWorkflowItem(id)` | Removes an item. Removing a step also removes its connections. |
| `clearWorkflow()` | Removes everything, without a confirmation. |
| `layoutWorkflow()` | Arranges the steps automatically. |
| `undo()`, `redo()` | Revert or reapply changes. |

These methods return `false`, and do nothing, when the designer is read-only or the item is invalid.
