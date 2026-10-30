---
layout: post
title: Import and export in Angular Workflow Designer | Syncfusion®
description: Learn how to save, load and track changes to workflows as JSON in the Syncfusion Angular Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Import and export in Angular Workflow Designer

Workflows are saved as JSON (`WorkflowDefinitionModel`) with the `schemaVersion`, `id`, `name`, `workflowSteps`, `workflowConnections`, and `stickyNotes` properties.

## Export

Export the workflow as a JSON string, as an object, or as a file download:

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

Users can also export with the **Export** toolbar command or by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd>.

N> Secrets are never exported. This includes inline AI keys and the values of sensitive request headers: `Authorization`, and header names that contain `secret`, `token`, or `password`. Credential references (`authRef` and `credentialRef`) are kept. In `'Inline'` credential mode, users must enter keys again after import.

## Import

[`importWorkflow`](https://ej2.syncfusion.com/documentation/api/workflow-designer/#importworkflow) accepts a JSON string, an object, or a `File`, and returns a promise. The following example imports a file that the user selects:

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

Keep the following in mind when importing:

* Files larger than 5 MB are rejected.
* Workflows with an unknown schema version are rejected.
* Any active run is stopped before the workflow is replaced.

For the structural errors that reject an import, see [Validation on import](./validation#validation-on-import).

## Track unsaved changes

Use `isDirty` to check for unsaved changes, and call `markClean` after you save:

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
| `updateWorkflowItem(id, changes, silent?)` | Updates the given properties. The `id` can't be changed. |
| `removeWorkflowItem(id)` | Removes an item. Removing a step also removes its connections. |
| `clearWorkflow()` | Removes everything, without asking for confirmation. |
| `layoutWorkflow()` | Arranges the steps automatically. |
| `undo()`, `redo()` | Reverts or reapplies changes. |

These methods do nothing and return `false` when the designer is read-only or the item is invalid.
