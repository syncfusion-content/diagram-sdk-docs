---
layout: post
title: Ports positioning in JavaScript Diagram control | Syncfusion®
description: Learn here all about Ports in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Ports 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Positioning node's port

Diagram allows you to customize the position of the port efficiently. Port can be aligned relative to the node boundaries. It has Margin, Offset, Horizontal, and Vertical alignment settings.

## Port offset

The [`offset`](../../api/diagram/pointportmodel#offset) property is used to align the ports based on fractions. 0 represents top/left corner, 1 represents bottom/right corner, and 0.5 represents half of width/height.

The following table shows the position of port within the shape.

| Offset values | Output |
| -------- | -------- |
| (0,0) | ![Port offset - 0,0](../images/port0-0.png) |
| (0,0.5) | ![Port offset - 0,0.5](../images/port0-0.5.png) |
| (0,1) | ![Port offset - 0,1](../images/port0-1.png) |
| (0.5,0) | ![Port offset - 0.5,0](../images/port0.5-0.png) |
| (0.5,0.5) | ![Port offset 0.5,0.5](../images/port0.5-0.5.png) |
| (0.5,1) | ![Port offset - 0.5,1](../images/port0.5-1.png) |
| (1,0) | ![Port offset - 1,0](../images/port1-0.png) |
| (1,0.5) | ![Port offset - 1,0.5](../images/port1-0.5.png) |
| (1,1) | ![Port offset - 1,1](../images/port1-1.png) |

## Horizontal and vertical alignment

The [`horizontalAlignment`](../../api/diagram/horizontalAlignment) property of the port is used to set how the port is horizontally aligned at the port position. The [`verticalAlignment`](../../api/diagram/verticalAlignment) property is used to set how the port is vertically aligned at the port position.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/ports-horVerAlign/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-horVerAlign/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-horVerAlign" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ports-horVerAlign/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-horVerAlign/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-horVerAlign" %}

{% endif %}

The following table shows all the possible alignments visually with offset (0, 0).

| Horizontal Alignment | Vertical Alignment | Output with Offset(0,0) |
| -------- | -------- | -------- |
| Left | Top | ![Left Top Position](../images/port-in-lefttop-position.png) |
| Center | Top | ![Center Top Position](../images/port-in-centertop-position.png) |
| Right | Top |  ![Right Top Position](../images/port-in-righttop-position.png) |
| Left | Center | ![Left Center Position](../images/port-in-leftcenter-position.png) |
| Center | Center| ![Center Center Position](../images/port-in-centercenter-position.png) |
| Right | Center | ![Right Center Position](../images/port-in-rightcenter-position.png) |
| Left | Bottom | ![Left Bottom Position](../images/port-in-leftbottom-position.png) |
| Center | Bottom | ![Center Bottom Position](../images/port-in-centerbottom-position.png) |
| Right |Bottom |![Right Bottom Position](../images/port-in-rightbottom-position.png) |



## Margin for port

[`Margin`](../../api/diagram/marginModel) is an absolute value used to add some blank space to any one of its four sides. The ports can be displaced with the margin property. The following code example explains how to align a port based on its offset and margin values.


{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/ports-margin/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-margin/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-margin" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ports-margin/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-margin/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-margin" %}

{% endif %}

## See also

* [How to interact with the ports](./ports-interaction)

* [How to customize the ports](./ports-appearance)

* [How to create connector port](./ports-connector-port)