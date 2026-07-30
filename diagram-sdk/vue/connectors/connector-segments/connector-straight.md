---
layout: post
title: Straight connector in Vue Diagram component | Syncfusion®
description: Learn here all about Connectors in Syncfusion® Vue Diagram component of Syncfusion Essential® JS 2 and more.
control: Straight 
platform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---
# Straight Connector Segments

To create a straight line, specify the [`type`](https://ej2.syncfusion.com/vue/documentation/api/diagram/segments) of the segment as **straight** and add a straight segment to [`segments`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#segments) collection and need to specify [`type`](https://ej2.syncfusion.com/vue/documentation/api/diagram/connector#type) for the connector. 

The following code example illustrates how to create a default straight segment.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram-sdk/vue/connectors/ConnectorsSegmentsPoints-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram-sdk/vue/connectors/ConnectorsSegmentsPoints-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/vue/connectors/ConnectorsSegmentsPoints-cs1" %}

The [`point`](https://ej2.syncfusion.com/vue/documentation/api/diagram/straightsegment#point) property of straight segment allows you to define the end point of it. 

The following code example illustrates how to define the end point of a straight segment.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram-sdk/vue/connectors/ConnectorsOrthoSegments-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram-sdk/vue/connectors/ConnectorsOrthoSegments-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/vue/connectors/ConnectorsOrthoSegments-cs1" %}

### Straight segment editing

End point of each straight segment is represented by a thumb that enables to edit the segment.
Any number of new segments can be inserted into a straight line by clicking when Shift and Ctrl keys are pressed (Ctrl+Shift+Click).
Straight segments can be removed by clicking the segment end point when Ctrl and Shift keys are pressed (Ctrl+Shift+Click). You can also add/remove segments by using the [`editSegment`](https://ej2.syncfusion.com/vue/documentation/api/diagram/index-default#editsegment) method of diagram.

The following example shows how to add segments at runtime for the straight connector.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/diagram-sdk/vue/connectors/StraightSegEdit-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/diagram-sdk/vue/connectors/StraightSegEdit-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/vue/connectors/StraightSegEdit-cs1" %}

![Straight Segment editing GIF](../../images/StraightSegEdit.gif)