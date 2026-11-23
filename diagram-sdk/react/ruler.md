---
layout: post
title: Ruler in React Diagram | Syncfusion®
description: Show horizontal and vertical Rulers in the React Diagram to measure element positions and align shapes precisely on the canvas.
control: Ruler 
platform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Ruler in React Diagram

The ruler provides horizontal and vertical guides for measuring in the React Diagram component. It can be used to measure diagram objects, indicate positions, and align diagram elements, making it especially useful for creating scale models. The ruler also includes a position indicator that displays the precise location of the mouse cursor on the diagram canvas, with the default color of the position indicator marker being red.

The diagram ruler consists of two components: a horizontal ruler displayed along the top edge and a vertical ruler along the left edge of the diagram canvas. Both rulers work together to provide comprehensive positioning and measurement capabilities.

## Define Rulers

The [`rulerSettings`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings) property of diagram controls the visibility and appearance of the ruler in the diagram.
The [`showRulers`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings#showrulers) property shows or hides the rulers in the diagram.

The following code shows how to add a ruler to the diagram.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/ruler/ruler-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/ruler/ruler-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/ruler/ruler-cs1" %}

## Customizing the Ruler

The [`horizontalRuler`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings#horizontalruler) and [`verticalRuler`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings#verticalruler) properties of `rulerSettings` customize the ruler's appearance in the diagram.

By default, the ruler segments are arranged based on pixel values, with each segment representing a unit of measurement on the diagram canvas.

### Ruler Spacing and Dimensions

The [`interval`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler#interval) property defines the spacing between ruler segments, while the [`segmentWidth`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler#segmentwidth) property sets the width of each segment.
These properties apply to both horizontal and vertical rulers.

### Tick Alignment

The [`tickAlignment`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler#tickalignment) property controls the positioning of ruler tick marks. Valid values are `LeftOrTop` and `RightOrBottom`. For the horizontal ruler, ticks can be aligned to the left or right side, while for the vertical ruler, they can be aligned to the top or bottom.

### Ruler Thickness

The [`thickness`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler#thickness) property sets the thickness of the ruler display area for both horizontal and vertical rulers.

The following code shows how the diagram ruler can be customized.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/ruler/customRuler-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/ruler/customRuler-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/ruler/customRuler-cs1" %}

### Arrange Tick

The [`arrangeTick`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler#arrangetick) function allows customization of ruler tick appearance for both horizontal and vertical rulers. This function is called during the rendering of each tick mark, providing control over tick properties such as length and style.

The following code demonstrates how to use the `arrangeTick` function to customize the tick length.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/ruler/customRuler-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/ruler/customRuler-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/ruler/customRuler-cs2" %}

### Measurement units

The [`measurementUnit`](https://ej2.syncfusion.com/react/documentation/api/diagram/rulerSettings#measurementunit) property of `rulerSettings` specifies the unit used to display the ruler values. The ruler supports the following measurement units:

* `Pixel` - Displays ruler values in pixels. This is the default value.
* `Point` - Displays ruler values in points (1 pt = 1/72 inch).
* `Inch` - Displays ruler values in inches (1 in = 96 px).
* `Millimeter` - Displays ruler values in millimeters (1 mm = 3.7795 px).
* `Centimeter` - Displays ruler values in centimeters (1 cm = 37.7953 px).

When interacting with diagram elements such as dragging or resizing, the tooltip also displays measurements in the configured unit.

The following code demonstrates how to configure the ruler measurement unit initially. The `measurementUnit` is set to `Centimeter`, and it applies to both the horizontal and vertical rulers.

```typescript
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";

function App() {
  return (
    <DiagramComponent
      id="container"
      width={'100%'}
      height={'600px'}
      // Display the ruler values in centimeters.
      rulerSettings={{ showRulers: true, measurementUnit: 'Centimeter' }}
    ></DiagramComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
```

The `measurementUnit` property supports runtime updates, instantly refreshing the ruler display when the measurement unit is changed.

The following code shows how to change the measurement unit at runtime. The ruler values are initially displayed in inches, and selecting another unit from the drop-down updates the `measurementUnit` property and refreshes the rulers.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram-sdk/react/ruler/ruler-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram-sdk/react/ruler/ruler-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/react/ruler/ruler-cs4" %}

> Changing the measurement unit updates both the horizontal and vertical rulers.

#### Convert unit

The [`convertUnit`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagram#convertunit) method of the diagram converts values between different measurement units. It accepts the value to convert, the source unit, and the target unit as parameters, and returns the converted value.

The following code demonstrates how to convert values between units:

```ts
// convertUnit - Converts values between different units
// 'diagramInstance' is the DiagramComponent reference obtained using ref.
let centimeters: number = diagramInstance.convertUnit(300, 'Pixel', 'Centimeter');
let inches: number = diagramInstance.convertUnit(96, 'Pixel', 'Inch');
let pixels: number = diagramInstance.convertUnit(8, 'Centimeter', 'Pixel');
```

### Marker Color

The HorizontalRuler’s [`markerColor`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramRuler#markercolor) property defines the ruler marker color for both horizontal and vertical rulers. The marker appears when hovering the mouse over the diagram canvas, providing precise position feedback.

N> The `markerColor` property can be customized using the [`marker`](./style#customizing-the-ruler) CSS style.

## See also

* [Grid lines](./grid-lines)
* [Page settings](./page-settings)
* [Scroll settings](./scroll-settings)
