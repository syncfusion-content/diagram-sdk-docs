---
layout: post
title: Page settings in JavaScript Diagram control | Syncfusion®
description: Learn here all about Page settings in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Page settings 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Page settings in JavaScript Diagram control

Page settings allow customization of the appearance, size, and orientation of the diagram page.

## Page size and appearance

The [`width`](../api/diagram/pageSettingsModel#width) and [`height`](../api/diagram/pageSettingsModel#height) properties in page settings determine the size of the page. Additionally, the [`background`](../api/diagram/backgroundModel) property allows customization of the page's appearance. The [`color`](../api/diagram/backgroundModel#color) property of background is used to define the color of the page. The [`margin`](../api/diagram/marginModel) property defines the page margins.

To explore those properties, refer to [`Page Settings`](../api/diagram/pageSettingsModel).

The following example shows the customization of page settings.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs1" %}
{% endif %}

## Set background image

A background image can be attached to the page by using the [`source`](../api/diagram/backgroundModel#source) property of [`background`](../api/diagram/backgroundModel). The [`scale`](../api/diagram/backgroundModel#scale) property adjusts how the background image stretches, while the [`align`](../api/diagram/backgroundModel#align) property aligns the image within the diagram page.


The following code illustrates how to set background image to the diagram page.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs2" %}
{% endif %}

## Page orientation

There are two types of page orientations:

- Landscape
- Portrait

Depending on the [`orientation`](../api/diagram/pagesettingsmodel#orientation) selected, the width and height properties are adjusted accordingly. By default, the `orientation` is set to **Landscape**. In the following example, the height and width properties of `pageSettings` are swapped when setting the `orientation` to **Portrait**.


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs5" %}
{% endif %}


## Multiple page and page breaks

When multiple pages are enabled, the page size dynamically adjusts in multiples of the specified width and height, ensuring the entire diagram fits within the page boundaries. Page breaks serve as visual guides indicating how pages are split.

The [`multiplePage`](../api/diagram/pageSettingsModel#multiplepage) and [`showPageBreak`](../api/diagram/pageSettingsModel#showpagebreaks) properties in page settings control the ability to enable multiple pages and display page break lines, respectively.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs3" %}
{% endif %}

The color of the page break lines can be customized by overriding the styles of the .e-diagram-page-break class. For more details refer to [`CSS customization`](./style#customizing-the-page-breaks)

## Boundary constraints

The diagram supports restricting or customizing the interactive region where elements cannot be dragged, resized, or rotated. You can achieve this using the [`boundaryConstraints`](../api/diagram/boundaryConstraints) property in page settings. 

There are three types of boundary constraints. They are:
- Infinity
- Diagram
- Page
To explore these constraints further, refer to [`Boundary Constraints`](./constraints#boundary-constraints).

Below is an example illustrating how to define boundary constraints within the diagram:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs4" %}
{% endif %}

## Fit options

The [`fitOptions`](../api/diagram/fitOptionsModel) in page settings control how diagram content is fitted within the diagram page. The [`canFit`](../api/diagram/fitOptionsModel#canfit) property within fitOptions centers the content within the viewport during diagram rendering. Additionally, the [`region`](../api/diagram/diagramRegions) property specifies whether to fit the page or the content to the center of the viewport. Choosing CustomBounds for the [`region`](../api/diagram/diagramRegions) allows fitting custom bounds within the diagram by defining them in the [`customBounds`](../api/diagram/fitOptionsModel#custombounds) property of fitOptions. The [`canZoomIn`](../api/diagram/fitOptionsModel#canzoomin) property enables zooming in to fit smaller content within the viewport. Additionally, the [`margin`](../api/diagram/marginModel) property defines the space around the fitted content within the viewport, while the [`mode`](../api/diagram/fitModes) property sets the fitting mode, typically defaulting to **Page** but also offering options like `Width` and `Height` for specific dimension constraints.

The following example demonstrates how fitOptions are utilized in diagram page settings.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/pagesettings-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/pagesettings-cs6" %}
{% endif %}