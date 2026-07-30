---
layout: post
title: Symbol Palette Events in TypeScript Diagram control | Syncfusion®
description: Learn here all about Symbol palette in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Symbol palette 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Symbol Palette events in TypeScript Diagram control

There are some events which will get triggered while interacting with the symbol palette. They are explained below.

## DragEnter event 

[`DragEnter`](https://ej2.syncfusion.com/documentation/api/diagram/iDragEnterEventArgs) event triggers when the shape enters the diagram surface while dragging it from symbol palette. You can customize the style of the dragged shape using this event. This allows for dynamic styling changes based on the diagram's context.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs19/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs19/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs19" %}

## DragLeave event

[`DragLeave`](https://ej2.syncfusion.com/documentation/api/diagram/iDragLeaveEventArgs) event occurs when a shape leaves the diagram surface after being dragged inside but not dropped. This can be useful for resetting styles or handling any clean-up tasks when a shape is not intended to be placed on the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs20/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs20/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs20" %}

## DragOver event

[`DragOver`](https://ej2.syncfusion.com/documentation/api/diagram/iDragOverEventArgs) event triggered when a shape is dragged over diagram while being moved from the symbol palette. This event can be used to provide visual feedback or to determine if the current drop target is valid.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs21/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs21/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs21" %}

## Drop event

[`Drop`](https://ej2.syncfusion.com/documentation/api/diagram/idropeventargs) event triggered when a shape is dropped onto the diagram surface. This event is useful for customizing the shape's appearance and properties after it is dropped.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs22/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs22/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs22" %}

## PaletteExpanding event

[`PaletteExpanding`](https://ej2.syncfusion.com/documentation/api/diagram/iPaletteExpandArgs) event triggered when the palette expanded / collapsed.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs23/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs23/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs23" %}

## PaletteSelectionChange event

[`PaletteSelectionChange`](https://ej2.syncfusion.com/documentation/api/diagram/iPaletteSelectionChangeArgs) event triggered after the selection changes in the symbol palette. This event can be used to enable/disable functionality based on the selected symbol.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs24/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs24/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs24" %}

