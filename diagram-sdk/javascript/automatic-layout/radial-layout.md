---
layout: post
title: Radial tree layout in JavaScript Diagram control | Syncfusion®
description: Learn here all about Automatic layout in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Radial tree 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Radial tree layout in JavaScript Diagram control

A Radial tree layout is a diagram that presents information in a hierarchical structure, with a central node at the core of the diagram. The central node represents the main concept or topic, and branches extend outward in a radial fashion, creating a tree-like structure. The layout [`root`](../../api/diagram/layout#root) property can be used to define the root node of the layout. When no root node is set, the algorithm automatically considers the node without any incoming edges (InEdges connector count of 0) as the root node. To create radial tree, the [`type`](../../api/diagram/layout#type) of the layout as `RadialTree`.

The RadialTree layout provides support for adding space between the nodes. The [`HorizontalSpacing`](../../api/diagram/layoutModel#horizontalspacing )and [`VerticalSpacing`](../../api/diagram/layoutModel#verticalspacing) properties of the layout allow you to set the space between the nodes. The arrangement results in an ever-expanding concentric arrangement with radial proximity to the root node indicating the node level in the hierarchy.

## Radial tree with DataSource

You can create a radial tree layout with DataSource. The following code example illustrates how to create a radial tree layout using a data source.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cs2" %}

N> If you want to convert the data source into layout, you need to inject DataBinding along with RadialTree module in the diagram.

## Radial tree with nodes and connectors

You can render a radial tree layout without using DataSource. The following code demonstrates how to render a radial tree layout without using data source.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-radialTree/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-radialTree/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-radialTree" %}

N> If you want to use radial tree layout in diagram, you need to inject RadialTree in the diagram.

![Radial tree](../images/RadialTree.png)