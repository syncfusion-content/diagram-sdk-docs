---
layout: post
title: Swimlane Palette in JavaScript Diagram | Syncfusion®
description: Add preconfigured Swimlanes and phases to the symbol palette in the Syncfusion® JavaScript Diagram for drag-and-drop reuse.
platform: diagram-sdk
control: Swim lane in symbol palette 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Swimlane Palette in JavaScript Diagram

   Diagram provides the support to add swimlane and phases to symbol palette. The following code sample illustrate how to add swimlane and phases to palette.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/swimlane-cs15/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/swimlane-cs15/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/swimlane-cs15" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/swimlane-cs15/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/swimlane-cs15/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/swimlane-cs15" %}
{% endif %}

### Drag and drop swimlane to palette

* The drag and drop support for swimlane shapes has been provided.
* Horizontal lanes can be added to vertical swimlanes, and vice versa.
* The phase will only drop on swimlane shape with same orientation. The following image illustrates how to drag symbol from palette.
![Drag Symbol from Palette](../images/swimlane-drag-dropGif.gif)
