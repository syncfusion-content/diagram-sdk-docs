---
layout: post
title: Getting started with React Workflow Designer | Syncfusion
description: Learn how to integrate and use the Syncfusion Workflow Designer control in a React application.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Getting started with React Workflow Designer

The React Workflow Designer package provides the `WorkflowDesignerComponent`. Add it to your JSX and use a React ref when you need to call its methods.

## Dependencies

The React Workflow Designer package uses the following Syncfusion packages:

```
|-- @syncfusion/ej2-react-workflow-designer
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

Installing `@syncfusion/ej2-react-workflow-designer` installs the required Syncfusion dependencies.

## Set up the development environment

Create a React application with Vite and install the Workflow Designer package:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm create vite@latest workflow-react -- --template react-ts
cd workflow-react
npm install
npm install @syncfusion/ej2-react-workflow-designer

{% endhighlight %}
{% endtabs %}

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Add the theme styles for the Workflow Designer and its dependencies to `src/index.css`:

{% tabs %}
{% highlight css tabtitle="index.css" %}

@import '@syncfusion/ej2-base/styles/tailwind3.css';
@import '@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '@syncfusion/ej2-popups/styles/tailwind3.css';
@import '@syncfusion/ej2-diagrams/styles/tailwind3.css';
@import '@syncfusion/ej2-interactive-chat/styles/tailwind3.css';
@import '@syncfusion/ej2-workflow-designer/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

## Add the Workflow Designer to the application

Import `WorkflowDesignerComponent` and add it to your React component. Use a ref to access its methods.

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function App() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    return (
        <WorkflowDesignerComponent
            id="workflow"
            ref={workflowInstance}
            width="100%"
            height="640px"
        />
    );
}

export default App;

{% endhighlight %}
{% endtabs %}

## Load a workflow

A workflow is a JSON object with steps, connections and optional sticky notes. Import it after creating the designer instance:

{% tabs %}
{% highlight tsx tabtitle="App.tsx" %}

import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';
import type { WorkflowDefinitionModel } from '@syncfusion/ej2-workflow-designer';

const workflow: WorkflowDefinitionModel = {
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
        {
            id: 'remind', stepType: 'Notify', name: 'Send reminder', position: { x: 820, y: 280 },
            props: { channel: 'Email', to: 'customer@example.com', message: 'Your order is awaiting payment.' }
        }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'getOrder' },
        { id: 'c2', sourceStepId: 'getOrder', targetStepId: 'isPaid' },
        { id: 'c3', sourceStepId: 'isPaid', sourcePort: 'true', targetStepId: 'done' },
        { id: 'c4', sourceStepId: 'isPaid', sourcePort: 'false', targetStepId: 'remind' }
    ]
};

function App() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    React.useEffect(() => {
        workflowInstance.current?.importWorkflow(workflow).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
        <WorkflowDesignerComponent
            id="workflow"
            ref={workflowInstance}
            height="640px"
        />
    );
}

{% endhighlight %}
{% endtabs %}

## Run the application

Run the application in the browser with the following command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

npm run dev

{% endhighlight %}
{% endtabs %}

Click **Execute** in the top toolbar, or press <kbd>Ctrl</kbd> + <kbd>Enter</kbd>, to run the workflow. The execution log shows the result of each step.

## See also

* [Workflow steps](./workflow-steps)
* [Connections and ports](./connections)
* [Running workflows](./execution)
