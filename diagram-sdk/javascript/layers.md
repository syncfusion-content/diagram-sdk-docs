---
layout: post
title: Layers in JavaScript Diagram control | Syncfusion®
description: Learn here all about Layers in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Layers 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Layers in JavaScript Diagram control

**Layer** organizes related shapes within a diagram control as named categories. Assigning shapes to different layers enables selective viewing, removal, and locking of distinct shape categories.

In a diagram, [Layers](../api/diagram/layermodel) facilitate the modification of properties for all shapes assigned to a specific layer. Key properties that can be configured include:

* Objects
* Visible
* Lock
* AddInfo

## Objects

The layer's [objects](../api/diagram/layer#objects) property specifies which diagram elements belong to that layer. This property contains a collection where you can define the categories of nodes and connectors that the layer encompasses.

In the following example, the basic shapes are categorized in layer 1, and the flow shapes are categorized in layer 2.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/layers-cs3" %}

## Visible

The layer's [visible](../api/diagram/layer#visible) property is used to control the visibility of the elements assigned to the layer. You can hide objects in one layer while showing objects in another layer.

In the following example, the visibility of layer one is set to false. By default, the `visible` property of a layer is set to **true**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/layers-cs1" %}

## Lock

The layer's [lock](../api/diagram/layer#lock) property is used to prevent or allow changes to the element's dimensions and positions. Locking a layer prevents any interactions with the objects in that layer, such as selecting, dragging, rotating, and connecting. 

In the following example the objects in layer one is locked. By default, the `lock` property of a layer is set to **false**.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/layers-cs2" %}

## AddInfo

The [`addInfo`](../api/diagram/layer#addinfo) property of layers allow you to maintain additional information to the layers.

The following code illustrates how to add additional information to the layers.

```javascript
var nodes = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
    }
];
var connectors = [{
    id: 'connector1',
    type: 'Straight',
    sourcePoint: {
        x: 100,
        y: 300
    },
    targetPoint: {
        x: 200,
        y: 400
    },
}];
//Additional informations of layer
var addInfo = { Description: 'Layer1' };
// initialize Diagram component
var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
    nodes: nodes,
    layers: [{
            id: 'layer1',
            visible: true,
            objects: ['node1', 'node2'],
            addInfo: addInfo
        },
        {
            id: 'layer2',
            visible: true,
            objects: ['connector1']
        }
    ]
});

```

## Add layer at runtime

Layers can be added at runtime using the [`addLayer`](../api/diagram#addlayer) public method.

The layer's [`id`](../api/diagram/layer#id) property defines the ID of the layer, which is used to find the layer at runtime and apply any customizations. You can also add new objects to the new layer using the `addLayer` method.

The following code illustrates how to add a new layer with new connectors stored in an object array of the new layer:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/layers-cs4" %}

## Remove layer at runtime

Layers can be removed at runtime by using the [`removeLayer`](../api/diagram/index-default#removelayer) public method.

To remove a layer, pass the ID of the layer you want to remove as a parameter to the `removeLayer` method.

The following code illustrates how to remove a layer.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/layers-cs5" %}


## moveObjects

You can move objects from one layer to another dynamically using the [`moveObjects`](../api/diagram/index-default#moveobjects) public method of the diagram control. This can be useful for managing complex diagrams with multiple layers where you need to update the categorization of elements based on user interaction or other dynamic conditions..

The following code illustrates how to move objects from one layer to another layer.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/layers-cs6" %}

## Z-Index

[`zIndex`](../api/diagram/layer#zindex) property of a layer defines its Z order within the diagram. This property allows you to control the layer's position in the stacking order. You can adjust the layer's z-index by moving it forward or backward relative to other layers in the diagram.

### Bring Layer Forward

Layers can be moved forward at runtime by using the [`bringLayerForward`](../api/diagram/index-default#bringlayerforward) public method.

```javascript
// move the layer forward
diagram.bringLayerForward('layer1');

```

### Send Layer Backward

Layers can be moved backward at runtime by using the [`sendLayerBackward`](../api/diagram/index-default#sendlayerbackward) public method.

```javascript
// move the layer backward
diagram.sendLayerBackward('layer1');

```

The following code illustrates how to send the layer forward/backward to another layer.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs7/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/layers-cs7" %}

### Layer and objects rendering order

The rendering of diagram elements with layer properties involves grouping them within a `diagram_diagramLayer` for basic shape nodes and `diagram_nativeLayer_svg` for SVG-native elements. Even if different types of nodes are added within the same layer, the rendering at the DOM level occurs in separate layers. Therefore, when executing layering commands like [`bringLayerForward`](../api/diagram/index-default#bringlayerforward) and [`sendLayerBackward`](../api/diagram/index-default#sendlayerbackward), the native SVG elements will always render above the basic shape elements. 

The order of rendering is as follows: HTML shapes -> SVG shapes -> Path data shapes & Basic shapes.

## Clone Layer

Layers can be cloned with its object by using the [`cloneLayer`](../api/diagram/index-default#clonelayer) public method.

The following code illustrates how to clone the layer.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/layers-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/layers-cs8" %}


## Active layer

Active Layer refers to the layer with the highest z-index in a diagram compared to other layers. When adding objects at runtime, they are stored in this active layer. If no layers are explicitly defined in the diagram, a default layer is created and automatically set as the active layer. However, when multiple layers are defined, the layer with the highest z-index takes precedence as the active layer.

Public methods are available to get and set the active layer, which are explained below.

### Get ActiveLayer

Active layer of the diagram can be retrieved by using the [`getActiveLayer`](..api/diagram/index-default#getactivelayer) public method.

The following code illustrates how fetch active layer from the diagram

```javascript

// gets the active layer of diagram
let activeLayer = diagram.getActiveLayer();

```

### Set ActiveLayer

You can set any layer to be the active layer of the diagram by using the [`setActiveLayer`](../api/diagram/index-default#setactivelayer) public method.

The following code illustrates how to set active layer for diagram

```javascript

// set the active layer
//@param layerName defines the name of the layer which is to be active layer
diagram.setActiveLayer('layer2');

```