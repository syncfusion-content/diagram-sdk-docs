---
layout: post
title: Tools in TypeScript Diagram control | Syncfusion®
description: Learn here all about Tools in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Tools 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Tools in TypeScript Diagram control

The tools in the diagram control can perform various actions such as selecting, panning, and drawing. These tools are explained below.

- `Select`: Allows you to choose specific elements within the diagram.
- `Pan`: Enables you to move the view of the diagram to different areas without altering the elements.
- `Draw`: Provides the ability to draw new shapes, connectors, on the diagram surface.

These tools are Essential<sup style="font-size:70%">&reg;</sup> for creating, editing, and navigating complex diagrams efficiently.

## Drawing tools

Drawing tool allows you to draw any kind of node/connector during runtime by clicking and dragging on the diagram page.

### Draw nodes

To draw a shape, set the JSON of that shape to the [`drawingObject`](https://ej2.syncfusion.com/documentation/api/diagram/nodemodel) property of the diagram and activate the drawing tool by using the [`tool`](https://ej2.syncfusion.com/documentation/api/diagram/diagramtools) property. The following code example illustrates how to draw a rectangle at runtime:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/Tools-cs1" %}

The following code example illustrates how to draw a path shape.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/Tools-cs2" %}

### Text Nodes

Similarly, you can draw a text node by setting the type of shape as **Text** in the [`drawingObject`](https://ej2.syncfusion.com/documentation/api/diagram/nodemodel) property. The [`text`](https://ej2.syncfusion.com/documentation/api/diagram/textmodel) type node contains a property called content, which specifies the text within the node. You can add the content to the text node once you finish drawing the node. Here is how you can draw a text node at runtime:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/Tools-cs4" %}

### Draw Connectors

To draw connector, set the JSON of that connector to the [`drawingObject`](https://ej2.syncfusion.com/documentation/api/diagram/connectormodel) property of the diagram. The drawing tool can be activated by using the [`tool`](https://ej2.syncfusion.com/documentation/api/diagram#tool) property. The following code example illustrates how to draw different types of connector using drawing tool.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/Tools-cs3" %}


### Polygon shape

The diagram allows you to create polygon shapes by clicking and moving the mouse at runtime on the diagram page. This interactive feature enables users to define custom shapes with multiple sides by specifying points directly on the diagram canvas.

To draw a polygon shape, you need to set the [`drawingObject`](https://ej2.syncfusion.com/documentation/api/diagram/nodemodel) property with the appropriate JSON configuration for a `polygon`. This includes specifying the type as **Polygon**.

The following code illustrates how to draw a polygon shape at runtime:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/Tools-cs5" %}

![Polygon drawing](images/polygon-drawing.gif)

### Polyline Connector

The diagram control enables users to create polyline connectors interactively by clicking and dragging the mouse on the diagram canvas at runtime. It allows creating polyline segments with straight lines and angled vertices at control points directly within the diagram interface. 

To draw a polyline connector, set the type of the [`drawingObject`](https://ej2.syncfusion.com/documentation/api/diagram/connectormodel) as **Polyline**.

The following code illustrates how to draw a Polyline connector at runtime:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/Tools-cs6" %}

The segments of a polyline connector can be adjusted at runtime by dragging the segment thumb, as shown in the image below. To enable segment editing, you should set the [`DragSegmentThumb`](https://ej2.syncfusion.com/documentation/api/diagram/connectorConstraints) constraint for the connector.

![Polyline connector drawing](images/polyline-draw.gif)

N> To make the segment thumb visible, inject the [`ConnectorEditing`](https://ej2.syncfusion.com/documentation/api/diagram/connectorEditing) module into the diagram.

### Freehand Drawing

The diagram supports free-hand drawing, allowing users to draw anything independently on the diagram page. Free-hand drawing is enabled by setting the type of the [`drawingObject`](https://ej2.syncfusion.com/documentation/api/diagram/connectormodel) property to **Freehand**.

The following code illustrates how to perform freehand drawing:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/Tools-cs9" %}

The segments of a freehand connector can be adjusted at runtime by dragging the segment thumb, as shown in the image below. To enable segment editing, you should set the [`DragSegmentThumb`](https://ej2.syncfusion.com/documentation/api/diagram/connectorConstraints) constraint for the connector.

![Freehand connector drawing](images/freehand-draw.gif)

## Tool selection

There are some functionalities that can be achieved by clicking and dragging on the diagram surface. They are as follows.

* Draw selection rectangle: MultipleSelect tool
* Pan the diagram: ZoomPan tool
* Draw nodes/connectors: DrawOnce/ContinuousDraw tool

Since these behaviors are distinct, only one can be active at a time based on the selected tool. When multiple tools are applied, precedence is determined as follows:

|Precedence|Tools|Description|
|----------|-----|-----------|
|1st|ContinuesDraw|Allows you to draw the nodes or connectors continuously. Once it is activated, you cannot perform any other interaction in the diagram.|
|2nd|DrawOnce|Allows you to draw a single node or connector. Once you complete the DrawOnce action, SingleSelect, and MultipleSelect tools are automatically enabled.|
|3rd|ZoomPan|Allows you to pan the diagram. When you enable both the SingleSelect and ZoomPan tools, you can perform the basic interaction as the cursor hovers node/connector. Panning is enabled when cursor hovers the diagram.|
|4th|MultipleSelect|Allows you to select multiple nodes and connectors. If both the MultipleSelect and ZoomPan tools are enabled, the rubber band selection (click and drag to select) is disabled when hovering over the diagram. However, panning is enabled while hovering over the diagram. To select multiple nodes, hold down the CTRL key and click on each node you want to select. Similarly, to unselect a node that is already selected, hold down the CTRL key and click on the node again.|
|5th|SingleSelect|Allows you to select individual nodes or connectors.|
|6th|None|Disables all tools.|

These tools provide flexibility and functionality for creating and interacting with elements within the diagram interface.

### Zoom pan tool

To activate panning mode set the [`tool`](https://ej2.syncfusion.com/documentation/api/diagram#tool) property of the diagram as **ZoomPan**. The following code illustrates how to enable Zoom pan in the diagram

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/Tools-cs7" %}

N> Please note that panning the diagram is not possible when `multiplePage` is set to **false** if any diagram object (node or connector) is outside the defined page break area.

## Events

The [`elementDraw`](https://ej2.syncfusion.com/documentation/api/diagram/iElementDrawEventArgs) event is triggered whenever a node or connector is drawn using a drawing tool in the diagram. This event provides a way to capture and respond to actions when elements are created on the canvas.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/Tools-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/Tools-cs8" %}

