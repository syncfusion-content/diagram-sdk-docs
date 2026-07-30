---
layout: post
title: Getting started with TypeScript Diagram control | Syncfusion®
description: Checkout and learn about Getting started with TypeScript Diagram control of Syncfusion Essential® JS 2 and more details.
platform: diagram-sdk
control: Getting started
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Getting Started with TypeScript Diagram Control

This section explains the steps required to create a simple diagram and demonstrates the basic usage of the diagram control using a seed application.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript control with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/documentation/mcp-server/ai-coding-assistant/getting-started).

## Prerequisites

Ensure the following tools are installed on your machine:

* [Git](https://git-scm.com/downloads)
* [Node.js](https://nodejs.org/en)
* [Visual Studio Code](https://code.visualstudio.com)

## Set up the development environment

Open the command prompt from the required directory, and run the following command to clone the Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) quickstart project from [GitHub](https://github.com/SyncfusionExamples/ej2-quickstart-webpack).

```
git clone https://github.com/SyncfusionExamples/ej2-quickstart-webpack ej2-quickstart
```

After cloning the application in the **ej2-quickstart** folder, run the following command to navigate to the folder.

```
cd ej2-quickstart
```

## Install Syncfusion TypeScript packages

Syncfusion<sup style="font-size:70%">&reg;</sup> TypeScript (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are available on the [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry. The quickstart application is preconfigured with the dependent [@syncfusion/ej2](https://www.npmjs.com/package/@syncfusion/ej2) package in the **package.json** file.
Use the following command to install the dependent npm packages from the command prompt.

```
npm install
```

## Import Syncfusion® CSS styles

The Diagram control needs Syncfusion® theme styles to display correctly. Syncfusion® theme packages include ready-to-use styles for supported control.

To add the styles, install the Tailwind theme package using the following command:

```
npm install @syncfusion/ej2-tailwind-theme
```

Then add the following CSS reference to the **src/styles/styles.css** file:

```
@import "../../node_modules/@syncfusion/ej2-tailwind-theme/styles/diagram/index.css";
```

For the list of available themes, refer to the [Themes](https://ej2.syncfusion.com/documentation/appearance/theme) documentation.

N> Syncfusion® provides multiple built-in themes. If the application uses a different theme, replace **@syncfusion/ej2-tailwind-theme/styles/diagram/index.css** with the corresponding stylesheet from the desired theme package. For example, to use the Material 3 theme, import **@syncfusion/ej2-material3-theme/styles/diagram/index.css**.

## Add the HTML element

Open the **~/src/index.html** file and add the following HTML element for the Diagram component.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Essential JS 2</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
</head>
<body>
    <div>
        <!--HTML diagram element, which is going to render as Essential JS 2 Diagram-->
        <div id="diagram"></div>
    </div>
</body>
</html>
```

## Create your first Diagram with nodes and connectors

This section explains how to create a simple flowchart by adding nodes, customizing their appearance, and connecting them using connectors.

The following example creates a flowchart with four nodes: **Start**, **Process**, **Decision**, and **End**. It also applies common node and connector settings through the `getNodeDefaults` and `getConnectorDefaults` callback bindings.

Open the **src/app/app.ts** file and add the following code to render the Diagram control.

```
import { Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';

// Node defaults function
function nodeDefaults(node: NodeModel): NodeModel {
    node.width = 140;
    node.height = 50;
    node.style = {
        fill: '#E8F4FF',
        strokeColor: '#357BD2'
    };
    return node;
}

// Connector defaults function
function connectorDefaults(connector: ConnectorModel): ConnectorModel {
    connector.type = 'Orthogonal';
    connector.targetDecorator = {
        shape: 'Arrow',
        width: 10,
        height: 10
    };
    return connector;
}

// Initialize the Diagram control
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '580px',
    getNodeDefaults: nodeDefaults,
    getConnectorDefaults: connectorDefaults,
    nodes: [
        {
            id: 'node1',
            offsetX: 300,
            offsetY: 100,
            shape: {
                type: 'Flow',
                shape: 'Terminator'
            },
            annotations: [{
                content: 'Start'
            }]
        },
        {
            id: 'node2',
            offsetX: 300,
            offsetY: 200,
            shape: {
                type: 'Flow',
                shape: 'Process'
            },
            annotations: [{
                content: 'Process'
            }]
        },
        {
            id: 'node3',
            offsetX: 300,
            offsetY: 300,
            shape: {
                type: 'Flow',
                shape: 'Decision'
            },
            annotations: [{
                content: 'Decision?'
            }]
        },
        {
            id: 'node4',
            offsetX: 300,
            offsetY: 400,
            shape: {
                type: 'Flow',
                shape: 'Terminator'
            },
            annotations: [{
                content: 'End'
            }]
        }
    ],
    connectors: [
        {
            id: 'connector1',
            sourceID: 'node1',
            targetID: 'node2'
        },
        {
            id: 'connector2',
            sourceID: 'node2',
            targetID: 'node3'
        },
        {
            id: 'connector3',
            sourceID: 'node3',
            targetID: 'node4'
        }
    ]
});

// Render initialized Diagram
diagram.appendTo('#diagram');
```

In this example:

* [`offsetX`](https://ej2.syncfusion.com/documentation/api/diagram/nodemodel#offsetx) and [`offsetY`](https://ej2.syncfusion.com/documentation/api/diagram/nodemodel#offsety) define the position of each node.
* [`shape`](https://ej2.syncfusion.com/documentation/api/diagram/nodemodel#shape) defines the node shape configuration, and the `type: 'Flow'` with `shape: 'Terminator'`, `'Process'`, or `'Decision'` specifies flowchart shapes.
* [`annotations`](https://ej2.syncfusion.com/documentation/api/diagram/annotationmodel) adds text inside each node using the [`content`](https://ej2.syncfusion.com/documentation/api/diagram/annotationmodel#content) property.
* [`sourceID`](https://ej2.syncfusion.com/documentation/api/diagram/connectormodel#sourceid) and [`targetID`](https://ej2.syncfusion.com/documentation/api/diagram/connectormodel#targetid) connect one node to another.
* [`getNodeDefaults`](https://ej2.syncfusion.com/documentation/api/diagram/index-default#getnodedefaults) applies common width, height, fill color, and stroke color to all nodes.
* [`getConnectorDefaults`](https://ej2.syncfusion.com/documentation/api/diagram/index-default#getconnectordefaults) applies common connector settings, such as orthogonal routing and target arrows.

## Run the application

Run the application in the browser using the following command:

```
npm start
```

Then open the local URL shown in the terminal, such as `http://localhost:4000`. The application displays a flowchart diagram with four nodes connected by orthogonal connectors.

The output will appear as follows:

![Rendered flowchart with four nodes connected vertically by arrows](images/Getting-started.png)

