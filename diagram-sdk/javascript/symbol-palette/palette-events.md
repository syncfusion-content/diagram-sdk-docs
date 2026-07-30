---
layout: post
title: Symbol Palette Events in JavaScript Diagram control | Syncfusion®
description: Learn here all about Symbol palette in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Symbol palette 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Symbol Palette events in JavaScript Diagram control

There are some events which will get triggered while interacting with the symbol palette. They are explained below.

## DragEnter event 

[`DragEnter`](../../api/diagram/iDragEnterEventArgs) event triggers when the shape enters the diagram surface while dragging it from symbol palette. You can customize the style of the dragged shape using this event. This allows for dynamic styling changes based on the diagram's context.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs19/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/symbol-palette-cs19" %}

## DragLeave event

[`DragLeave`](../../api/diagram/iDragLeaveEventArgs) event occurs when a shape leaves the diagram surface after being dragged inside but not dropped. This can be useful for resetting styles or handling any clean-up tasks when a shape is not intended to be placed on the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs20/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/symbol-palette-cs20" %}

## DragOver event

[`DragOver`](../../api/diagram/iDragOverEventArgs) event triggered when a shape is dragged over diagram while being moved from the symbol palette. This event can be used to provide visual feedback or to determine if the current drop target is valid.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs21/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/symbol-palette-cs21" %}

## Drop event

[`Drop`](../../api/diagram/idropeventargs) event triggered when a shape is dropped onto the diagram surface. This event is useful for customizing the shape's appearance and properties after it is dropped.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs22/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/symbol-palette-cs22" %}

## PaletteExpanding event

[`PaletteExpanding`](../../api/diagram/iPaletteExpandArgs) event triggered when the palette expanded / collapsed.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs23/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/symbol-palette-cs23" %}

## PaletteSelectionChange event

[`PaletteSelectionChange`](../../api/diagram/iPaletteSelectionChangeArgs) event triggered after the selection changes in the symbol palette. This event can be used to enable/disable functionality based on the selected symbol.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs24/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/symbol-palette-cs24/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/symbol-palette-cs24" %}

