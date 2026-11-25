---
layout: post
title: Getting started with Angular Workflow Designer control | Syncfusion®
description: Check out and learn about getting started with the Angular Workflow Designer control of Syncfusion Essential JS 2 and more details.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Getting Started with Angular Workflow Designer

This section explains how to create a Workflow Designer in an Angular application, load a workflow into it, and run the workflow.

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

Use [Angular CLI](https://github.com/angular/angular-cli) to create an Angular application. Run the following commands in the folder where you want to create the project.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm install -g @angular/cli
ng new my-workflow-app
cd my-workflow-app

{% endhighlight %}
{% endtabs %}

## Add the Syncfusion<sup style="font-size:70%">&reg;</sup> Workflow Designer package

Install the Angular Workflow Designer package from npm by using the following command.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm install @syncfusion/ej2-angular-workflow-designer --save

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

The Workflow Designer needs a Syncfusion<sup style="font-size:70%">&reg;</sup> theme to display correctly. Install the Tailwind 3 theme package by using the following command.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% endtabs %}

Then, add the following reference to the `src/styles.css` file.

{% tabs %}
{% highlight css tabtitle="styles.css" %}

@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/workflow-designer/index.css";

{% endhighlight %}
{% endtabs %}

N> The `workflow-designer/index.css` file includes the styles of the Workflow Designer and of every control it uses, so a separate import for each dependency isn't needed. To use another theme, replace the theme package name in the path, for example with `ej2-fluent2-theme`. For the list of available themes, see [Themes](https://ej2.syncfusion.com/documentation/appearance/theme).

## Add the Workflow Designer component

Import `WorkflowDesignerModule` from `@syncfusion/ej2-angular-workflow-designer`, add it to the `imports` collection of the standalone component, and add the component with the `ejs-workflowdesigner` selector. Update the `src/app/app.ts` file as follows.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

import { Component } from '@angular/core';
import { WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WorkflowDesignerModule],
    template: `<ejs-workflowdesigner id="workflow" width="100%" height="640px"></ejs-workflowdesigner>`
})
export class App {}

{% endhighlight %}
{% endtabs %}

In this example:

* The [`width`](https://ej2.syncfusion.com/angular/documentation/api/workflow-designer#width) and [`height`](https://ej2.syncfusion.com/angular/documentation/api/workflow-designer#height) properties set the size of the Workflow Designer. Both accept a number of pixels or any CSS length, and both default to `'100%'`.

N> The component selector must match the root element used in the `src/index.html` file. Angular CLI commonly uses `<app-root></app-root>`.

## Load a workflow

A workflow is a JSON object that contains steps, the connections between them, and optional sticky notes. Use the [`importWorkflow`](https://ej2.syncfusion.com/angular/documentation/api/workflow-designer#importworkflow) method to load a workflow definition into the Workflow Designer.

The following example loads an order-check workflow that reads an order from an API and branches on whether it's paid.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/diagram-sdk/angular/workflow-designer/getting-started/getting-started-cs1/src/app.component.ts %}
{% endhighlight %}
{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/diagram-sdk/angular/workflow-designer/getting-started/getting-started-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

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

Open the local URL shown in the terminal, such as `http://localhost:4200`, to see the order-check workflow. To run it, click **Execute** in the top toolbar or press <kbd>Ctrl</kbd> + <kbd>Enter</kbd>. The execution log then shows the result of each step.

N> The sample uses a placeholder URL, so the **Get order** step fails and the execution log shows the error. To see a complete run, replace the URL with an API that returns a JSON object with a `paid` field and allows cross-origin requests (CORS) from your page.

## Destroy the Workflow Designer

Call the [`destroy`](https://ej2.syncfusion.com/angular/documentation/api/workflow-designer#destroy) method when the Workflow Designer is no longer needed, for example when the user leaves the page in a single-page application. It stops any active run, removes the designer from the page, and releases the resources it uses. To keep the current workflow, call `exportWorkflow` before you destroy the designer.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerComponent, WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <button type="button" (click)="destroyDesigner()">Destroy designer</button>
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="500px"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    @ViewChild('workflow')
    public workflow?: WorkflowDesignerComponent;

    public destroyDesigner(): void {
        const designer = this.workflow;
        if (!designer) {
            return;
        }

        const json: string = designer.exportWorkflow();
        designer.destroy();
    }
}
{% endhighlight %}
{% endtabs %}

## See also

* [Workflow steps](./workflow-steps)
* [Connections and ports](./connections)
* [Running workflows](./execution)
* [Customize the user interface](./user-interface)
