---
layout: post
title: Ruler in JavaScript Diagram control | Syncfusion®
description: Learn here all about Ruler in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Ruler 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Ruler in JavaScript Diagram control

The ruler provides horizontal and vertical guides for measuring in the diagram control. It can be used to measure diagram objects, indicate positions, and align diagram elements, making it especially useful for creating scale models.The ruler also includes a position indicator that displays the precise location of the mouse cursor on the diagram canvas, with the default color of the position indicator marker being red.

## Define rulers

The [`rulerSettings`](../api/diagram/rulerSettings) property of diagram is used to control the visibility and appearance of the ruler in the diagram.

The [`showRulers`](../api/diagram/rulerSettings#showrulers) property is used to show or hide the rulers in the diagram.

The following code shows how to add a ruler to the diagram.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ruler-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ruler-cs1" %}
{% endif %}

## Customizing the Ruler

[`horizontalRuler`](../api/diagram/rulerSettings#horizontalruler) and [`verticalRuler`](../api/diagram/rulerSettings#verticalruler) properties of `rulerSettings` are used to customize the rulers appearance in the diagram.

By default, the ruler segments are arranged based on pixel values.

The HorizontalRuler’s [`interval`](../api/diagram/diagramRuler#interval) property defines the spacing between ruler segments, and the [`segmentWidth`](../api/diagram/diagramRuler#segmentwidth) property sets the width of each segment. Similarly, the VerticalRuler’s [`interval`](../api/diagram/diagramRuler#interval) and [`segmentWidth`](../api/diagram/diagramRuler#segmentwidth) properties control the interval and segment width for the vertical ruler.

The HorizontalRuler’s  [`tickAlignment`](../api/diagram/diagramRuler#tickalignment) property aligns the ruler ticks to the left or right side, while the VerticalRuler’s  [`tickAlignment`](../api/diagram/diagramRuler#tickalignment) aligns them to the top or bottom.

The HorizontalRuler’s [`thickness`](../api/diagram/diagramRuler#thickness) property sets the thickness of the horizontal ruler, and the VerticalRuler’s [`thickness`](../api/diagram/diagramRuler#thickness) property sets the thickness of the vertical ruler.

The following code shows how the diagram ruler can be customized.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/customRuler-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/customRuler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/customRuler-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/customRuler-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/customRuler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/customRuler-cs1" %}
{% endif %}

### Arrange tick

The HorizontalRuler’s [`arrangeTick`](../api/diagram/diagramRuler#arrangetick) and VerticalRuler’s [`arrangeTick`](../api/diagram/diagramRuler#arrangetick) functions allow you to customize the appearance of ruler ticks. These functions are called for each tick rendering.

The following code demonstrates how to use the `arrangeTick` function to customize the tickLength.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ruler-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ruler-cs2" %}
{% endif %}

### Marker color

The HorizontalRuler’s [`markerColor`](../api/diagram/diagramRuler#markercolor) and VerticalRuler’s [`markerColor`](../api/diagram/diagramRuler#markercolor) properties are used to define the ruler marker color and marker will be shown while hovering mouse over the diagram canvas.

N> The MarkerColor property can be customized using the [`marker`](./style#customizing-the-ruler-marker-color) CSS style.
