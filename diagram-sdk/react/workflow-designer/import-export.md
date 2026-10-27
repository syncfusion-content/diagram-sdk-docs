---
layout: post
title: Import and export in React Workflow Designer | Syncfusion®
description: Learn how to save, load and track changes to workflows as JSON in the Syncfusion React Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Import and export in React Workflow Designer

Workflows are saved as JSON (`WorkflowDefinitionModel`) with `schemaVersion`, `id`, `name`, `workflowSteps`, `workflowConnections` and `stickyNotes`.
Use a React ref to call the component's methods, as shown in [Getting started](./getting-started).

## Export

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    function exportWorkflow() {
        const designer = workflowInstance.current;
        if (designer) {
            const json = designer.exportWorkflow();
            const copy = designer.getWorkflow();
            designer.saveWorkflow('order-check.json');
            console.log(json, copy);
        }
    }

    return (
        <>
            <WorkflowDesignerComponent id="workflow" ref={workflowInstance} height="500px" />
            <button onClick={exportWorkflow}>Export workflow</button>
        </>
    );
}

{% endhighlight %}
{% endtabs %}

Users can also export with the **Export** toolbar command or <kbd>Ctrl</kbd> + <kbd>S</kbd>.

N> Secrets are never exported, including inline AI keys and the values of sensitive request headers (`Authorization`, and names containing `secret`, `token` or `password`). Credential references (`authRef`, `credentialRef`) are kept. In `'Inline'` credential mode, keys must be entered again after import.

## Import

`importWorkflow` accepts a JSON string, an object or a `File`, and returns a promise.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const designer = workflowInstance.current;
        const file = event.currentTarget.files?.[0];
        if (designer && file) {
            designer.importWorkflow(file).catch((error) => {
                console.error(error);
            });
        }
    }

    return (
        <>
            <WorkflowDesignerComponent id="workflow" ref={workflowInstance} height="500px" />
            <input type="file" onChange={handleFileChange} />
        </>
    );
}

{% endhighlight %}
{% endtabs %}

* Files larger than 5 MB are rejected.
* Workflows with an unknown schema version are rejected.
* Any active run is stopped before the workflow is replaced.

## Track unsaved changes

Replace `myApi.save` with the application's persistence call.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    React.useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            if (workflowInstance.current?.isDirty()) {
                event.preventDefault();
            }
        };

        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, []);

    function saveWorkflow() {
        const designer = workflowInstance.current;
        if (designer) {
            myApi.save(designer.exportWorkflow()).then(() => designer.markClean());
        }
    }

    return (
        <>
            <WorkflowDesignerComponent id="workflow" ref={workflowInstance} height="500px" />
            <button onClick={saveWorkflow}>Save</button>
        </>
    );
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
