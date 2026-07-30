---
layout: post
title: Symbol palette in TypeScript Diagram control | Syncfusion®
description: Learn here all about Symbol Palette in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more
platform: diagram-sdk
control: Symbol palette 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Symbol palette in TypeScript Diagram control

The [`symbolPalette`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel) is a gallery of reusable symbols and diagram elements that can be dragged and dropped on the diagram surface multiple times.

<!-- markdownlint-disable MD033 -->
<!-- markdownlint-disable MD010 -->

## Create symbol palette

The [`width`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#width) and [`height`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#height) properties of the symbol palette allows you to define the size of the symbol palette.

```javascript

ej.diagrams.Diagram.Inject(ej.diagrams.SymbolPalette);
//Initializes the symbol palette
var palette = new ej.diagrams.SymbolPalette({
    width: '100%',
    height: '700px',
},'#element');

```

## Add nodes and palettes to SymbolPalette

The collection of predefined symbols can be added to palettes using the [`symbols`](https://ej2.syncfusion.com/documentation/api/diagram/paletteModel#symbols) property.

A palette displays a group of related symbols and textually annotates the group with its header. A [`Palettes`](https://ej2.syncfusion.com/documentation/api/diagram/paletteModel) can be added as a collection of symbol groups.

To initialize a palette, define a JSON object with the unique property [`ID`](https://ej2.syncfusion.com/documentation/api/diagram/paletteModel#id). Additionally, include the symbols property, which contains an array of different symbols.

The following code example illustrates how to define symbols in a palette and how to add them to the symbol palette:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs1" %}

## Add connectors in symbol palette

Connectors can be added to the symbol palette by defining them in the symbols array of the palette. 
The following example shows how to render connectors in the symbol palette:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-con/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-con/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-con" %}

## Add group nodes in symbol palette

The symbol palette supports adding group nodes. To add group nodes to the palette, the child nodes should be defined first, followed by the parent node. Refer to the following code to see how to render group nodes in the symbol palette:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-group/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-group/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-group" %}

## Template-based symbols

### HTML and SVG node with content template

The Symbol Palette supports the creation of complex nodes using HTML or SVG templates. This allows developers to incorporate rich, interactive, and visually engaging content within diagram elements.

* For HTML content, set the node's `shape.type` property to **HTML**.
* For SVG content, set the `shape.type` property to **Native**.

Templates can be defined either as strings or functions and assigned to the node's `content` property. Function-based templates offer the flexibility to generate dynamic content based on node-specific properties or external data sources.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-contentFnTemplate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-contentFnTemplate/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-contentFnTemplate" %}

## Drag and drop symbols from palette to diagram

To drag and drop symbols from the palette to the diagram canvas, mousedown on the desired symbol in the palette, drag it to the desired location on the diagram canvas, and release the mouse button to drop it.

![Drag and drop symbols](../images/symbol-palette-drag-drop.gif) 

## Add symbols to palette at runtime

Symbols can be added to palette at runtime by using public method, [`addPaletteItem`](https://ej2.syncfusion.com/documentation/api/diagram/palette). The following example shows how to add shapes to the palette at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-add/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-add/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-add" %}

## Remove symbols from palette at runtime

Symbols can be removed from palette at runtime by using public method, [`removePaletteItem`](https://ej2.syncfusion.com/documentation/api/diagram/palette). The following example shows how to remove shapes from the palette at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-remove/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-remove/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-remove" %}

## Symbol defaults

While adding more symbols such as nodes and connectors to the palette, you can define the default settings for these objects using the [`getNodeDefaults`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#getnodedefaults) and the [`getConnectorDefaults`](https://ej2.syncfusion.com/documentation/api/diagram/symbolPaletteModel#getconnectordefaults) properties of the diagram. These properties allow you to specify default configurations for nodes and connectors, ensuring consistency and saving time when adding multiple symbols. By setting these properties, you can predefine attributes such as size, color, shape for nodes and line style, thickness, for connectors. 

In the following example, the fill color of node and target decorator shape of connector is defined in getNodeDefaults and getConnectorDefaults respectively.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs7" %}

## Add palettes at runtime

You can dynamically add palettes to the symbol palette at runtime to enhance flexibility and customization. This allows you to introduce new groups of symbols as needed without having to reload or reinitialize the diagram. The `addPalettes` method of the symbol palette enables you to create and configure new palettes programmatically. This method takes parameters that define the palette's properties, such as the palette `ID`, `title`, and the `symbols` it contains.

Follow the example below to see how to add a palette at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-addPalette/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-addPalette/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-addPalette" %}


## Remove palettes at runtime

You can remove palettes from the symbol palette at runtime. There are two ways to do this:

* Use the `removePalette` method to remove a single palette by its ID.
* Use the `removePalettes` method to remove multiple palettes by passing an array of palette IDs as a parameter.

Follow the example below to see how to remove palettes at runtime.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-removePalette/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-removePalette/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-removePalette" %}


## Stretch the symbols into the palette

The [`fit`](https://ej2.syncfusion.com/documentation/api/diagram/symbolInfo#fit) property defines whether the symbol has to be fit inside the size, that is defined by the symbol palette. For example, when you resize the rectangle in the symbol, ratio of the rectangle size has to be maintained rather changing into square shape. The following code example illustrates how to customize the symbol size.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/symbol-palette-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/symbol-palette-cs4" %}


## Refresh symbol palette

The `refresh` method allows you to refresh the symbols dynamically in the SymbolPalette.

```ts
//To refresh the symbols in symbol palette
symbolPalette.refresh();

```

