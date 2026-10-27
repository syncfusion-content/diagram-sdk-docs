---
layout: post
title: Getting started with JavaScript Workflow Designer control | Syncfusion®
description: Check out and learn about getting started with the JavaScript Workflow Designer control of Syncfusion® Essential JS 2 and more details.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Getting started with JavaScript Workflow Designer control

This section explains how to create a simple Workflow Designer and configure its core features in a JavaScript application.

## Dependencies

The Workflow Designer depends on the following packages:

```javascript
|-- @syncfusion/ej2-workflow-designer
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-diagrams
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-calendars
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-interactive-chat
```

## Set up the development environment

Clone the [Essential JS 2 quickstart](https://github.com/syncfusion/ej2-quickstart.git) project and install the necessary packages:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/syncfusion/ej2-quickstart.git quickstart
cd quickstart
npm install

{% endhighlight %}
{% endtabs %}

## Add the Syncfusion®<sup style="font-size:70%">&reg;</sup> Workflow Designer package

Install the Workflow Designer package from npm:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm install @syncfusion/ej2-workflow-designer --save

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion®<sup style="font-size:70%">&reg;</sup> CSS styles

Add the theme styles for the Workflow Designer and its dependencies to `~/src/styles/styles.css`:

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import '../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-diagrams/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-interactive-chat/styles/tailwind3.css';
@import '../../node_modules/@syncfusion/ej2-workflow-designer/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

## Add the Workflow Designer to the application

Add an HTML element for the Workflow Designer in `~/src/index.html`:

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Essential JS 2 Workflow Designer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="styles/styles.css" rel="stylesheet" />
</head>
<body>
    <div id="workflowDesigner"></div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

Then create the Workflow Designer in `~/src/app/app.js`:

{% tabs %}
{% highlight js tabtitle="app.js" %}

const designer = new ej.workflowdesigner.WorkflowDesigner({
    width: '100%',
    height: '640px'
});
designer.appendTo('#workflowDesigner');

{% endhighlight %}
{% endtabs %}

## Load a workflow

A workflow is a JSON object with steps, connections and optional sticky notes. Load it with the `importWorkflow` method:

{% tabs %}
{% highlight js tabtitle="app.js" %}

const workflow = {
    schemaVersion: '1.1',
    id: 'order-check',
    name: 'Order check',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 100, y: 200 } },
        {
            id: 'getOrder', stepType: 'ApiRequest', name: 'Get order', position: { x: 340, y: 200 },
            props: { method: 'GET', url: 'https://example.com/api/orders/1' }
        },
        {
            id: 'isPaid', stepType: 'Condition', name: 'Is paid?', position: { x: 580, y: 200 },
            props: {
                conditions: [{ field: '{{$.previousStep.response.body.paid}}', valueType: 'Boolean', operator: 'IsTrue' }]
            }
        },
        { id: 'done', stepType: 'End', name: 'Done', position: { x: 820, y: 120 } },
        { id: 'remind', stepType: 'Notify', name: 'Send reminder', position: { x: 820, y: 280 },
            props: { channel: 'Email', to: 'customer@example.com', message: 'Your order is awaiting payment.' } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'getOrder' },
        { id: 'c2', sourceStepId: 'getOrder', targetStepId: 'isPaid' },
        { id: 'c3', sourceStepId: 'isPaid', sourcePort: 'true', targetStepId: 'done' },
        { id: 'c4', sourceStepId: 'isPaid', sourcePort: 'false', targetStepId: 'remind' }
    ]
};

const designer = new ej.workflowdesigner.WorkflowDesigner({ height: '640px' });
designer.appendTo('#workflowDesigner');
designer.importWorkflow(workflow);

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application in the browser with the following command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm start

{% endhighlight %}
{% endtabs %}

Click **Execute** in the top toolbar, or press <kbd>Ctrl</kbd> + <kbd>Enter</kbd>, to run the workflow. The execution log shows the result of each step.

## See also

* [Workflow steps](./workflow-steps)
* [Connections and ports](./connections)
* [Running workflows](./execution)
