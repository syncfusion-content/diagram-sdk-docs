---
layout: post
title: Import and export in Vue Workflow Designer | Syncfusion®
description: Learn how to save, load and track changes to workflows as JSON in the Syncfusion Vue Workflow Designer.
control: Workflow Designer
platform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Import and export in Vue Workflow Designer

Workflows are saved as JSON (`WorkflowDefinitionModel`) with the `schemaVersion`, `id`, `name`, `workflowSteps`, `workflowConnections`, and `stickyNotes` properties.

## Export

Export the workflow as a JSON string, as an object, or as a file download:

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
    const json = designer.value.ej2Instances.exportWorkflow();      // JSON string
    const copy = designer.value.ej2Instances.getWorkflow();                 // Object copy
    designer.value.ej2Instances.saveWorkflow('order-check.json');           // Browser download
});
</script>

{% endhighlight %}
{% endtabs %}

Users can also export with the **Export** toolbar command or by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd>.

N> Secrets are never exported. This includes inline AI keys and the values of sensitive request headers: `Authorization`, and header names that contain `secret`, `token`, or `password`. Credential references (`authRef` and `credentialRef`) are kept. In `'Inline'` credential mode, users must enter keys again after import.

## Import

[`importWorkflow`](https://ej2.syncfusion.com/vue/documentation/api/workflow-designer/#importworkflow) accepts a JSON string, an object, or a `File`, and returns a promise. The following example imports a file that the user selects:

{% tabs %}
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner ref="designer"></ejs-workflowdesigner>
    <input ref="fileInput" id="fileInput" type="file" />
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';
const designer = ref(null);
const fileInput = ref(null);

onMounted(() => {
    fileInput.value.addEventListener('change', (event) => {
        designer.value.ej2Instances.importWorkflow(event.target.files[0]).catch((error) => {
            console.error(error.code, error.message);
        });
    });
});
</script>

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
{% highlight html tabtitle="App.vue" %}

<template>
    <ejs-workflowdesigner ref="designer"></ejs-workflowdesigner>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';
const designer = ref(null);

function save(){
    // myApi stands for your application's save endpoint.
    myApi.save(designer.value.ej2Instances.exportWorkflow()).then(() => designer.value.ej2Instances.markClean());
}

onMounted(() => {
    window.addEventListener('beforeunload', (e) => {
        if (designer.value.ej2Instances.isDirty()) { e.preventDefault(); }
    });
});
</script>

{% endhighlight %}
{% endtabs %}

## Edit the workflow from code

| Method | Description |
|---|---|
| `addWorkflowItem(item)` | Adds a step (an object with `stepType`), a connection (an object with `sourceStepId` and `targetStepId`), or a sticky note. |
| `updateWorkflowItem(id, changes, silent?)` | Updates the given properties. The `id` can't be changed. |
| `removeWorkflowItem(id)` | Removes an item. Removing a step also removes its connections. |
| `clearWorkflow()` | Removes everything, without asking for confirmation. |
| `layoutWorkflow()` | Arranges the steps automatically. |
| `undo()`, `redo()` | Reverts or reapplies changes. |

These methods do nothing and return `false` when the designer is read-only or the item is invalid.
