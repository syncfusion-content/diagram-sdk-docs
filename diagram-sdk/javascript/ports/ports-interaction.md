---
layout: post
title: Ports interaction in JavaScript Diagram control | Syncfusion®
description: Learn here all about Ports in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Ports 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Ports interaction in JavaScript Diagram control | Syncfusion®

## Draw connector from port

The port can be used to create connector by enabling `Draw` constraints to the [`constraints`](../../api/diagram/portconstraints) property. By default, the connector segment type is set to **Orthogonal**.

The following code explains how to draw the connector by using the port constraints.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-interact1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-interact1" %}

{% endif %}

### Draw different connector types from port

You can change the default connector type while drawing the connector from the port by setting the specific connector type in connector defaults. This enables the drawing of various connector types from the port, including:

* Straight
* Bezier
* Orthogonal

The following code explains how to draw different connectors by using the port constraints.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-interact2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-interact2" %}

{% endif %}

## Port drag

The port drag feature allows users to click and drag a port using the mouse. This functionality can be enabled by setting the port constraints to **Drag**. 

The following code explains how to enable port drag.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-interact3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-interact3" %}

{% endif %}

## Automatic Port Creation

The Diagram component allows you to dynamically create ports on nodes or connectors by clicking and dragging the mouse while holding the Control (Ctrl) key. This feature is disabled by default and can be enabled by using the `DiagramConstraints.AutomaticPortCreation` constraint.

You can also remove a port using the same Ctrl + Click interaction, but only if the port is not currently connected to any connector.

The following example shows how to enable automatic port creation:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/automaticPortCreation/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/automaticPortCreation/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/automaticPortCreation" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/automaticPortCreation/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/automaticPortCreation/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/automaticPortCreation" %}

{% endif %}

## Port tooltip

The port tooltip feature allows a tooltip to be displayed when hovering over a port. This functionality can be enabled by setting the port constraints to **Tooltip**.

The following code explains how to enable port tooltip.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-interact4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-interact4" %}

{% endif %}

## Events

There are several events that can be triggered while interacting with ports. These events are listed in the table below.

| Event| Description|
|----|----|
| [`Click`](../../api/diagram/iClickEventArgs)   | Triggers when the port is clicked. |
| [`Element Draw`](../../api/diagram/iElementDrawEventArgs)  | Triggers when drawing a connector from the port. |
| [`Position Change`](../../api/diagram/iDraggingEventArgs)  | Triggers when the port is dragged. |
| [`Connection Change`](../../api/diagram/iConnectionChangeEventArgs) | Triggers when a connector is connected or disconnected from the port|

The following example shows how to get these events in diagram.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-interact5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ports-interact5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ports-interact5" %}

{% endif %}



## See also

* [How to customize the ports](./ports-appearance)

* [How to set the position of the port](./ports-positioning)

* [How to create connector port](./ports-connector-port)
