---
layout: post
title: Connectors in JavaScript Diagram control | Syncfusion®
description: Learn here all about Connectors in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Connectors 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Connectors in JavaScript Diagram control

Connectors are objects used to create link between two points, nodes or ports to represent the relationships between them.

## Create connector

Connector can be created by defining the source and target point of the connector. The path to be drawn can be defined with a collection of segments. To explore the properties of a [`connector`](../../api/diagram/connector), refer to [`Connector Properties`](../../api/diagram/connector). The [`id`](../../api/diagram/connectorModel#id) property of a connector is used to define its unique identifier and can later be used to find the connector at runtime for customization. 

``` javascript
var connector = { id: "connector1",
                  type:'Straight',
                  sourcePoint: {x: 100,y: 100},
                  targetPoint: { x: 200,y: 200}
                  }

```
N> When setting a Connector's ID, ensure that it does not contain white spaces, does not start with numbers or special characters, and does not include special characters like underscores (_) or spaces.

## Add connectors through connectors collection

The [`sourcePoint`](../../api/diagram/connector#sourcepoint) and [`targetPoint`](../../api/diagram/connector#targetpoint) properties of connector allow you to define the end points of a connector.

The following code example illustrates how to add a connector through connector collection.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs1" %}

## Add/Remove connector at runtime

Connectors can be added at runtime by using public method,[`add`](../../api/diagram#add) and can be removed at runtime by using public method, [`remove`](../../api/diagram#remove).

The following code example illustrates how to add connector at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs2" %}

## Add collection of connectors at runtime

The collection of connectors can be dynamically added using [`addElements`](../../api/diagram#addelements) method. Each time an element is added to the diagram canvas, the 'collectionChange' event will be triggered.

The following code illustrates how to add a connectors collection at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs61/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs61/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs61" %}

## Add Connectors from palette

Connectors can be predefined and added to the symbol palette. You can drop those connectors into the diagram, when required.

The following code example illustrates how to add connectors in palette.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-palette/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-palette/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-palette" %}


## Draw connectors

Connectors can be interactively drawn by clicking and dragging the diagram surface.

To draw a shape, you have to activate the drawing tool by setting `DrawOnce` or `ContinuousDraw` to the [`tool`](../../api/diagram#tool) property and you need to set the `connector` object by using the [`drawingObject`](../../api/diagram#drawingobject) property. The following code example illustrates how to draw a connector at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-draw/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-draw/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-draw" %}

For more information about drawing connectors, refer to [`Draw Connectors`](../../api/diagram#drawingObject-ConnectorModel).

## Update connector at runtime

Various connector properties such as `sourcePoint`, `targetPoint`, `style`, `sourcePortID`, `targetPortID`, etc., can be updated at the runtime.

The following code example illustrates how to update a connector's source point, target point, styles properties at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs3" %}

## Clone connector at runtime

Cloning a connector creates a new connector instance with identical properties and attributes.

The following code example illustrates how to clone a connector

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-clone/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-clone/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-clone" %}

## Get Connector defaults

Get Connector defaults helps to define default properties of the connector. It is triggered when the diagram is initialized. In this event, you can customize the connector properties.

The following code example explains how to customize the connector using [`getConnectorDefaults`](../../api/diagram#getconnectordefaults).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-getConDef/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-getConDef/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-getConDef" %}

## Connections

### Connection with nodes

* The [`sourceID`](../../api/diagram/connector#sourceid) and [`targetID`](../../api/diagram/connector#targetid) properties allow to define the nodes to be connected.

* The following code example illustrates how to connect two nodes.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs4" %}

* When you remove NodeConstraints [`InConnect`](../../api/diagram/nodeConstraints) from Default, the node accepts only an outgoing connection to dock in it. Similarly, when you remove NodeConstraints [`OutConnect`](../../api/diagram/nodeConstraints) from Default, the node accepts only an incoming connection to dock in it.

* When you remove both InConnect and OutConnect NodeConstraints from Default, the node restricts connector to establish connection in it.

* The following code illustrates how to disable InConnect constraints.

```javascript
//Initialize diagram
var diagram = new ej.diagrams.Diagram({
     nodes:[
        {
            id: 'node', width: 100, height: 100, offsetX: 100, offsetY: 150,
            shape: { type: 'Basic', shape: 'Rectangle' },
            //Disable InConnect constraints
            constraints: NodeConstraints.Default & ~NodeConstraints.InConnect,
        }
     ]
},'#diagram');
```

## Connection with ports

The [`sourcePortID`](../../api/diagram/connector#sourceportid) and [`targetPortID`](../../api/diagram/connector#targetportid) properties allow to create connections between some specific points of source/target nodes.

The following code example illustrates how to create port to port connections.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs5" %}

Similarly, the `sourcePortID` or `targetPortID` can be changed at the runtime by changing the port [`sourcePortID`](../../api/diagram/connector#sourceportid) or [`targetPortID`](../../api/diagram/connector#targetportid).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs6" %}

* When you set PortConstraints to [`InConnect`](../../api/diagram/portConstraints), the port accepts only an incoming connection to dock in it. Similarly, when you set PortConstraints to [`OutConnect`](../../api/diagram/portConstraints), the port accepts only an outgoing connection to dock in it.

* When you set PortConstraints to None, the port restricts connector to establish connection in it.

```javascript

//Initialize diagram
var diagram = new ej.diagrams.Diagram({
     nodes:[
         {
            id: 'node', width: 100, height: 100, offsetX: 100, offsetY: 150,
            shape: { type: 'Basic', shape: 'Rectangle' },
            ports: [
             //Enable portConstraints Inconnect
             { id: 'port', height: 10, width: 10, offset: { x: 1, y: 0.5 }, constraints: PortConstraints.InConnect },
           ]
         }
     ]
},'#diagram');
```

## Automatic line routing

Diagram provides additional flexibility to re-route the diagram connectors. A connector will frequently re-route itself when a shape moves next to it. Routing adjusts the geometry of connectors to prevent them from overlapping with any nearby nodes in their path. This feature can be activated by adding the LineRouting constraints property to the diagram.

* Dependency LineRouting module should be injected to the application as the following code snippet.

```javascript

/**
 * Injecting the automatic line routing module.
 */
ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting);

```

* Now, the line routing constraints must be included to the default diagram constraints to enable automatic line routing support like below.

```javascript
/**
 *  Initialize the Diagram
 */
   var diagram = new ej.diagrams.Diagram({
         //Add Line routing constraints to diagram.
        constraints: ej.diagrams.DiagramConstraints.Default |
                    ej.diagrams.DiagramConstraints.LineRouting
    });
    diagram.appendTo('#diagram');

```

* The following code block shows how to create the diagram with specifying nodes, connectors, constraints, and necessary modules for line routing.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs25/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs25" %}

The following image illustrates how the connector automatically re-routes the segments. 

![LineRouting GIF](../images/lineRouting.GIF.gif)

* In some situations, automatic line routing enabled diagram needs to ignore a specific connector from automatic line routing. So, in this case, auto routing feature can be disabled to the specific connector using the [`constraints`](../../api/diagram/connector#constraints) property of the connector like the following code snippet.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs26/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs26/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs26" %}

## Avoid line overlapping

The diagram provides flexibility to prevent connectors from overlapping, ensuring better clarity and readability. This feature intelligently adjusts connector paths to avoid stacking orthogonal connectors on top of each other, reducing visual clutter and enhancing diagram structure. It is especially useful in complex diagrams with multiple orthogonal connectors, where overlapping lines can make interpretation difficult.

To enable this feature, inject the `AvoidLineOverlapping` module and add its constraints to the diagram.

* Inject both the `LineRouting` and `AvoidLineOverlapping` modules into the application.

  ```javascript

  /**
   * Injecting the line routing and avoid line overlapping module.
    */
  ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting, ej.diagrams.AvoidLineOverlapping);

  ```

* Add `LineRouting` and `AvoidLineOverlapping` constraints to the diagram constraints to enable line routing with avoid line overlapping support.

  ```javascript

  /**
   *  Initialize the Diagram
    */
  var diagram = new ej.diagrams.Diagram({
        //Add line routing and avoid line overlapping constraints to diagram.
        constraints: ej.diagrams.DiagramConstraints.Default |
                     ej.diagrams.DiagramConstraints.LineRouting |
                     ej.diagrams.DiagramConstraints.AvoidLineOverlapping
    });
  diagram.appendTo('#diagram');

  ```

![AvoidLineOverlapping GIF](../images/avoidconnectoroverlap.gif)

The following example demonstrates how to enable the AvoidLineOverlapping feature in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs64/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs64/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs64" %}

N> The `AvoidLineOverlapping` feature applies only to orthogonal connectors and requires the `LineRouting` module to be injected with its constraints enabled.


## See Also

* [How to add annotations to the connector](../labels/connector-labels)
* [How to enable/disable the behavior of the connector](../constraints#connector-constraints)
* [How to add connectors to the symbol palette](../symbol-palette/symbol-palette)
* [How to perform the interaction on the connector](../interaction#connector-editing)
* [How to create diagram connectors using drawing tools](../tools#draw-connectors)