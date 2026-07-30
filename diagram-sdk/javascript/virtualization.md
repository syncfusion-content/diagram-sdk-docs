---
layout: post
title: Virtualization in JavaScript Diagram control | Syncfusion®
description: Learn here all about Virtualization in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Virtualization 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Virtualization in JavaScript Diagram control

Virtualization is a technique to optimize the performance of diagrams, especially when working with larger diagrams

## Virtualization in Diagram

Virtualization optimizes the diagram performance by loading only the diagramming objects within the visible area, or ViewPort, of the Scroll Viewer. This means that only the nodes and connectors that are currently in view are loaded, while the remaining objects are loaded dynamically as they come into view.

This feature significantly enhances performance, especially when working with diagrams containing a large number of nodes and connectors. By reducing the number of objects that need to be processed at any given time, virtualization ensures smoother interactions, such as loading and dragging items within the diagram.

To enable virtualization in a diagram, you need to include the virtualization constraint in the diagram's constraints. For more information, refer to the  [`diagram constraints`](./constraints#diagram-constraints).

The following code example demonstrates how to enable Virtualization mode in the diagram:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/virtualization-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/virtualization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/virtualization-cs1" %}