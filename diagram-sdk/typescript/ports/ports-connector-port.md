---
layout: post
title: Connector ports in TypeScript Diagram control | Syncfusion®
description: Learn here all about Ports in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Ports 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

## Create connector port

The creation of connector ports is similar to the creation of node ports. To create connector ports, you need to define a port collection and assign it to the connector's ports property. 

The following code example shows how to create connector port.



{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/ports-conPort1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/ports-conPort1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/ports-conPort1" %}




## Port alignment

The port can be aligned before, after, or at the center of the connector by utilizing the [`alignment`](https://ej2.syncfusion.com/documentation/api/diagram/portAlignment) property. By default, the port alignment is set to **center**.

The following code example shows how to set alignment to the connector port.



{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/ports-conPort3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/ports-conPort3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/ports-conPort3" %}





## Port displacement

The connector port displacement allows users to adjust the position of ports relative to the connector. By setting displacement offsets, ports can be moved to precise locations along the connector.

The following code example shows how to set displacement to the connector port.



{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/ports-conPort2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/ports-conPort2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/ports-conPort2" %}




N> The displacement will work only if we set alignment as after or before.

## Connector port connection

To establish a connection between connectors, connector ports are utilized. For this connection, the `sourcePortID` or `targetPortID` should be set to the ID of the respective port on the connector.

The following code example explains how to connect connector to the connector port.




{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/ports-connect-conPort/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/ports-connect-conPort/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/ports-connect-conPort" %}



## See also

* [How to customize the ports](./ports-appearance)

* [How to set the position of the port](./ports-positioning)

* [How to interact with the ports](./ports-interaction)