---
layout: post
title: Straight connector in TypeScript Diagram control | Syncfusion®
description: Learn here all about Connectors in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Straight 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---
# Straight connector in TypeScript Diagram control

To create a straight line, specify the [`type`](https://ej2.syncfusion.com/documentation/api/diagram/segments) of the segment as **straight** and add a straight segment to [`segments`](https://ej2.syncfusion.com/documentation/api/diagram/connector#segments) collection and need to specify [`type`](https://ej2.syncfusion.com/documentation/api/diagram/segments) for the connector. The following code example illustrates how to create a default straight segment.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/connectors-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/connectors-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/connectors-cs7" %}

The [`point`](https://ej2.syncfusion.com/documentation/api/diagram/straightSegment#point) property of straight segment allows you to define the end point of it. The following code example illustrates how to define the end point of a straight segment.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/connectors-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/connectors-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/connectors-cs8" %}

### Straight segment editing

End point of each straight segment is represented by a thumb that enables to edit the segment.
Any number of new segments can be inserted into a straight line by clicking when Shift and Ctrl keys are pressed (Ctrl+Shift+Click).
Straight segments can be removed by clicking the segment end point when Ctrl and Shift keys are pressed (Ctrl+Shift+Click). You can also add/remove segments by using the [`editSegment`](https://ej2.syncfusion.com/documentation/api/diagram#editsegment) method of diagram.

The following example shows how to add segments at runtime for the straight connector.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/connectors-straightSegEdit/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/connectors-straightSegEdit/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/connectors-straightSegEdit" %}

![Straight Segment editing GIF](../../images//StraightSegEdit.gif)