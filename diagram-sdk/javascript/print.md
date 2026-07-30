---
layout: post
title: Print in JavaScript Diagram control | Syncfusion®
description: Learn here all about Export in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Print 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Print in JavaScript Diagram control

The [`print`](../api/diagram#print) method helps to print the diagram as image.

```JavaScript

 let options: IPrintOptions = {};
 diagram.print(options);

```
N> To Print diagram you need to inject `PrintAndExport` in the diagram.

## Print Options

The diagram can be customized while printing using the following properties of [`printOptions`](../api/diagram/iPrintOptions).

The available print options are listed in the table below.

| Name | Type | Description|
|-------- | -------- | -------- |
| region | enum | Sets the region of the diagram to be printed. |
| margin | object | Sets the margin of the page to be printed. |
| stretch| enum | Resizes the diagram content to fill its allocated space and printed.|
| multiplePage | boolean | Prints the diagram into multiple pages. |
| pageWidth | number | Sets the page width of the diagram while printing the diagram into multiple pages. |
| pageHeight| number | Sets the page height of the diagram while printing the diagram into multiple pages.|
| pageOrientation | enum | Sets the orientation of the page. |

### Region

Printing particular region of diagram is possible by using the [`region`](../api/diagram/iPrintOptions#region) property of the [`printOptions`](../api/diagram/iPrintOptions).

The following code example illustrates how to print the diagram based on region.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/print-cs-1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/print-cs-1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/print-cs-1" %}

### Multiple page

Printing a diagram across multiple pages is possible by setting the [`multiplePage`](../api/diagram/iPrintOptions#multiplepage) property of `printOptions` to true.

The following code example demonstrates how to set multiplePage to true:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/print-cs-2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/print-cs-2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/print-cs-2" %}

### Margin

The margin for the print region can be set using the [`margin`](../api/diagram/iPrintOptions#margin) property of the `printOptions`

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/print-cs-4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/print-cs-4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/print-cs-4" %}

### Page width and Page height

The [`pageWidth`](../api/diagram/iPrintOptions#pageheight) and [`pageHeight`](../api/diagram/iPrintOptions#pagewidth) property of `printOptions` is used to set the size of the printing image. The following example demonstrates how to set the pageWidth and pageHeight.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/print-cs-3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/print-cs-3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/print-cs-3" %}

### Page Orientation

[`pageOrientation`](../api/diagram/iPrintOptions#pageorientation) of `printOptions` is used to set the orientation of the page to be printed.

* Landscape - Display with page Width is more than the page Height.
* Portrait - Display with page Height is more than the page width.

The following example shows how to set pageOrientation for the printOptions.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/print-cs-5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/print-cs-5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/print-cs-5" %}


## Limitations


Currently, printing diagram with native and HTML nodes is not supported. To overcome this limitation, we make use of the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> PDF library. This library incorporates the Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> HTML converter, which employs the advanced Blink rendering engine. This converter seamlessly transforms HTML content into images. Refer to [`export Html-and-Native node`](https://support.syncfusion.com/kb/article/14031/how-to-export-html-node-using-blink-rendering-in-javascript-diagram) kb for more information.


## See Also

* [How to Print multiple diagrams in single click](https://support.syncfusion.com/kb/article/15143/how-to-print-multiple-diagrams-in-a-single-shot-in-javascript)