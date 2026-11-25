---
layout: post
title: Get Started with TypeScript Workflow Designer | Syncfusion®
description: Check out and learn about getting started with the TypeScript Workflow Designer control of Syncfusion Essential JS 2 and more details.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Getting Started with EJ2 TypeScript Workflow Designer

This section explains how to create a Workflow Designer in a TypeScript application, load a workflow into it, and run the workflow.

## Prerequisites

Make sure that the following tools are installed on your machine:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en) (the latest long-term support version is recommended)
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

Open a command prompt in the folder where you want to create the project. Then run the following commands to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack), open its folder, and install its packages.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
cd ej2-quickstart
npm install

{% endhighlight %}
{% endtabs %}

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Workflow Designer package

Install the Workflow Designer package from npm by using the following command.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm install @syncfusion/ej2-workflow-designer --save

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

The Workflow Designer needs a Syncfusion<sup style="font-size:70%">&reg;</sup> theme to display correctly. Install the Tailwind 3 theme package by using the following command.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% endtabs %}

Then, add the following reference to the `src/styles/styles.css` file.

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/workflow-designer/index.css";

{% endhighlight %}
{% endtabs %}

N> The `workflow-designer/index.css` file includes the styles of the Workflow Designer and of every control it uses, so a separate import for each dependency isn't needed. To use another theme, replace the theme package name in the path, for example with `ej2-fluent2-theme`. For the list of available themes, see [Themes](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add the HTML element

Open the `src/index.html` file and replace its contents with the following HTML. The `div` element with the `workflowDesigner` ID is where the Workflow Designer is rendered.

{% tabs %}
{% highlight html tabtitle="index.html" %}

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Essential JS 2 Workflow Designer</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body>
    <!-- The element that renders as the Workflow Designer -->
    <div id="workflowDesigner"></div>
</body>
</html>

{% endhighlight %}
{% endtabs %}

## Create the Workflow Designer

Open the `src/app/app.ts` file and add the following code. It creates a Workflow Designer instance and renders it in the `#workflowDesigner` element.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { WorkflowDesigner } from '@syncfusion/ej2-workflow-designer';

const designer: WorkflowDesigner = new WorkflowDesigner({
    width: '100%',
    height: '640px'
});
designer.appendTo('#workflowDesigner');

{% endhighlight %}
{% endtabs %}

In this example:

* The `width` and `height` properties set the size of the Workflow Designer. Both accept a number of pixels or any CSS length, and both default to `'100%'`.
* The `appendTo` method renders the Workflow Designer in the element that matches the given selector.

N> Make sure that the application entry point, for example `src/index.ts`, imports `src/app/app.ts`, so that the Workflow Designer is created when the application loads.

## Load a workflow

A workflow is a JSON object that contains steps, the connections between them, and optional sticky notes. Use the `importWorkflow` method to load a workflow definition into the Workflow Designer.

The following example loads an order-check workflow that reads an order from an API and branches on whether it's paid.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/workflow-designer-default/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/workflow-designer-default/index.html %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/workflow-designer-default" %}

In this example:

* `schemaVersion` identifies the format of the workflow JSON. Keep it set to `'1.1'`, the value that the **Export** command writes. A workflow without a supported schema version isn't imported.
* `workflowSteps` defines the steps. Each step has an `id`, a `stepType`, a display `name`, and a `position` on the canvas. For every step type and its settings, see [Workflow steps](./workflow-steps).
* `props` holds the settings of a step, such as the request `method` and `url` of the `ApiRequest` step.
* The `Condition` step reads the API response with the expression <code>&#123;&#123;$.previousStep.response.body.paid&#125;&#125;</code>. For more information, see [Expressions and the variable picker](./expressions).
* `workflowConnections` links the steps. The `sourcePort` property selects the output port that a connection leaves from; on the `Condition` step, it selects the `true` or `false` branch. When `sourcePort` isn't set, the `output` port is used. For more information, see [Connections and ports](./connections).

## Run the application

Run the application by using the following command.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm start

{% endhighlight %}
{% endtabs %}

Open the local URL shown in the terminal, such as `http://localhost:4000`, to see the order-check workflow. To run it, click **Execute** in the top toolbar or press <kbd>Ctrl</kbd> + <kbd>Enter</kbd>. The execution log then shows the result of each step.

N> The sample uses a placeholder URL, so the **Get order** step fails and the execution log shows the error. To see a complete run, replace the URL with an API that returns a JSON object with a `paid` field and allows cross-origin requests (CORS) from your page.

If `npm start` fails, run `npm install` again to make sure that all dependencies are installed. If the default port is already in use, stop the other process or change the port in the webpack configuration.

## Destroy the Workflow Designer

Call the `destroy` method when the Workflow Designer is no longer needed, for example when the user leaves the page in a single-page application. It stops any active run, removes the designer from the page, and releases the resources it uses. To keep the current workflow, call `exportWorkflow` before you destroy the designer.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

const json: string = designer.exportWorkflow();
designer.destroy();

{% endhighlight %}
{% endtabs %}

## See also

* [Workflow steps](./workflow-steps)
* [Connections and ports](./connections)
* [Running workflows](./execution)
* [Customize the user interface](./user-interface)
