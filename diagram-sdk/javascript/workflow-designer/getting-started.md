---
layout: post
title: Getting started with JavaScript Workflow Designer control | Syncfusion®
description: Check out and learn about getting started with the JavaScript Workflow Designer control of Syncfusion Essential JS 2 and more details.
platform: diagram-sdk
control: Workflow Designer
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Getting Started with JavaScript Workflow Designer

This section explains how to create a Workflow Designer in a JavaScript application, load a workflow into it, and run the workflow.

## Prerequisites

Make sure that the following tools are installed on your machine:

* [Git](https://git-scm.com/downloads)
* [Visual Studio Code](https://code.visualstudio.com)

## Dependencies

The Workflow Designer package depends on the following packages. They are installed automatically with the Workflow Designer package.

```
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

Create a folder named `my-workflow-app` for your application, and add an `index.html` file and an `index.js` file to it.

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> scripts and styles

The Workflow Designer needs its Syncfusion<sup style="font-size:70%">&reg;</sup> script and a theme to display correctly. Reference them from the CDN in the `index.html` file. The `div` element with the `workflowDesigner` ID is where the Workflow Designer is rendered.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Essential JS 2 Workflow Designer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://unpkg.com/@syncfusion/ej2-tailwind3-theme@35.1.43/styles/workflow-designer/index.css" rel="stylesheet" />
    <script src="https://cdn.syncfusion.com/ej2/35.1.37/dist/ej2.min.js" type="text/javascript"></script>
    <script src="https://cdn.syncfusion.com/ej2/35.1.37/ej2-workflow-designer/dist/global/ej2-workflow-designer.min.js" type="text/javascript"></script>
</head>
<body>
    <!-- The element that renders as the Workflow Designer -->
    <div id="workflowDesigner"></div>
    <script src="index.js" type="text/javascript"></script>
</body>
</html>

{% endhighlight %}
{% endtabs %}

N> To use another theme, replace the theme package name in the style path, for example with `ej2-fluent2-theme`. For the list of available themes, see [Themes](https://ej2.syncfusion.com/documentation/appearance/theme).

## Create the Workflow Designer

Add the following code to the `index.js` file. It creates a Workflow Designer instance and renders it in the `#workflowDesigner` element.

{% tabs %}
{% highlight js tabtitle="index.js" %}

var designer = new ej.workflowdesigner.WorkflowDesigner({
    width: '100%',
    height: '640px'
});
designer.appendTo('#workflowDesigner');

{% endhighlight %}
{% endtabs %}

In this example:

* The [`width`](https://ej2.syncfusion.com/javascript/documentation/api/workflow-designer/#width) and [`height`](https://ej2.syncfusion.com/javascript/documentation/api/workflow-designer/#height) properties set the size of the Workflow Designer. Both accept a number of pixels or any CSS length, and both default to `'100%'`.
* The `appendTo` method renders the Workflow Designer in the element that matches the given selector.

## Load a workflow

A workflow is a JSON object that contains steps, the connections between them, and optional sticky notes. Use the [`importWorkflow`](https://ej2.syncfusion.com/javascript/documentation/api/workflow-designer/#importworkflow) method to load a workflow definition into the Workflow Designer.

The following example loads an order-check workflow that reads an order from an API and branches on whether it's paid.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/workflow-designer-default/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/workflow-designer-default/index.html %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/workflow-designer-default" %}

In this example:

* `schemaVersion` identifies the format of the workflow JSON. Keep it set to `'1.1'`, the value that the **Export** command writes. A workflow without a supported schema version isn't imported.
* `workflowSteps` defines the steps. Each step has an `id`, a `stepType`, a display `name`, and a `position` on the canvas. For every step type and its settings, see [Workflow steps](./workflow-steps).
* `props` holds the settings of a step, such as the request `method` and `url` of the `ApiRequest` step.
* The `Condition` step reads the API response with the expression <code>&#123;&#123;$.previousStep.response.body.paid&#125;&#125;</code>. For more information, see [Expressions and the variable picker](./expressions).
* `workflowConnections` links the steps. The `sourcePort` property selects the output port that a connection leaves from; on the `Condition` step, it selects the `true` or `false` branch. When `sourcePort` isn't set, the `output` port is used. For more information, see [Connections and ports](./connections).

## Run the application

Open the `index.html` file in a browser to see the order-check workflow. To run it, click **Execute** in the top toolbar or press <kbd>Ctrl</kbd> + <kbd>Enter</kbd>. The execution log then shows the result of each step.

N> The sample uses a placeholder URL, so the **Get order** step fails and the execution log shows the error. To see a complete run, replace the URL with an API that returns a JSON object with a `paid` field and allows cross-origin requests (CORS) from your page.

## Destroy the Workflow Designer

Call the [`destroy`](https://ej2.syncfusion.com/javascript/documentation/api/workflow-designer/#destroy) method when the Workflow Designer is no longer needed, for example when the user leaves the page in a single-page application. It stops any active run, removes the designer from the page, and releases the resources it uses. To keep the current workflow, call `exportWorkflow` before you destroy the designer.

{% tabs %}
{% highlight js tabtitle="index.js" %}
function destroyDesigner() {
    var json = designer.exportWorkflow();
    designer.destroy();
}
var designer = new ej.workflowdesigner.WorkflowDesigner({
    height: '500px'
});
designer.appendTo('#workflowDesigner');
document.getElementById('destroyDesigner').addEventListener('click', destroyDesigner);
{% endhighlight %}
{% endtabs %}

## See also

* [Workflow steps](./workflow-steps)
* [Connections and ports](./connections)
* [Running workflows](./execution)
* [Customize the user interface](./user-interface)
