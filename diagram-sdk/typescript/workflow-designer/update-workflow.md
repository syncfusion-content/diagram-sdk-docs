---
layout: post
title: Update Workflow Items in TypeScript Workflow Designer | Syncfusion®
description: Learn how to add, update, and remove steps, connections, and sticky notes from code in the Syncfusion TypeScript Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Update Workflow Items in TypeScript Workflow Designer

The Workflow Designer provides methods that change the workflow from code, without exporting and importing it. Use them to build a workflow step by step, to apply changes from your own user interface, or to keep the workflow in sync with data in your application. Each method works on steps, connections, and sticky notes, which are identified by their unique `id`.

| Method | Description |
|---|---|
| `addWorkflowItem` | Adds a step, connection, or sticky note to the workflow and returns `true` when it's added. |
| `updateWorkflowItem` | Changes the properties of an existing item and returns `true` when it's updated. |
| `removeWorkflowItem` | Removes an item, and the connections of a removed step, and returns `true` when it's removed. |

Each successful call triggers the `workflowChanged` event, whose `changeType` identifies the change, such as `StepAdded` or `ConnectionRemoved`. See [Edit-time events](./host-integration#edit-time-events).

## Add workflow items

The `addWorkflowItem` method adds one item to the workflow. The item type is detected from its properties:

* An object with a `stepType` is added as a step.
* An object with a `sourceStepId` and a `targetStepId` is added as a connection.
* Any other object is added as a sticky note.

The following example adds a Notify step after an existing step with the identifier `approve`, connects it, and documents it with a sticky note.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

const added: boolean = designer.addWorkflowItem({
    id: 'notifyRequester',
    stepType: 'Notify',
    name: 'Notify requester',
    position: { x: 760, y: 200 },
    props: { channel: 'Email', to: 'requester@contoso.com', subject: 'Request approved', message: 'Your request was approved.' }
});

if (added) {
    designer.addWorkflowItem({ id: 'toNotify', sourceStepId: 'approve', sourcePort: 'approved', targetStepId: 'notifyRequester' });
    designer.addWorkflowItem({ id: 'notifyNote', text: 'Sends the approval email.', position: { x: 760, y: 80 } });
}

{% endhighlight %}
{% endtabs %}

Add a step before the connections that use it, because a connection is added only when both of its steps exist. New steps receive the values of [`stepDefaults`](./appearance#step-defaults), and new connections receive the values of [`connectionDefaults`](./appearance#connection-defaults).

The method ignores the item and returns `false` in the following cases:

* The workflow is read-only.
* The `id` is missing, already used by another item, or contains characters other than letters, digits, `_`, and `-`. See [Identifier rules](./workflow-steps#identifier-rules).
* A connection can't be added, for example because its source or target step doesn't exist.

N> The method checks identifiers and connection endpoints only. Call `validateWorkflow` after adding items to check the rest of the workflow, such as required settings and connection rules. See [Validation](./validation).

## Update workflow items

The `updateWorkflowItem` method changes an existing step, connection, or sticky note. It takes the following arguments:

| Argument | Type | Description |
|---|---|---|
| `id` | `string` | Specifies the identifier of the item to update. |
| `changes` | `Partial<WorkflowStep>`, `Partial<WorkflowConnection>`, or `Partial<WorkflowStickyNote>` | Specifies the properties to change. Properties that aren't included keep their values. |
| `silent` | `boolean` | Optional. When `true`, the `workflowChanged` event isn't triggered. The item is still updated. |

### Update a step

The following example changes the name and settings of an API Request step when the user clicks a button.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

document.getElementById('updateOrder').addEventListener('click', () => {
    const updated: boolean = designer.updateWorkflowItem('getOrder', {
        name: 'Get order details',
        props: { method: 'GET', url: 'https://api.mycompany.com/orders/1' }
    });
    if (!updated) {
        console.error('The workflow item could not be updated.');
    }
});

{% endhighlight %}
{% endtabs %}

N> The update is shallow. A nested object, such as `props` or `position`, replaces the existing value instead of being merged with it. Include every nested value that you want to keep. In the example above, the step's whole `props` object is replaced with the given `method` and `url`.

### Update a connection

Pass the identifier of the connection and the properties to change, such as its label and line shape.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

designer.updateWorkflowItem('toApproved', { label: 'Approved', type: 'Straight' });

{% endhighlight %}
{% endtabs %}

### Update a sticky note

Pass the identifier of the note and the properties to change, such as its text and position.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

designer.updateWorkflowItem('orderNote', {
    text: 'Orders are processed by the fulfillment team.',
    position: { x: 420, y: 180 }
});

{% endhighlight %}
{% endtabs %}

### Update behavior

* **Return value:** The method returns `true` when the item is updated, and `false` when no item has the given identifier or the workflow is read-only.
* **Identifiers:** The `id` of an item can't be changed. An `id` included in `changes` is ignored.
* **Switch branches:** Renaming a branch of a Switch step while the workflow is idle also updates the connections that leave through that branch, so they stay attached to the renamed port.
* **During a run:** Updates are allowed, for example to change the settings of a step that hasn't run yet; the new settings are used when the run reaches the step. The structure can't change during a run, so `stepType` on a step and `sourceStepId`, `targetStepId`, and `sourcePort` on a connection are ignored. Updates made during a run aren't added to the undo history.

## Remove workflow items

The `removeWorkflowItem` method removes the step, connection, or sticky note with the given identifier. Removing a step also removes every connection attached to it, so the workflow never contains connections to missing steps.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

const removed: boolean = designer.removeWorkflowItem('notifyRequester');

{% endhighlight %}
{% endtabs %}

The method returns `false`, and the workflow is unchanged, when the workflow is read-only, no item has the given identifier, or the removal is canceled.

## Respond to changes

Unless `silent` is set for an update, every successful call triggers the `workflowChanged` event. Its arguments describe the change:

* `changeType` identifies the kind of change, such as `StepAdded`, `StepModified`, or `ConnectionRemoved`.
* `affectedItem` contains the item that was added, changed, or removed.
* `changedProperties` lists the changed properties with their previous and new values, for updates.
* `workflow` contains a snapshot of the whole workflow after the change.

For an example, see [Edit-time events](./host-integration#edit-time-events).

## See also

* [Workflow steps](./workflow-steps)
* [Connections and ports](./connections)
* [Import and export](./import-export)
