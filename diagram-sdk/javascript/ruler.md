---
layout: post
title: Ruler in JavaScript Diagram | Syncfusion®
description: Show horizontal and vertical rulers with a position indicator in the Syncfusion® JavaScript Diagram using the rulerSettings property.
platform: diagram-sdk
control: Ruler
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Ruler in JavaScript Diagram

The ruler provides horizontal and vertical guides for measuring in the JavaScript Diagram control. It can be used to measure diagram objects, indicate positions, and align diagram elements, making it especially useful for creating scale models.The ruler also includes a position indicator that displays the precise location of the mouse cursor on the diagram canvas, with the default color of the position indicator marker being red.

## Define rulers

The [`rulerSettings`](../api/diagram/rulerSettings) property of diagram is used to control the visibility and appearance of the ruler in the diagram.

The [`showRulers`](../api/diagram/rulerSettings#showrulers) property is used to show or hide the rulers in the diagram.

The following code shows how to add a ruler to the diagram.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ruler-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ruler-cs1" %}
{% endif %}

## Customizing the Ruler

[`horizontalRuler`](../api/diagram/rulerSettings#horizontalruler) and [`verticalRuler`](../api/diagram/rulerSettings#verticalruler) properties of `rulerSettings` are used to customize the rulers appearance in the diagram.

By default, the ruler segments are arranged based on pixel values.

The HorizontalRuler’s [`interval`](../api/diagram/diagramRuler#interval) property defines the spacing between ruler segments, and the [`segmentWidth`](../api/diagram/diagramRuler#segmentwidth) property sets the width of each segment. Similarly, the VerticalRuler’s [`interval`](../api/diagram/diagramRuler#interval) and [`segmentWidth`](../api/diagram/diagramRuler#segmentwidth) properties control the interval and segment width for the vertical ruler.

The HorizontalRuler’s  [`tickAlignment`](../api/diagram/diagramRuler#tickalignment) property aligns the ruler ticks to the left or right side, while the VerticalRuler’s  [`tickAlignment`](../api/diagram/diagramRuler#tickalignment) aligns them to the top or bottom.

The HorizontalRuler’s [`thickness`](../api/diagram/diagramRuler#thickness) property sets the thickness of the horizontal ruler, and the VerticalRuler’s [`thickness`](../api/diagram/diagramRuler#thickness) property sets the thickness of the vertical ruler.

The following code shows how the diagram ruler can be customized.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/customRuler-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/customRuler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/customRuler-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/customRuler-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/customRuler-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/customRuler-cs1" %}
{% endif %}

### Arrange tick

The HorizontalRuler’s [`arrangeTick`](../api/diagram/diagramRuler#arrangetick) and VerticalRuler’s [`arrangeTick`](../api/diagram/diagramRuler#arrangetick) functions allow you to customize the appearance of ruler ticks. These functions are called for each tick rendering.

The following code demonstrates how to use the `arrangeTick` function to customize the tickLength.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ruler-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ruler-cs2" %}
{% endif %}

### Measurement units

The [`measurementUnit`](../api/diagram/rulerSettings#measurementunit) property of `rulerSettings` specifies the unit used to display the ruler values. The ruler supports the following measurement units:

* `Pixel` - Displays ruler values in pixels. This is the default value.
* `Point` - Displays ruler values in points (1 pt = 1/72 inch).
* `Inch` - Displays ruler values in inches (1 in = 96 px).
* `Millimeter` - Displays ruler values in millimeters (1 mm = 3.7795 px).
* `Centimeter` - Displays ruler values in centimeters (1 cm = 37.7953 px).

When interacting with diagram elements such as dragging or resizing, the tooltip also displays measurements in the configured unit.

The following code demonstrates how to configure the ruler measurement unit initially. The `measurementUnit` is set to `Centimeter`, and it applies to both the horizontal and vertical rulers.

{% if page.publishingplatform == "typescript" %}

```ts
import { Diagram } from '@syncfusion/ej2-diagrams';

let diagram: Diagram = new Diagram({
    width: '100%', height: '600px',
    rulerSettings: {
        showRulers: true,
        // Display the ruler values in centimeters.
        measurementUnit: 'Centimeter'
    }
});
diagram.appendTo('#element');
```

{% elsif page.publishingplatform == "javascript" %}

```js
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px',
    rulerSettings: {
        showRulers: true,
        // Display the ruler values in centimeters.
        measurementUnit: 'Centimeter'
    }
});
diagram.appendTo('#element');
```

{% endif %}

The `measurementUnit` property supports runtime updates, instantly refreshing the ruler display when the measurement unit is changed.

The following code shows how to change the measurement unit at runtime. The ruler values are initially displayed in inches, and selecting another unit from the drop-down updates the `measurementUnit` property and refreshes the rulers.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/ruler-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/ruler-cs4" %}

> Changing the measurement unit updates both the horizontal and vertical rulers.

#### Convert unit

The [`convertUnit`](../api/diagram/diagram#convertunit) method of the diagram converts values between different measurement units. It accepts the value to convert, the source unit, and the target unit as parameters, and returns the converted value.

The following code demonstrates how to convert values between units:

{% if page.publishingplatform == "typescript" %}

```ts
// convertUnit - Converts values between different units
let centimeters: number = diagram.convertUnit(300, 'Pixel', 'Centimeter');
let inches: number = diagram.convertUnit(96, 'Pixel', 'Inch');
let pixels: number = diagram.convertUnit(8, 'Centimeter', 'Pixel');
```

{% elsif page.publishingplatform == "javascript" %}

```js
// convertUnit - Converts values between different units
var centimeters = diagram.convertUnit(300, 'Pixel', 'Centimeter');
var inches = diagram.convertUnit(96, 'Pixel', 'Inch');
var pixels = diagram.convertUnit(8, 'Centimeter', 'Pixel');
```

{% endif %}

### Marker color

The HorizontalRuler’s [`markerColor`](../api/diagram/diagramRuler#markercolor) and VerticalRuler’s [`markerColor`](../api/diagram/diagramRuler#markercolor) properties are used to define the ruler marker color and marker will be shown while hovering mouse over the diagram canvas.

N> The MarkerColor property can be customized using the [`marker`](./style#customizing-the-ruler-marker-color) CSS style.
