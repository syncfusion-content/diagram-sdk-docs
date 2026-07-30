---
layout: post
title: Positioning of a nodes in JavaScript Diagram control | Syncfusion®
description: Learn here all about Nodes in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Positioning of nodes 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Positioning a node in JavaScript Diagram control

## Position

* Position of a node is controlled by using its [`offsetX`](../../api/diagram/node#offsetx) and [`offsetY`](../../api/diagram/node#offsety) properties. By default, these offset properties represent the distance between the origin of the diagram’s page and node’s center point.

* You may expect this offset values to represent the distance between page origin and node’s top-left corner instead of center. The Pivot property helps to solve this problem. Default value of node’s [`pivot`](../../api/diagram/node#pivot) point is (0.5, 0.5), that means center of the node.

* The size of the node can be controlled by using its [`width`](../../api/diagram/node#width) and [`height`](../../api/diagram/node#height) properties.

* Rotation of a node is controlled by using its [`rotateAngle`](../../api/diagram/node#rotateangle) property.

The following table illustrates how pivot relates offset values with node boundaries.

| Pivot | Offset |
|-------- | -------- |
| (0.5,0.5)| offsetX and offsetY values are considered as the node’s center point. |
| (0,0) | offsetX and offsetY values are considered as the top-left corner of the node. |
| (1,1) | offsetX and offsetY values are considered as the bottom-right corner of the node. |

The following code illustrates how to change the `pivot` value.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/nodes-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/nodes-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/nodes-cs3" %}

## Minimum and maximum size for nodes.

The [`minWidth`](../../api/diagram/node#minwidth) and [`minHeight`](../../api/diagram/node#minheight) properties of node allows you to control the minimum size of the node while resizing. Similarly, the [`maxWidth`](../../api/diagram/node#maxwidth) and [`maxHeight`](../../api/diagram/node#maxheight) properties of node allows you to control the maximum size of the node while resizing.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/nodes-minWidth/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/nodes-minWidth/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/nodes-minWidth" %}

![MinSize-MaxSize GIF](../images/minSize-MaxSizeGif.gif)