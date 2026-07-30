---
layout: post
title: Customizing layout in JavaScript Diagram control | Syncfusion®
description: Learn here all about Automatic layout in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Customizing layout
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Customizing layout in JavaScript Diagram control

Orientation, spacings, and alignment of the layout can be customized with a set of properties.

To explore layout properties, refer to [`Layout Properties`](../../api/diagram/layoutmodel#properties).

## Layout bounds

Diagram provides support to align the layout within any custom rectangular area. 

The following example shows how to align the layout within the given layout bounds.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cust2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cust2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cust2" %}

For more information about bounds, refer to [`bounds`](../../api/diagram/layoutModel#bounds).


## Layout alignment

The layout can be aligned anywhere over the layout bounds/viewport using the [`horizontalAlignment`](../../api/diagram/layoutmodel#horizontalalignment) and [`verticalAlignment`](../../api/diagram/layoutmodel#verticalalignment) properties of the layout.

The following code illustrates how to align the layout and how to change layout horizontal and vertical alignment at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs11/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cs11" %}

## Layout spacing

Layout provides support to add space horizontally and vertically between the nodes. The [`horizontalSpacing`](../../api/diagram/layoutModel#horizontalspacing) and [`verticalSpacing`](../../api/diagram/layoutModel#verticalspacing) properties of the layout allows you to set the space between the nodes in horizontally and vertically.

The following code illustrates how to set the initial horizontal and vertical spacing for the layout, as well as how to change these spacing values at runtime


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cust1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cust1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cust1" %}

## Layout margin

Layout provides support to add some blank space between the layout bounds/viewport and the layout. The [`margin`](../../api/diagram/layout#margin) property of the layout allows you to set the blank space.

The following code demonstrates how to set the initial layout margin and how to modify the layout margin dynamically at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs12/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs12/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cs12" %}

## Layout orientation

The layout orientation can used to arrange the layout based on the direction. there are different orientation types that are defined in the following table.

|Orientation|Description|
| -------- | ----------- |
|TopToBottom|Aligns the layout from top to bottom. All the roots are placed at top of diagram.|
|LeftToRight|Aligns the layout from left to right. All the roots are placed at left of diagram.|
|BottomToTop|Aligns the layout from bottom to top. All the roots are placed at bottom of the diagram.|
|RightToLeft|Aligns the layout from right to left. All the roots are placed at right of the diagram.|

Diagram provides support to customize the  [`orientation`](../../api/diagram/layoutOrientation) of layout. You can set the desired orientation using layout.orientation.

N> In the diagram the default orientation is `TopToBottom`.

The following code demonstrates how to set the initial orientation for the layout and how to change it dynamically at runtime.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cs13" %}

## Exclude from layout

In some cases, you may need one or two nodes not to be arranged based on the layout algorithm but instead positioned manually. You can exclude these nodes from the layout algorithm by setting the [`excludeFromLayout`](../../api/diagram/nodeModel#excludefromlayout) property to true.

The following code example demonstrates how to exclude a node from the layout and position it manually:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-exclude/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-exclude/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-exclude" %}

## Fixed node

Layout provides support to arrange the nodes with reference to the position of a fixed node and set it to the [`fixedNode`](../../api/diagram/layoutModel#fixednode) of the layout property. This is helpful when you try to expand/collapse a node. It might be expected that the position of the double-clicked node should not be changed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cs14" %}

## Expand and collapse

Diagram allows to expand/collapse the subtrees of a layout. The node’s isExpanded property allows you to expand/collapse its children. The following code example shows how to expand/collapse the children of a node.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cs15" %}

For more details about customizing the expand and collapse icon refer [`expand Collapse`](../nodes/expandAndCollapse)

## Layout animation

While performing expand and collapse operations, the layout can be animated by applying a small delay. This can be achieved by setting the [`enableAnimation`](../../api/diagram/layoutModel#enableanimation) property of the layout. By default, `enableAnimation` is set to true.

In the following example, the enableAnimation property ensures that the layout changes are animated, enhancing the visual experience during expand and collapse operations.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cust3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cust3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cust3" %}

N> To enable layout animation, you need to inject LayoutAnimation module in diagram.

## Parent - child relation with dropped nodes from symbol palette

You can create a layout with dropped nodes from symbol palette using the [`drop`](../../api/diagram#drop) event. In `drop` event, you have to create a connection between the source and target item.

Find the code example to create parent - child relation between source and target nodes in drop event.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs17/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs17/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cs17" %}

![Layout drag and drop](../images/drag-drop-layout.gif)

## setNodeTemplate

The [`setNodeTemplate`](../../api/diagram#setnodetemplate) function allows you to customize the visual representation and behavior of nodes within your diagram. It is invoked during the initialization of each node, enabling you to define the node’s style, properties, and bind custom JSON data to it.

Typically, the `setNodeTemplate` function accepts a container element (e.g., StackPanel, Grid) to organize the visual components within the node. In the following example, a [`StackPanel`](../../api/diagram/stackPanel) is used to organize the node's content, with an [`ImageElement`](../../api/diagram/imageElement) displaying an image and a TextBlock showing text bound to the `Name` property of the node’s data. The StackPanel can contain a variety of elements, including [`PathElement`](../../api/diagram/pathElement), [`NativeElement`](../../api/diagram/diagramNativeElement), [`DiagramElement`](../../api/diagram/diagramElement) and [`HtmlElement`](../../api/diagram/diagramHtmlElement).
You can also set the [`cornerRadius`](../../api/diagram/stackPanel#cornerradius) to create a rounded appearance for the node, while [`horizontalAlignment`](../../api/diagram/stackPanel#horizontalalignment) and [`verticalAlignment`](../../api/diagram/stackPanel#verticalalignment) control the positioning of the StackPanel within the node.

 The [`orientation`](../../api/diagram/stackPanel#orientation) property determines whether child elements are arranged horizontally or vertically.By effectively utilizing the setNodeTemplate function, you can create visually appealing and informative nodes that enhance the overall user experience of your diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/AutomaticLayout-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/AutomaticLayout-cs16" %}

## Refresh layout

Diagram allows refreshing the layout at runtime. To refresh the layout, you need to call the [`doLayout`](../../api/diagram#dolayout) method.


```javascript
//To refresh layout
diagram.doLayout();

```

