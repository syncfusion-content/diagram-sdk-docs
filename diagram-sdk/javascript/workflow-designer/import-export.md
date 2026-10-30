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

<<<<<<< HEAD
Workflows are saved as JSON (`WorkflowDefinitionModel`) with `schemaVersion`, `id`, `name`, `workflowSteps`, `workflowConnections` and `stickyNotes`.

## Export

=======
Workflows are saved as JSON (`WorkflowDefinitionModel`) with the `schemaVersion`, `id`, `name`, `workflowSteps`, `workflowConnections`, and `stickyNotes` properties.

## Export

Export the workflow as a JSON string, as an object, or as a file download:

>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
{% tabs %}
{% highlight js tabtitle="app.js" %}

const json = designer.exportWorkflow();      // JSON string
const copy = designer.getWorkflow();                 // Object copy
designer.saveWorkflow('order-check.json');           // Browser download

{% endhighlight %}
{% endtabs %}

<<<<<<< HEAD
Users can also export with the **Export** toolbar command or <kbd>Ctrl</kbd> + <kbd>S</kbd>.

N> Secrets are never exported, including inline AI keys and the values of sensitive request headers (`Authorization`, and names containing `secret`, `token` or `password`). Credential references (`authRef`, `credentialRef`) are kept. In `'Inline'` credential mode, keys must be entered again after import.

## Import

`importWorkflow` accepts a JSON string, an object or a `File`, and returns a promise.
=======
Users can also export with the **Export** toolbar command or by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd>.

N> Secrets are never exported. This includes inline AI keys and the values of sensitive request headers: `Authorization`, and header names that contain `secret`, `token`, or `password`. Credential references (`authRef` and `credentialRef`) are kept. In `'Inline'` credential mode, users must enter keys again after import.

## Import

[`importWorkflow`](https://ej2.syncfusion.com/documentation/api/workflow-designer/#importworkflow) accepts a JSON string, an object, or a `File`, and returns a promise. The following example imports a file that the user selects:
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751

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

<<<<<<< HEAD
=======
Keep the following in mind when importing:

>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
* Files larger than 5 MB are rejected.
* Workflows with an unknown schema version are rejected.
* Any active run is stopped before the workflow is replaced.

<<<<<<< HEAD
## Track unsaved changes

=======
For the structural errors that reject an import, see [Validation on import](./validation#validation-on-import).

## Track unsaved changes

Use `isDirty` to check for unsaved changes, and call `markClean` after you save:

>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
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
<<<<<<< HEAD
| `addWorkflowItem(item)` | Adds a step (an object with `stepType`), a connection (an object with `sourceStepId` and `targetStepId`) or a sticky note. |
| `updateWorkflowItem(id, changes, silent?)` | Updates the given properties. `id` can't be changed. |
| `removeWorkflowItem(id)` | Removes an item. Removing a step also removes its connections. |
| `clearWorkflow()` | Removes everything, without a confirmation. |
| `layoutWorkflow()` | Arranges the steps automatically. |
| `undo()`, `redo()` | Revert or reapply changes. |

These methods return `false`, and do nothing, when the designer is read-only or the item is invalid.
=======
| `addWorkflowItem(item)` | Adds a step (an object with `stepType`), a connection (an object with `sourceStepId` and `targetStepId`), or a sticky note. |
| `updateWorkflowItem(id, changes, silent?)` | Updates the given properties. The `id` can't be changed. |
| `removeWorkflowItem(id)` | Removes an item. Removing a step also removes its connections. |
| `clearWorkflow()` | Removes everything, without asking for confirmation. |
| `layoutWorkflow()` | Arranges the steps automatically. |
| `undo()`, `redo()` | Reverts or reapplies changes. |

These methods do nothing and return `false` when the designer is read-only or the item is invalid.
>>>>>>> f42dc364d54ea31a48a6751368a9008a2b1a9751
