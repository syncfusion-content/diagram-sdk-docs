---
layout: post
title: Import and export in Vue Workflow Designer control | Syncfusion®
description: Learn how to save workflows as JSON and load them again in the Syncfusion Vue Workflow Designer, and which values are removed on export.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Import and Export in Vue Workflow Designer

Workflows are saved and loaded as JSON, so you can store them in your database, version them, or run them on your own server. A workflow contains the `id`, `name`, `workflowSteps`, `workflowConnections`, and `stickyNotes` properties. Exported JSON also contains a `schemaVersion` value that identifies its format; keep it unchanged when you store the JSON.

## Export

The `exportWorkflow` method returns the current workflow as a JSON string. Use it to save the workflow, for example when the user clicks your own **Save** button.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
    <div id="app">
        <button type="button" @click="exportWorkflow">Export workflow</button>
        <ejs-workflowdesigner ref="workflow"
            id="workflow"
            height="500px"></ejs-workflowdesigner>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const workflow = ref(null);

function exportWorkflow() {
    const designer = workflow.value.ej2Instances;
    const json = designer.exportWorkflow();
    // myApi stands for your application's save endpoint.
    myApi.save(json);
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
    <div id="app">
        <button type="button" @click="exportWorkflow">Export workflow</button>
        <ejs-workflowdesigner ref="workflow"
            id="workflow"
            height="500px"></ejs-workflowdesigner>
    </div>
</template>

<script>
import { WorkflowDesignerComponent } from '@syncfusion/ej2-vue-workflow-designer';

export default {
    name: 'App',
    components: {
        'ejs-workflowdesigner': WorkflowDesignerComponent
    },
    methods: {
        exportWorkflow: function () {
            const designer = this.$refs.workflow.ej2Instances;
            const json = designer.exportWorkflow();
            // myApi stands for your application's save endpoint.
            myApi.save(json);
        }
    }
};
</script>
{% endhighlight %}
{% endtabs %}

Users can also download the workflow as a JSON file with the **Export** toolbar command or by pressing <kbd>Ctrl</kbd> + <kbd>S</kbd>.

### Values removed on export

To keep credentials out of saved files, the following values are removed from the exported JSON:

* **AI steps:** The `apiKey` setting. In `'Inline'` credential mode, users must enter the key again after an import.
* **API Request and Notify steps:** The values of request headers that normally carry credentials: `Authorization`, `Proxy-Authorization`, `Cookie`, `X-API-Key`, `API-Key`, `X-Auth-Token`, and any header whose name contains `secret`, `token`, or `password`. The header names are kept.

The credential name in the `authRef` setting is kept, because it isn't a secret.

W> Other settings are exported as entered. Don't type secrets into other fields, such as the fields of [custom steps](./custom-steps); add credentials in your application instead.

## Import

The `importWorkflow` method replaces the current workflow with one loaded from a JSON string, a workflow object, or a `File`. It returns a promise that resolves when the workflow is loaded. The following example imports a file that the user selects.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
<template>
    <div id="app">
        <input type="file" @change="onFileChange" />
        <ejs-workflowdesigner ref="workflow" id="workflow" height="500px"></ejs-workflowdesigner>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const workflow = ref(null);

function onFileChange(event) {
    const designer = workflow.value.ej2Instances;
    const file = event.target.files[0];
    if (file) {
        designer.importWorkflow(file).catch((error) => {
            console.error(error.code, error.message);
        });
    }
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
<template>
    <div id="app">
        <input type="file" @change="onFileChange" />
        <ejs-workflowdesigner ref="workflow" id="workflow" height="500px"></ejs-workflowdesigner>
    </div>
</template>

<script>
import { WorkflowDesignerComponent } from '@syncfusion/ej2-vue-workflow-designer';

export default {
    name: 'App',
    components: {
        'ejs-workflowdesigner': WorkflowDesignerComponent
    },
    methods: {
        onFileChange: function (event) {
            const designer = this.$refs.workflow.ej2Instances;
            const file = event.target.files[0];
            if (file) {
                designer.importWorkflow(file).catch((error) => {
                    console.error(error.code, error.message);
                });
            }
        }
    }
};
</script>
{% endhighlight %}
{% endtabs %}

Users can also import a JSON file with the **Import** toolbar command or by pressing <kbd>Ctrl</kbd> + <kbd>O</kbd>.

When the import succeeds, any active run is stopped, the workflow is replaced, the canvas is fitted to the page, and the `workflowChanged` event is triggered with the `WorkflowImported` change type. When the import fails, the promise rejects with a `WorkflowImportError`, and the current workflow is left unchanged. The `code` of the error tells you why.

| Code | Description |
|---|---|
| `IMPORT_INVALID_JSON` | The input isn't valid JSON. |
| `IMPORT_TOO_LARGE` | The file or JSON is larger than 5 MB. |
| `IMPORT_UNSUPPORTED_VERSION` | The JSON doesn't have a supported `schemaVersion` value. Workflows exported by the Workflow Designer always have one. |
| `IMPORT_IDS` | A step, connection, or sticky note has an empty or duplicated identifier. |
| `IMPORT_INVALID` | The JSON doesn't have the shape of a workflow, for example `workflowSteps` isn't an array. |
| `IMPORT_INVALID_STRUCTURE` | The workflow has a structural error, such as a cycle. The `messages` property of the error lists the problems. See [Validation on import](./validation#validation-on-import). |

N> To change one step, connection, or sticky note after the workflow is loaded, use the methods described in [Add, update, and remove workflow items](./update-workflow) instead of importing the whole workflow again.

## See also

* [Validation](./validation)
* [Security considerations](./security)
