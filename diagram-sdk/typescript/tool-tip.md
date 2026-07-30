---
layout: post
title: Tool tip in TypeScript Diagram control | Syncfusion®
description: Learn here all about Tool tip in Syncfusion® TypeScript Diagram control of Syncfusion® Essential JS 2 and more.
platform: diagram-sdk
control: Tool tip 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Tool tip in TypeScript Diagram control

<!-- markdownlint-disable MD010 -->

In a Graphical User Interface (GUI), a tooltip is a message that appears when the mouse hovers over an element. The diagram control provides tooltip support while dragging, resizing, rotating a node, and when the mouse hovers over any diagram element.

## Default tooltip

By default, the diagram displays a tooltip showing size, position, and angle information while dragging, resizing, or rotating a node. The following images illustrate how the diagram displays node information during these interactions.

| Drag | Resize | Rotate |
|---|---|---|
| ![ToolTip During Drag](images/Tooltip_img1.png) | ![ToolTip During Resize](images/Tooltip_img2.png) | ![ToolTip During Rotate](images/Tooltip_img3.png) |

### Disable default tooltip

The default tooltip that appears while interacting with nodes can be disabled by removing the tooltip constraints from the [`selectorConstraints`](https://ej2.syncfusion.com/documentation/api/diagram/selectorconstraints) of the [`selectedItems`](https://ej2.syncfusion.com/documentation/api/diagram/selectormodel) property of the diagram.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-disDefTooltip/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-disDefTooltip/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-disDefTooltip" %}




## Tooltip for a specific node/connector

The tooltip can be customized for each node and connector. To show different tooltips for different diagram elements on mouse over, set the [`tooltip`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltipModel) property of the node or connector with the tooltip [`content`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltipModel#content) and [`position`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltipModel#position). The following code example illustrates how to customize the tooltip for individual elements.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-cs2" %}



## Inherit diagram tooltip

The diagram supports inheriting the diagram tooltip when the mouse hovers over any node or connector. To show a tooltip on mouse over, set the diagram's [`tooltip`](https://ej2.syncfusion.com/documentation/api/diagram/diagramtooltipmodel) property with the tooltip [`content`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltip#content) and [`position`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltip#position). Ensure that the nodes and connectors have their constraints set to **InheritTooltip**, as shown in the following example.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-cs1" %}



### Disable tooltip at runtime

The tooltip on mouse over can be disabled by setting the diagram's [`tooltip`](https://ej2.syncfusion.com/documentation/api/diagram/diagramtooltipmodel) property to `null`. The following code example illustrates how to disable the mouse over tooltip at runtime.



```ts

//Initializes the diagram component
let diagram: Diagram = new Diagram({
    width: '100%', height: '350px',
	//Disables mouse over tooltip at runtime
	tooltip: null
}, '#element');

```



## Tooltip for Ports

The tooltip feature has been implemented to support Ports, providing the ability to display information or descriptions when the mouse hovers over them.

To display tooltips on mouseover, set the desired tooltip [`content`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltip#content) by utilizing the [`tooltip`](https://ej2.syncfusion.com/documentation/api/diagram/diagramtooltipmodel) property.

Tooltips for Ports can be enabled or disabled using the [`PortConstraints`](https://ej2.syncfusion.com/documentation/api/diagram/portconstraints) Tooltip property.


```ts
let ports =  [{
        offset: {x: 1,y: 0.5},
        tooltip: {content: 'Port Tootip'},
        
        //enable Port Tooltip Constraints
        constraints: PortConstraints.Default | PortConstraints.ToolTip,
        
        //disable Port Tooltip Constraints
        constraints: PortConstraints.Default ~& PortConstraints.ToolTip
    }]
```


Dynamic modification of tooltip content is supported, allowing you to change the displayed tooltip content during runtime.

```ts
{
    //change tooltip content at run time
    diagram.nodes[0].ports[0].tooltip.content = 'New Tooltip Content';
    diagram.databind;
}
```


Here, the code provided below demonstrates the port tooltip Interaction.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-cs7" %}




The following image illustrates how the diagram displays tooltips during an interaction with ports:

![Tooltip](images/PortTooltip.gif)

## Tooltip template content

The tooltip template content allows you to customize the tooltip by using HTML templates. This means you can define the structure and style of the tooltip using HTML, providing greater flexibility and control over its appearance. By leveraging HTML templates, you can include rich content such as formatted text, images, and other HTML elements within the tooltip, enhancing the user experience with more informative and visually appealing tooltips.

The following code example illustrates how to add formatted HTML content to the tooltip.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-cs3" %}



## Tooltip alignments

### Tooltip relative to object

The diagram supports displaying a tooltip around the node or connector that is hovered over by the mouse. The tooltip's alignment can be adjusted using the [`position`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltip#position) property.  The [`relativeMode`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltip#relativemode) property specifies whether the tooltip should be displayed around the object or at the mouse position.

The following code example illustrates how to position the tooltip around object.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-cs4" %}



### Tooltip relative to mouse position

To display the tooltip at the mouse position, set the **mouse** option in the [`relativeMode`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltip#relativemode) property of the tooltip.

The following code example illustrates how to show tooltip at mouse position.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-cs5" %}



## Tooltip animation

To animate the tooltip, you can use a range of animation effects controlled by the [`animation`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltip#animation) property. This property allows you to customize the delay, duration, and various other effects according to your preferences.

Refer the following sample where we used zoomIn animation for tooltip open and zoomOut animation for tooltip close with delay and duration. 



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-cs6" %}



## Sticky tooltip

A sticky tooltip will remain visible even after you move the mouse away from the node or connector. You can activate this feature by setting the [`isSticky`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltipModel#issticky) property of the tooltip. 

The following example shows how to render sticky tooltip. 



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-isSticky/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-isSticky/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-isSticky" %}



## Hide tooltip pointer

The [`showTipPointer`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltipModel#showtippointer) property allows to control the visibility of tooltip pointer. By default, the `showTipPointer` is set as true.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-tipPointer/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-tipPointer/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-tipPointer" %}



## Tooltip size

By default, the size of the tooltip is calculated based on its content. If you want to customize the size, you can use the  [`width`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltipModel#width) and [`height`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltipModel#height) properties of the tooltip.

The following code example shows how to set the size for the tooltip:



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-size/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-size/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-size" %}



## Show/Hide tooltip at runtime

You can show or hide the tooltip dynamically using a button click with the [`showTooltip`](https://ej2.syncfusion.com/documentation/api/diagram#showtooltip) and [`hideTooltip`](https://ej2.syncfusion.com/documentation/api/diagram#hidetooltip) methods of the diagram. This allows you to control the tooltip visibility programmatically rather than relying on user hover actions. In some cases, you may want to display the tooltip without requiring the user to hover over the object.

The following example demonstrates how to show or hide the tooltip at runtime:



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-runtime/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-runtime/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-runtime" %}



## Tooltip for Annotation

Tooltips can be added to annotations to display additional information on mouseover. 
To display tooltips on mouseover, set the desired tooltip text to the [`tooltip`](https://ej2.syncfusion.com/documentation/api/diagram/diagramtooltipmodel) property of the annotation.
Tooltips for Annotations can be enabled or disabled by setting the [`AnnotationConstraints`](https://ej2.syncfusion.com/documentation//api/diagram/annotationConstraints) property as `Tooltip`. 



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/tooltip-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/tooltip-cs8" %}



