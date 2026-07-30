---
layout: post
title: Complex hierarchical tree layout in JavaScript Diagram control | Syncfusion®
description: Learn here all about Automatic layout in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Complex hierarchical tree  
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Complex hierarchical tree layout in JavaScript Diagram control

Complex hierarchical tree layout arranges nodes in a tree-like structure, where the child node can have more than one parent. This layout is an extended version of the hierarchical tree layout. To create a complex hierarchical tree, the [`type`](../../api/diagram/layout#type) property of layout should be set as `ComplexHierarchicalTree`.

## Complex hierarchical tree layout with nodes and connectors

The following example demonstrates how to render a complex hierarchical tree layout using nodes and connectors. To achieve this, you need to define the nodes and connectors collections and assign them to the diagram. Additionally, you need to set the layout type to `ComplexHierarchicalTree`.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cs9" %}

## Complex hierarchical tree layout with DataSource

The following code example illustrates how to create a complex hierarchical tree with DataSource.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-complex/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-complex/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-complex" %}

![Complex hierarchical tree layout](../images/complex-2.png)

N> In Diagram Layouts, all root nodes will always render at the same level. This default behavior cannot be changed to render different trees at distinct levels.

## Line Distribution

Line distribution is used to arrange the connectors without overlapping in automatic layout. In some cases, the automatic layout connectors connecting to the nodes will be overlapped with one another. So user can decide whether the segment of each connector from a single parent node should be same point or different point. The [`connectionPointOrigin`](../../api/diagram/layout#connectionpointorigin) property of layout is used to enable or disable the line distribution in layout. By default ConnectionPointOrigin will be `SamePoint`.

The following code example illustrates how to create a complex hierarchical tree with line distribution.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs10/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cs10" %}

N> If you want to use line distribution in diagram layout, you need to inject  LineDistribution module in the diagram.

![Different point](../images/complex-diffPoint.png)


## Linear Arrangement

Linear arrangement is used to linearly arrange the child nodes in layout, which means the parent node is placed in the center corresponding to its children. When line distribution is enabled, linear arrangement is also activated by default. The [`arrangement`](../../api/diagram/childarrangement) property of layout is used to enable or disable the linear arrangement in layout. By default arrangement will be `Nonlinear`.

N> If you want to use linear arrangement in diagram layout, you need to inject  LineDistribution module in the diagram. Linear arrangement is applicable only for complex hierarchical tree layout.

The following code illustrates how to allow a linear arrangement in diagram layout.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-complex2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-complex2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-complex2" %}

## Enable routing for layout

In some complex parent-child relationships, connectors may overlap nodes in the layout. To address this issue, you can utilize the enableRouting functionality. This feature finds a connector path that avoids any obstacles.

To enable routing in the layout, set the [`enableRouting`](../../api/diagram/layoutModel#enablerouting) property to true.

The following example shows how to activate enableRouting in the layout:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-complex3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-complex3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-complex3" %}