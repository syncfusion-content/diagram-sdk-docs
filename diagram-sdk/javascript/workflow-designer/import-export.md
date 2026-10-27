---
layout: post
title: Import and export in JavaScript Workflow Designer control | Syncfusion®
description: Learn how to save, load and track changes to workflows as JSON in the Syncfusion® JavaScript Workflow Designer control.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Import and export in JavaScript Workflow Designer control

Workflows are saved as JSON (`WorkflowDefinitionModel`) with `schemaVersion`, `id`, `name`, `workflowSteps`, `workflowConnections` and `stickyNotes`.

## Export

{% tabs %}
{% highlight js tabtitle="app.js" %}

const json = designer.exportWorkflow();      // JSON string
const copy = designer.getWorkflow();                 // Object copy
designer.saveWorkflow('order-check.json');           // Browser download

{% endhighlight %}
{% endtabs %}

Users can also export with the **Export** toolbar command or <kbd>Ctrl</kbd> + <kbd>S</kbd>.

N> Secrets are never exported, including inline AI keys and the values of sensitive request headers (`Authorization`, and names containing `secret`, `token` or `password`). Credential references (`authRef`, `credentialRef`) are kept. In `'Inline'` credential mode, keys must be entered again after import.

## Import

`importWorkflow` accepts a JSON string, an object or a `File`, and returns a promise.

{% tabs %}
{% highlight js tabtitle="app.js" %}

const input = document.getElementById('fileInput');
if (input instanceof HTMLInputElement) {
    input.addEventListener('change', () => {
        const file = input.files && input.files[0];
        if (!file) { return; }
        designer.importWorkflow(file).catch((error) => {
            console.error(error.code, error.message);
        });
    });
}

{% endhighlight %}
{% endtabs %}

* Files larger than 5 MB are rejected.
* Workflows with an unknown schema version are rejected.
* Any active run is stopped before the workflow is replaced.

## Track unsaved changes

{% tabs %}
{% highlight js tabtitle="app.js" %}

window.addEventListener('beforeunload', (e) => {
    if (designer.isDirty()) { e.preventDefault(); }
});

function save() {
    myApi.save(designer.exportWorkflow()).then(() => designer.markClean());
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
