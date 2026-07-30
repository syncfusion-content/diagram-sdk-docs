---
layout: post
title: Multiple segments in TypeScript Diagram control | Syncfusion®
description: Learn here how to create connectors with multiple segments in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Multiple segments
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Create multiple segments

Multiple segments can be defined one after another. To create a connector with multiple segments, define and add the segments to the `segments` collection. The following code example illustrates how to create a connector with multiple segments.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/connectors-multipleSeg/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/connectors-multipleSeg/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/connectors-multipleSeg" %}

## Undo/Redo support for connector segments

The Diagram control provides comprehensive undo and redo functionality for all connector segment operations. This includes reversible actions such as dragging, resizing, and rotating source or target nodes, as well as modifying segment points and endpoints.

Key undo/redo capabilities include:

* Modifying and adjusting segment points.
* Changing connector endpoints between nodes or ports.
* Performing node operations that affect connected segments.
* Adding, removing, or reordering segments.

This functionality ensures consistent editing behavior across all connector types and interactions, enabling users to experiment with complex routing configurations while retaining the ability to revert changes.

The following example demonstrates undo and redo functionality for connector segments:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/connectors-segundo/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/connectors-segundo/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/connectors-segundo" %}