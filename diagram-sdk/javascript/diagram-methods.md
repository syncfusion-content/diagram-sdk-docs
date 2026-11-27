---
layout: post
title: Diagram Properties in JavaScript Diagram | Syncfusion®
description: Call Syncfusion® JavaScript Diagram methods like getDiagramBounds, refresh, clear, destroy, and getCustomTool to manage the diagram programmatically.
platform: diagram-sdk
control: Diagram API 
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Diagram Properties in JavaScript Diagram

## Get diagram bounds

The get the diagram bounds, the [`getDiagramBounds`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#getdiagrambounds) method is used. The following code example shows how to get the diagram bounds

``` javascript
   /**
   * Retrieves the bounding rectangle that encloses the entire diagram
   */
  let bounds = diagram.getDiagramBounds();

```

## Refresh diagram

Refreshing the diagram will re-render the entire JavaScript Diagram component while preserving all the property changes you have made. The [`refresh`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#refresh) method is used to refresh the diagram. 

``` javascript
   /**
   * Refresh the diagram
   */
 diagram.refresh();

```

## Clear diagram

The [`clear`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#clear) method is used to clear the diagram. It removes all nodes and objects, making the diagram empty.

``` javascript
   /**
   * Clears the diagram
   */
 diagram.clear();

```

## Destroy diagram

The [`destroy`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#destroy) method is used to completely remove the JavaScript Diagram component from the DOM and free up any associated resources. This method is useful when you no longer need the diagram and want to ensure that all memory and resources allocated to it are properly released.

``` javascript
   /**
   * Destroys the diagram
   */
 diagram.destroy();

```

## Custom cursor

The [`customCursor`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/customCursorActionModel) collection specified in the diagram is called on every mouse movement within the diagram is used to set the cursor based on the action. The `getCursor` function is then utilized to retrieve the cursor style for the specified action.

The following example demonstrates how to apply custom cursors for the Select and Drag tools using the `customCursor` property.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/diagram-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/diagram-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/diagram-cs1" %}

## Get custom tool

The  [`getCustomTool`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#getcustomtool) function is called when a mouse down event occurs on diagram elements. This function allows you to specify the tool to use based on the action. The [`getTool`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#gettool) method is used to retrieve the tool that handles a particular action.

In the following example, `getCustomTool` is used to clone a node when clicking on the user handle.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/diagram-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/diagram-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/diagram-cs2" %}

## Background color

The `backgroundColor` property of the diagram is used to set the background color for the entire diagram area. This property accepts various color formats such as color names, hex codes, RGB, or RGBA values.

## AddInfo

The `addInfo` property of the diagram is used to store additional information or metadata related to the diagram. This property can hold custom data that may be useful for various purposes.


In the following example, both `backgroundColor` and `addInfo` are set for the diagram:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/diagram-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/diagram-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/diagram-cs3" %}

## Mode

There are two types of [`mode`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/renderingMode) available for rendering diagrams:

- `SVG Mode:` Renders the diagram objects as SVG elements.
- `Canvas Mode:` Renders the diagram in a canvas.

## NodeDefaults and ConnectorDefaults

The [`getNodeDefaults`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#getnodedefaults) and [`getConnectorDefaults`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#getconnectordefaults) properties are used to assign default values to nodes and connectors, respectively. The properties set in [`getNodeDefaults`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#getnodedefaults) and [`getConnectorDefaults`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#getconnectordefaults) have higher priority when setting default values.

The following example demonstrates how to set getNodeDefaults and getConnectorDefaults.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/diagram-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/diagram-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/diagram-cs4" %}

## Diagram settings

The `inversedAlignment` property in `diagramSettings` controls the alignment of labels and ports in a node. By default, inversedAlignment is set to true.

The example below demonstrates how to set inversedAlignment for a diagram to align node labels accordingly.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/diagram-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/diagram-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/diagram-cs5" %}



