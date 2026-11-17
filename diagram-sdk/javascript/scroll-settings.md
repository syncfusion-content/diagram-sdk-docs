---
layout: post
title: Scroll Settings in JavaScript Diagram | Syncfusion®
description: Read and control the horizontal offset, vertical offset, zoom level, and scrollable area of the Syncfusion® JavaScript Diagram.
platform: diagram-sdk
control: Scroll settings 
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Scroll Settings in JavaScript Diagram

The diagram can be scrolled using both the vertical and horizontal scrollbars. Additionally, the mouse wheel can be used to scroll the diagram. The diagram's [`scrollSettings`](../api/diagram/scrollSettingsModel) allow you to read the current scroll status, view port size, current zoom level, and zoom factor. These settings also provide the capability to programmatically control the scrolling of the diagram.

## Access and Customize Scroll Settings

Scroll settings in a diagram allow you to access and customize various properties such as [`horizontalOffset`](../api/diagram/scrollSettingsModel#horizontaloffset), [`verticalOffset`](../api/diagram/scrollSettingsModel#verticaloffset), [`viewPortWidth`](../api/diagram/scrollSettingsModel#viewportwidth), [`viewPortHeight`](../api/diagram/scrollSettingsModel#viewportheight), [`currentZoom`](../api/diagram/scrollSettingsModel#currentzoom), [`zoomFactor`](../api/diagram/scrollSettingsModel#zoomfactor), [`maxZoom`](../api/diagram/scrollSettingsModel#maxzoom), [`minZoom`](../api/diagram/scrollSettingsModel#minzoom), [`scrollLimit`](../api/diagram/scrollSettingsModel#scrolllimit) , [`canAutoScroll`](../api/diagram/scrollSettingsModel#canautoscroll) , [`autoScrollBorder`](../api/diagram/scrollSettingsModel#autoscrollborder), [`padding`](../api/diagram/scrollSettingsModel#padding) , [`scrollableArea`](../api/diagram/scrollSettingsModel#scrollablearea). 

These properties enable you to read and adjust the scroll status, scroll offset, zoom levels, and more. For a comprehensive overview of these properties, refer to the [`Scroll Settings`](../api/diagram/scrollSettingsModel)

## Define scroll offset

The JavaScript Diagram allows you to pan before loading, ensuring that any desired region of a large diagram is visible. You can programmatically pan the diagram using the [`horizontalOffset`](../api/diagram/scrollSettingsModel#horizontaloffset) and [`verticalOffset`](../api/diagram/scrollSettingsModel#verticaloffset) properties of the scroll settings. The following code illustrates how to programmatically pan the diagram upon initialization also defined `scrollLimit` as **Infinity** to scroll infinitely in diagram. To learn more about scroll limit refer to [`scrollLimit`](#scroll-limit).

In the example below, the vertical scrollbar is scrolled down by 100 px, and the horizontal scrollbar is scrolled to the right by 100 px.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs1" %}
{% endif %}

## Update scroll offset at runtime

There are several ways to update the scroll offset at runtime:

* `Scrollbar`: Use the horizontal and vertical scrollbars of the diagram.
* `Mouse wheel`: Scroll vertically with the mouse wheel. Hold the Shift key while scrolling to scroll horizontally.
* `Pan Tool`: Activate the ZoomPan [`tool`](../api/diagram/diagramTools) in the diagram to scroll by panning.
* `Touch`: Use touch pad gestures for scrolling.

### Programmatically update Scroll Offset

You can programmatically change the scroll offsets of diagram by customizing the [`horizontalOffset`](../api/diagram/scrollSettingsModel#horizontaloffset) and [`verticalOffset`](../api/diagram/scrollSettingsModel#verticaloffset)  of [`Scroll Settings`](../api/diagram/scrollSettingsModel) at runtime. The following code illustrates how to change the scroll offsets at runtime.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs2" %}
{% endif %}

## Update zoom at runtime

### Zoom using mouse wheel

Another way to zoom in and out the diagram is by using the mouse wheel. This method is a quick and convenient way to zoom in and out without having to use any additional tools or gestures.

- Zoom in: Press Ctrl+mouse wheel, then scroll upward.

- Zoom out: Press Ctrl+mouse wheel, then scroll downward.

### Zoom using Keyboard Shortcuts

Using keyboard shortcuts is a quick and easy way to zoom the diagram without having to use the mouse or touch pad.

- Zoom in: Press Ctrl and the plus(+) key.

- Zoom out: Press Ctrl and the minus(-) key.

### Programmatically update zoom

You can programmatically change the current zoom of diagram by utilizing the [`zoomTo`](../api/diagram#zoomto) public method.

#### ZoomOptions

The [`zoomTo`](../api/diagram#zoomto) method takes one parameter [`zoomOptions`](../api/diagram/zoomOptions). In that zoomOptions we can specify the [`focusPoint`](../api/diagram/zoomOptions#focuspoint), [`type`](../api/diagram/zoomTypes) and [`zoomFactor`](../api/diagram/zoomOptions#zoomfactor)

 The following example shows how to zoom-in and zoom-out the diagram using zoomTo method

 {% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs8/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs8/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs8" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs8/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs8/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs8" %}
{% endif %}

For more information on various ways to zoom and pan the diagram, refer to [`zoomPan with various ways`](https://support.syncfusion.com/kb/article/15147/how-to-zoom-and-pan-in-javascript-diagram-with-various-ways)

## AutoScroll

The autoscroll feature automatically scrolls the diagram when a node or connector is moved beyond its boundary. This ensures that the element remains visible during operations like dragging, resizing, and selection.

The autoscroll behavior triggers automatically when any of the following actions occur towards the edges of the diagram:

- Node dragging or resizing
- Connector control point editing
- Rubber band selection

The client-side event [`ScrollChange`](../api/diagram/iScrollChangeEventArgs) is triggered when autoscroll occurs, allowing for customizations. Refer [`scrollChange-event`](#scroll-change-event) for more information.

Autoscroll behavior can be enabled or disabled using the  [`canAutoScroll`](../api/diagram/scrollSettingsModel#canautoscroll) property of the diagram.

### Autoscroll border

The autoscroll border defines the maximum distance from the mouse pointer to the diagram edge that triggers autoscroll. By default, this distance is set to 15 pixels for all sides (left, right, top, and bottom). You can adjust this using the [`autoScrollBorder`](../api/diagram/scrollSettingsModel#autoscrollborder) property of the scroll settings.

The following example demonstrates how to configure autoscroll:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs3" %}
{% endif %}

N> To use auto scroll the `scrollLimit` should be set as **Infinity**.

### Controlling Autoscroll Speed

You can control how often the scrolling needs to be performed automatically in the JavaScript Diagram component during the auto-scrolling behavior. You can now adjust the frequency, ranging from slow and smooth to quick and rapid, to suit their preferences. To configure, set the value in milliseconds to the [`autoScrollFrequency`](../api/diagram/scrollsettingsmodel#autoscrollfrequency) property within the scrollSettings class, allowing precise control over how often auto-scrolling occurs. 

![AutoscrollFrequency GIF](images/AutoscrollFrequency.gif)


## Scroll limit

The [`scrollLimit`](../api/diagram/scrollSettingsModel#scrolllimit) allows you to define the scrollable region of the diagram. It includes the following options:

* `Infinity`: Allows scrolling in all directions without any restriction.
* `Diagram`: Allows scrolling within the diagram region.
* `Limited`: Allows scrolling within a specified scrollable area.

The `scrollLimit` property in scroll settings helps to define these limits.

### Scrollable Area

Scrolling beyond a particular rectangular area can be restricted by using the [`scrollableArea`](../api/diagram/scrollsettingsmodel#scrollablearea) property in [`scrollSettings`](../api/diagram/scrollSettingsModel). To restrict scrolling beyond a custom region, set the scrollLimit to **Limited** and define the desired bounds in `scrollableArea` property.

The following code example illustrates how to specify the scroll limit and customize the scrollable area.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs5" %}
{% endif %}

## Scroll Padding

The [`padding`](../api/diagram/scrollsettingsmodel#padding) property of the scroll settings allows you to extend the scrollable region based on the scroll limit. This property is useful for adding extra space around the diagram content, making it easier to navigate and interact with elements near the edges.

The following code example illustrates how to set scroll padding for the diagram region:

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs6" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs6/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs6/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs6" %}
{% endif %}

## Restrict Negative Axis

The [`restrictNegativeAxis`](../api/diagram/scrollsettingsmodel#restrictnegativeaxis) property restricts diagram navigation strictly to the positive coordinate region (`X >= 0` and `Y >= 0`). By default, this property is set to `false`, allowing the diagram to navigate and pan freely across both positive and negative coordinate spaces. When enabled (`true`), users cannot pan or scroll the viewport into negative coordinates.

### Runtime Behavior

The `restrictNegativeAxis` property can be dynamically toggled at runtime by updating `scrollSettings.restrictNegativeAxis` and invoking the `dataBind()` method:

* **When toggled from `false` to `true` (Enabled)**:
  * Viewport navigation is immediately restricted to the positive coordinate region (`X >= 0`, `Y >= 0`).
  * The user cannot pan or scroll into negative coordinates.
  * Manually placed diagram elements positioned at negative coordinates are not automatically moved.
  * Nodes and connectors residing in negative coordinates become hidden or inaccessible because the viewport can no longer navigate into the negative region.

* **When toggled from `true` to `false` (Disabled)**:
  * Viewport navigation restrictions are removed, restoring unrestricted navigation across both positive and negative coordinate regions.
  * Any nodes or connectors located in negative coordinates become accessible and navigable again.

The following example demonstrates how to configure rulers, place nodes in both positive and negative coordinate regions, and toggle the `restrictNegativeAxis` property dynamically at runtime using a CheckBox.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-restrictNegativeAxis/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-restrictNegativeAxis/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-restrictNegativeAxis" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-restrictNegativeAxis/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-restrictNegativeAxis/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-restrictNegativeAxis" %}
{% endif %}

### Layout Behavior

When `restrictNegativeAxis` is enabled before applying an automatic layout:

* Layout-generated nodes and connectors are automatically translated into the positive coordinate region (`X >= 0`, `Y >= 0`).
* The underlying layout algorithm itself remains unchanged.
* Layout hierarchy, spacing, orientation, alignment, and connector routing are completely preserved.
* The entire layout remains visible and accessible within the positive viewport bounds.

N> If nodes are manually positioned in negative coordinates before enabling `restrictNegativeAxis`, those nodes are not automatically repositioned and may become inaccessible because the viewport is restricted to the positive coordinate region.

### Output Description

* **Unchecked (`restrictNegativeAxis: false`)**: The user can pan and scroll across positive and negative coordinate spaces. Both the **Negative Region Node** (located at $X = -150, Y = -100$) and the **Positive Region Node** (located at $X = 250, Y = 150$), along with their connecting connector, are accessible within the viewport.
* **Checked (`restrictNegativeAxis: true`)**: Panning and scrolling into negative coordinates is restricted at runtime. The node located in the negative coordinate region becomes inaccessible, while the positive region node remains visible in the accessible viewport.
* **Layouts**: When enabled prior to layout generation, layout elements are translated into the positive coordinate region, ensuring complete visibility.

### Important Notes

* The feature restricts viewport navigation and scrolling; it does not automatically reposition manually placed nodes.
* Layout-generated content is translated into the positive coordinate region when the property is enabled before layout execution.
* Existing diagrams containing objects in negative coordinates may have hidden content after enabling this property.
* To make hidden content visible, move the diagram elements into the positive region before enabling the restriction.



## Reset scroll

The [`reset`](../api/diagram#reset) method resets the zoom and scroller offsets to their default values.

``` javascript
//Resets the scroll and zoom to default values
 diagram.reset();

```

## UpdateViewport

The [`updateViewPort`](../api/diagram#updateviewport) method is used to update the dimensions of the diagram viewport.

```javascript
//Updates diagram viewport
diagram.updateViewPort();

```

## Events

### Scroll change event

The [`scrollChange`](../api/diagram/iScrollChangeEventArgs) event is triggered whenever the scrollbar is updated. This can occur during actions such as zooming in, zooming out, using the mouse wheel, or panning. The following example shows how to capture the `scrollChange` event.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs9/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs9/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs9" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs9/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/scrollSettings-cs9/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/scrollSettings-cs9" %}
{% endif %}