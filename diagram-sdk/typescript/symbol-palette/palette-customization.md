---
layout: post
title: Palette customization in TypeScript Diagram control | Syncfusion®
description: Learn here how to customize symbol palette in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Symbol palette 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Symbol Palette customization in TypeScript Diagram control

## Customize the palette properties

Palettes can be annotated with its header texts.

The [`title`](https://ej2.syncfusion.com/documentation/api/diagram/palette#title) property is displayed as the header text of the palette.

The [`expanded`](https://ej2.syncfusion.com/documentation/api/diagram/palette#expanded) property allows the palette items to be expanded or collapsed.

The [`height`](https://ej2.syncfusion.com/documentation/api/diagram/palette#height) property sets the height of the symbol group / palette.

The [`iconCss`](https://ej2.syncfusion.com/documentation/api/diagram/palette#iconcss) property sets the icon to be rendered with the title.

The following example demonstrates how to customize the palette properties.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-header/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-header/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-header" %}

## Animation

The expand and collapse operation of symbol palette can be animated by utilizing the [`enableAnimation`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#enableanimation) property of symbol palette. The following example demonstrates, how to enable and disable animation for symbol palette.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs12/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs12/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs12" %}

## Description for symbols

The [`description`](https://ej2.syncfusion.com/documentation/api/diagram/symbolDescription) property defines the descriptive text that appears beneath each symbol in the palette. This text provides additional information about the symbol's purpose or usage within the diagramming context. The description can be dynamically retrieved and defined using the [`getSymbolInfo`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#getsymbolinfo) property, allowing information to assist users in understanding the function or meaning of each symbol.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs2" %}

### Text wrapping and text overflow

The descriptive text that appears beneath each symbol can vary in length. In cases where the text might overlap neighboring symbols in the palette, text wrapping is employed. Text wrapping is controlled using the wrap property of symbolInfo, which supports three modes: `Wrap`, `NoWrap`, `WrapWithOverflow`. By default, text wrapping is set to '`Wrap`'.

Additionally, to handle overflowing text, the overflow property can be used. By default, textOverflow is set to '`Ellipsis`', which truncates overflowing text with an ellipsis (...).

The following example demonstrates how text wrapping and text overflow are applied based on the symbol ID:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-wrap/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-wrap/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-wrap" %}

### Appearance of symbol description

The appearance of a symbol description in the palette can be customized by changing its [`color`](https://ej2.syncfusion.com/documentation/api/diagram/symbolDescription#color), [`fill`](https://ej2.syncfusion.com/documentation/api/diagram/symbolDescription#fill), [`fontSize`](https://ej2.syncfusion.com/documentation/api/diagram/symbolDescription#fontsize), [`fontFamily`](https://ej2.syncfusion.com/documentation/api/diagram/symbolDescription#fontfamily), [`bold`](https://ej2.syncfusion.com/documentation/api/diagram/symbolDescription#bold), [`italic`](https://ej2.syncfusion.com/documentation/api/diagram/symbolDescription#italic), [`textDecoration`](https://ej2.syncfusion.com/documentation/api/diagram/textdecoration) and [`margin`](https://ej2.syncfusion.com/documentation/api/diagram/symbolDescription#margin)

The following code example shows how to customize the symbol description.

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs9" %}


## Symbol size and symbol margin

The size of the individual symbol can be customized. The [`symbolWidth`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#symbolwidth) and  [`symbolHeight`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#symbolheight) properties of node enables you to define the size of the symbols. 

The [`symbolMargin`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#symbolmargin) defines the space between the shape and its outer boundary. By setting the symbol margin with specific values for left, right, top, and bottom, you can create consistent spacing on all sides around the shape. This ensures there is adequate padding between the shape and its outer boundary.

The following code example illustrates how to set symbol size and symbol margin for the symbol palette.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs5" %}

## Symbol preview

The symbol preview size of the palette items can be customized using [`symbolPreview`](https://ej2.syncfusion.com/documentation/api/diagram/symbolpreviewmodel) property of symbol palette.The [`width`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPreviewModel#width) and [`height`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPreviewModel#height) properties of `symbolPreview` allow you to define the preview size for all the symbol palette items. The The [`offset`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPreviewModel#offset) property specifies the position of the dragging helper relative to the mouse cursor.

The following code example illustrates how to change the preview size of a palette item.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs6" %}

## Symbol drag size

The [`symbolDragSize`](https://ej2.syncfusion.com/documentation/api/diagram/symboldragsizemodel) property sets the dimensions (height and width) of a shape while it is being dragged from the palette to the diagram canvas. The following code illustrates how to set `symbolDragSize` for the symbol palette.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-dragSize/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-dragSize/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-dragSize" %}

N> If the size of the symbol is not defined, the default size will be determined based on its shape.

## Expand Mode

You can customize whether to expand all the palettes of symbol palette at a time or to expand only one palette at a time. This customization can be done using the [`expandMode`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#expandmode) property of symbol palette.

You can customize whether to expand all the palettes of the symbol palette at a time or to expand only one palette at a time. This customization can be done using the [`expandMode`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#expandmode) property of the symbol palette. 

The following example demonstrates how to set the `expandMode` property to control the expansion behavior of the palettes:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-expandMode/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-expandMode/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-expandMode" %}


### Restrict expand/collapse of the palette

The symbol palette panel can be restricted from expanding. When we click on the expand icon of the palette, the [paletteExpanding](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#paletteexpanding) event is triggered. In this event, we can determine whether the palette's panel should be expanded or collapsed by utilizing the `cancel` argument of the event. By default, the panel is expanded. This restriction can be applied to each palette in the symbol palette as desired.

In the following code example, the basic shapes palette is restricted from expanding, and the flow shapes palette is restricted from collapsing, whereas the swimlane shapes palette can be expanded or collapsed:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs3" %}

## Tooltip for symbols in symbol palette

The Symbol palette supports displaying tooltips when mouse hovers over the symbols. You can customize the tooltip for each symbol in the symbol palette.

### Default tooltip for symbols
When hovering over symbols in the symbol palette, the default tooltip displays the symbol's ID.
Refer to the image below for an illustration of the tooltip behavior in the symbol palette.


![SymmbolPaletteTooltip](../images/symbol-palatte-tooltip.gif)

### Custom tooltip for symbols

To customize the tooltips for symbols in the symbol palette, assign a custom tooltip to the [`content`](https://ej2.syncfusion.com/documentation/api/diagram/diagramTooltipModel#content) property of [`tooltip`](https://ej2.syncfusion.com/documentation/api/diagram/diagramtooltipmodel) for each symbol. Once you define the custom tooltip, enable the [`Tooltip`](https://ej2.syncfusion.com/documentation/api/diagram/nodeConstraints) constraints for each symbol to ensure the tooltips are displayed when users hover over them.

The code provided below demonstrates how to define tooltip content for symbols within a symbol palette.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs8" %}

### How to enable or disable the default tooltip for shapes in the Symbol palette

By default, the symbol ID is displayed as a tooltip when hovering over a symbol in the Symbol Palette. To disable this default tooltip, you can use the [`showTooltip`](https://ej2.syncfusion.com/documentation/api/diagram/symbolinfo#showtooltip) property within the [`getSymbolInfo`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#getsymbolinfo) method. The `showTooltip` property is set to **true** by default, which enables the tooltip.

The following example demonstrates how to configure selective tooltip display:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs25/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs25/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs25" %}

N> This property is effective only when tooltip constraints are disabled for the symbol palette element.

### How to provide different tooltip for Symbol palette and diagram elements.

To differentiate the tooltips between symbols in the symbol palette and the dropped nodes, utilize the dragEnter event. In the symbol palette, you can define tooltips for the symbols. When a symbol is dragged from the symbol palette and enters the diagram canvas, the [`dragEnter`](https://ej2.syncfusion.com/documentation/api/diagram/iDragEnterEventArgs) event is triggered. Within this event, you can define a new tooltip for the dropped node. By assigning custom tooltip content to the node.

The following code example demonstrates how to define different tooltips for the same symbol in the symbol palette and for the dropped node in the diagram canvas.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs10/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs10/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs10" %}

The following image illustrates the differentiation of tooltips displayed in the Symbol Palette and the Diagram.

![SymmbolPaletteTooltip](../images/different-tooltip.gif)

The following code snippet will demonstrate how to define two different tooltip for symbol in the symbol palette and dropped node in the diagram canvas.

## Localization

To localize the symbol palette search box, we need to define the [`locale`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#locale) property of the symbol palette with our preferred culture. In the example below, we use **de-DE**, which is the locale code for German as used in Germany.

The following code shows how to localize symbol palette.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/locale-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/locale-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/locale-cs2" %}

## Restrict symbol dragging from palette

You can restrict the symbols getting dragged from the symbol palette by setting the [`allowDrag`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#allowdrag) property of symbol palette as false. By default, the allowDrag is set as **true**.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs11/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs11/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs11" %}


## Search symbol

The diagram provides support for enabling the search option in the palette. The [`enableSearch`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#enablesearch) property of the palette is used to show or hide the search textbox in the palette. You can search for symbols in the palette by entering the symbol ID (e.g., “rectangle”) and search keywords into the search text box. The symbols are retrieved by matching the value of the ID property with the string entered in the search textbox.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-search/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-search/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-search" %}

## Ignore symbols on search

The [`ignoreSymbolsOnSearch`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#ignoresymbolsonsearch) property allows you to specify which symbols should be excluded from search results within the symbol palette. By setting this property, you can control the visibility of specific symbols during a search operation. This feature is useful for hiding certain symbols that you don't want to be shown via search.

In the following example, we ignored the symbol with the ID of 'plus', so it will not appear in the search results.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-ignoreSearch/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-ignoreSearch/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-ignoreSearch" %}

## Filter search

You can filter the search results based on your specific requirements. To achieve this, customize the [`filterSymbols`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#filtersymbols) method of the symbol palette according to your needs. In the following example, we filter the results to display only flow shapes in the search palette.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs13/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs13/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs13" %}


N> The diagram provides support to cancel the drag and drop operation from the symbol palette to the diagram when the ESC key is pressed

## See Also

* [How to add the symbol to the diagram](../nodes)