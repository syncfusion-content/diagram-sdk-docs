---
layout: post
title: Bezier Segment edit orientation in TypeScript Diagram control | Syncfusion®
description: Learn here all about Connectors in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Bezier Segment edit orientation
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---
# Bezier Connector Settings

## How to edit bezier segments based on bezier connector settings

The intermediate point of two adjacent bezier segments can be edited interactively based on the [`segmentEditOrientation`](https://ej2.syncfusion.com/documentation/api/diagram/bezierSegmentEditOrientation) property of [`bezierSettings`](https://ej2.syncfusion.com/documentation/api/diagram/bezierSettingsModel).

| SegmentEditOrientation value | Description | Output |
|-------- | -------- | -------- |
| Bidirectional |It allows the intermediate points to be dragged in either vertical or horizontal directions. | ![Bidirectional](../../../images//bez-bidirectional.gif) |
| Freeform | It allows the intermediate points to be dragged in any direction. | ![Freeform](../../../images//bez-freeform.gif) |

The following code illustrates how to interact with Bezier efficiently by using the [`smoothness`](https://ej2.syncfusion.com/documentation/api/diagram/bezierSmoothness) and `segmentEditOrientation` properties of the `bezierSettings`.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/connectors-segEdit/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/connectors-segEdit/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/connectors-segEdit" %}