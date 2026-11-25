---
layout: post
title: Customize step appearance in React Workflow Designer | Syncfusion®
description: Learn how to set default sizes, colors, icons, and connector styles for workflow steps and connections in the Syncfusion React Workflow Designer.
platform: diagram-sdk
control: Workflow Designer
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Customize Step Appearance in React Workflow Designer

The Workflow Designer lets you change how steps and connections look without changing the workflow logic. Use step defaults to give steps a common size, colors, and icon, and connection defaults to set the line shape, colors, and arrowheads of connections. For example, you can color steps by category, or make the `false` branch of every Condition step stand out.

Both defaults are callbacks. Each callback receives a copy of a step or connection and returns it with the defaults set, so you can decide the look of each item from its type, settings, or ports.

## Step defaults

The [`stepDefaults`](https://ej2.syncfusion.com/react/documentation/api/workflow-designer#stepdefaults) property assigns default `size` and `appearance` values to workflow steps. It's applied to every step: steps that users add, steps loaded with `importWorkflow`, and steps added with `addWorkflowItem`. Only the `size` and `appearance` values of the returned step are read.

The following example sets one size for every step and colors the steps by category.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/appearance/step-defaults-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/appearance/step-defaults-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/workflow-designer/appearance/step-defaults-cs1" %}

### Appearance properties

The `appearance` object (`WorkflowStepAppearance`) has the following properties. A property that isn't set keeps the built-in look of the step.

| Property | Type | Default | Description |
|---|---|---|---|
| `fill` | `string` | `''` | Specifies the background color of the step. |
| `strokeColor` | `string` | `''` | Specifies the border color of the step. |
| `strokeWidth` | `number` | `1` | Specifies the border width of the step, in pixels. |
| `textColor` | `string` | `''` | Specifies the color of the step text. |
| `iconCss` | `string` | `''` | Specifies the CSS class of the step icon, which replaces the built-in icon of the step type. |

The `size` object (`WorkflowSize`) has a `width` and a `height` in pixels. Set a size when the step content needs more room, for example when you use a [step template](./step-templates).

## Connection defaults

The [`connectionDefaults`](https://ej2.syncfusion.com/react/documentation/api/workflow-designer#connectiondefaults) property assigns default `type`, `style`, `sourceDecorator`, and `targetDecorator` values to workflow connections. Use it to give every connection a consistent look, or to style a connection by the port it leaves from.

| Value | Description |
|---|---|
| `type` | Specifies the line shape: `'Straight'`, `'Orthogonal'`, or `'Bezier'`. |
| `style` | Specifies the line colors with `strokeColor` and `strokeWidth`. |
| `sourceDecorator` | Specifies the shape drawn where the connection starts: `'None'`, `'Arrow'`, `'OpenArrow'`, `'Circle'`, or `'Diamond'`. |
| `targetDecorator` | Specifies the shape drawn where the connection ends, with the same values as `sourceDecorator`. |

The following example draws curved connections with an arrowhead, colored green for the `true` branch and orange for the `false` branch of Condition steps.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/appearance/connection-defaults-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/workflow-designer/appearance/connection-defaults-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/workflow-designer/appearance/connection-defaults-cs1" %}

N> During a run, the connections that the run follows are highlighted. This highlight takes priority while it's displayed, and the connection returns to its default style afterward.

## Default behavior

* **Precedence:** A value set on the step or connection itself always wins over the default, and a default always wins over the built-in value. For example, a `type` saved on a connection isn't replaced by `connectionDefaults`.
* **Saved values:** The resolved step defaults are written to the steps, so they're included in the exported workflow. The callbacks themselves are never saved.
* **Changing the callbacks:** When you assign a new callback after the designer is rendered, the values that came from the previous callback are evaluated again, and values set on the items themselves are kept.

The following example switches all connections to straight lines at run time.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function App() {
    const workflowInstance = React.useRef(null);

    function useStraightConnections() {
        const designer = workflowInstance.current;
        if (!designer) {
            return;
        }
        designer.connectionDefaults = (connection) => {
            connection.type = 'Straight';
            return connection;
        };
        designer.dataBind();
    }

    return (
        <>
            <button type="button" onClick={useStraightConnections}>Use straight connections</button>
            <WorkflowDesignerComponent
                id="workflow"
                ref={workflowInstance}
                height="500px"
            />
        </>
    );
}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';
import type { WorkflowConnection } from '@syncfusion/ej2-workflow-designer';

function App() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    function useStraightConnections(): void {
        const designer = workflowInstance.current;
        if (!designer) {
            return;
        }

        designer.connectionDefaults = (connection: WorkflowConnection): WorkflowConnection => {
            connection.type = 'Straight';
            return connection;
        };
        designer.dataBind();
    }

    return (
        <>
            <button type="button" onClick={useStraightConnections}>Use straight connections</button>
            <WorkflowDesignerComponent
                id="workflow"
                ref={workflowInstance}
                height="500px"
            />
        </>
    );
}
{% endhighlight %}
{% endtabs %}

## Custom step appearance

Custom step definitions have their own `size` and `appearance` properties, which apply to new steps created from the definition. See [Custom steps](./custom-steps#define-a-custom-step).

## See also

* [Step templates](./step-templates)
* [Connections and ports](./connections)
* [Customize the user interface](./user-interface)
