---
layout: post
title: Connector Labels in TypeScript Diagram control | Syncfusion®
description: Learn here all about Labels in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Connector Labels
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Connector annotations in TypeScript Diagram control

Annotations of a connector can be positioned using the following properties of Annotation class.

* Offset
* Alignment
* Displacement
* SegmentAngle
* HorizontalAlignment
* VerticalAlignment
* Margin

## Annotation offset

The [`offset`](https://ej2.syncfusion.com/documentation/api/diagram/pathAnnotationModel#offset) for [`pathAnnotation`](https://ej2.syncfusion.com/documentation/api/diagram/pathAnnotationModel) is of type number and ranges from 0 to 1, from the source to the target point of the connector. By default, the offset value for a connector annotation is 0.5.

The following code illustrates, how to set offset for the connector.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/annotations-conOffset/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/annotations-conOffset/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/annotations-conOffset" %}

The following image shows the position of the annotation with respect to different offsets.

![PathAnnotation offset](../images//diagram-pathAnnotation-offset.png)

## Annotation alignment

The connector’s annotation can be aligned over its segment path using the [`alignment`](https://ej2.syncfusion.com/documentation/api/diagram/annotationalignment) property of annotation.

The following code example illustrates how to align connector annotations.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/annotations-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/annotations-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/annotations-cs7" %}

## Displacement of annotation

[`Displacement`](https://ej2.syncfusion.com/documentation/api/diagram/pointmodel) refers displacement of an annotation from its actual position. A connector annotation can be displaced to a particular distance by using a displacement property of the pathAnnotation. The following example shows how to set displacement for the connector annotation.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/annotations-conDisp/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/annotations-conDisp/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/annotations-conDisp" %}

N> Displacement is only applicable when we use alignment as `After` or `Before`.

## Segment angle for annotation

The [`segmentAngle`](https://ej2.syncfusion.com/documentation/api/diagram/pathAnnotationModel#segmentangle) property is used to rotate the annotation based on the connectors segment direction. By default, annotation will be rotated in the connector path. When you set `segmentAngle` as true, annotation will be rotated from its position based on the connector segment direction. The following code illustrates, how to set segment angle.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/annotations-conSegAngle/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/annotations-conSegAngle/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/annotations-conSegAngle" %}

|Segment angle|Output|
|-----|-----|
|True|![Segment angle true](../images//diagram-annotation-segmentAngle-true.png)|
|False|![Segment angle false](../images//diagram-annotation-segmentAngle-false.png)|


