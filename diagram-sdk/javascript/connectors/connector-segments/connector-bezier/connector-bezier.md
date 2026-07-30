---
layout: post
title: Bezier connector in JavaScript Diagram control | Syncfusion®
description: Learn here all about Connectors in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Connectors 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Bezier Connectors in JavaScript Diagram control

Bezier segments are used to create curve segments and the curves are configurable either with the control points or with vectors.

To create a bezier segment, the [`segment.type`](../../../../api/diagram/segments) is set as `bezier` and need to specify [`type`](../../../../api/diagram/connector#type-Segments) for the connector. The following code example illustrates how to create a default bezier segment.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs13/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs13" %}

### Bezier segment editing

* A segment control point of the Bezier connector is used to change the bezier vectors and points of the connector.

![Bezier Segment edit Gif](../../../images/Bezier-control.gif)


### Control Points

* Bezier control points can be positioned in two ways.

* When setting control point positions using the The [`point1`](../../../../api/diagram/bezierSegment#point1-PointModel) and [`point2`](../../../../api/diagram/bezierSegment#point2-PointModel)  properties, the control point remains fixed in its set position while dragging connector end points.
* When setting control point positions using the [`vector1`](../../../../api/diagram/bezierSegment#vector1) and [`vector2`](/api/diagram/bezierSegment#vector2) properties, the control point dynamically adjusts to maintain the angle and distance originally set while moving the connector end points.

#### Point

The [`point1`](../../../../api/diagram/bezierSegment#point1-PointModel) and [`point2`](../../../../api/diagram/bezierSegment#point2-PointModel) properties of bezier segment enable you to set the control points. The following code example illustrates how to configure the bezier segments with control points.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs14/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs14/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs14" %}

![Bezier Control point set by point1 and point2](../../../images/Bezier-point1.gif)

#### Vector

The [`vector1`](../../../../api/diagram/bezierSegment#vector1) and [`vector2`](../../../../api/diagram/bezierSegment#vector2) properties of bezier segment enable you to define the vectors. The following code illustrates how to configure a bezier curve with vectors.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs15" %}

![Bezier Control point set by vector1 and vector1](../../../images/Bezier-vector1.gif)



### Avoid overlapping with bezier

By default, when there are no segments defined for a bezier connector, the bezier segments will be created automatically and routed in such a way that avoids overlapping with the source and target nodes.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs16/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs16/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs16" %}

### Allow segment reset.

This feature allows users to choose whether to reset the control points of bezier segments when moving the source or target node. This decision empowers users to maintain control over the positioning of bezier curves, enhancing flexibility and precision in diagram editing.

#### With allow segment reset as true.

![Allow Segment rest true](../../../images/allowsegReset-true.gif)



##### With allow segment reset as false.

![Allow Segment rest false](../../../images/allowsegReset-false.gif)

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-allowSegReset/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-allowSegReset/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-allowSegReset" %}

### How to customize Bezier Segment Thumb Size

Bezier segment thumbs default to size 10. This can be adjusted globally or for individual connectors using the [`segmentThumbSize`](../../../../api/diagram#segmentthumbsize) property.
To change the thumb size for all Bezier connectors, set the [`segmentThumbSize`](../../../../api/diagram#segmentthumbsize) property in the diagram’s model.
To customize the thumb size for a specific connector, disable the [`InheritSegmentThumbSize`](../../../../api/diagram/connectorConstraints) constraint, then set the desired [`segmentThumbSize`](../../../../api/diagram#segmentthumbsize).

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs63/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-cs63/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-cs63" %}