---
layout: post
title: Events in JavaScript Diagram control | Syncfusion®
description: Learn here all about Group in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Events 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Events in JavaScript Diagram control

Events in diagrams are triggered during interactions with diagram elements, allowing for extensive customization and enhancing the overall user experience. These events can be used to dynamically update the diagram, apply specific styles, validate user actions, and more. By leveraging these events, you can create interactive and responsive diagramming applications tailored to specific needs.

## Load event

The [`load`](../api/diagram/iLoadEventArgs) event triggers before the diagram load.

## Loaded Event
The [`loaded`](../api/diagram#loaded) event triggers when all diagram elements are loaded using [`loadDiagram`](../api/diagram#loaddiagram) method. You can use this event to customize diagram elements during the loading process.

```javascript
var diagram = new ej.diagrams.Diagram({
    loaded:(args) {
      // You can use this event to customize diagram elements during the loading process.
      }
});

```

The event has two arguments such as name, diagram

**name** 

Type: String

Description: Returns the event name.

**diagram**

Type: Diagram

Description: Returns the diagram model properties.

Users can perform customizations or modifications to the diagram elements once the loading process is complete.

## Data loaded event

The [`dataLoaded`](../api/diagram/iDataLoadedEventArgs) event is triggered when the data source is loaded in diagram.

## Created event

The [`created`](../api/diagram#created) event is triggered when the diagram component is rendered. You can perform any action in the created event such as selecting any object in the diagram or customizing the nodes/connector.

The following example shows the order of these event triggers and how to handle these events in a diagram.


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/events-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/events-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/events-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/events-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/events-cs1" %}
{% endif %}

## Mouse wheel event

The [`mouseWheel`](../api/diagram/iMouseWheelEventArgs) event triggers when the mouse is scrolled over the diagram area. You can use this event to prevent zooming and scrolling with the mouse wheel. The following example demonstrates how to handle this event and customize it to prevent zooming and scrolling using the mouse wheel.


{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/javascript/events-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/events-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/events-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/events-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/events-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/events-cs2" %}
{% endif %}

## Other events

There are several other events that will be triggered while interacting with diagram elements. To learn more about these events, refer to the sections on [`node-events`](./nodes/nodes-events) , [`connector-events`](./connectors/connector-events) , [`port-events`](./ports/ports-interaction#events) , [`annotation-events`](./labels/label-events) , [`scroll-events`](./scroll-settings#scroll-change-event) , [`history-events`](./undo-redo#history-change-event) , [`layout-events`](./automatic-layout/layout-event), [`user-handle-events`](./user-handle#user-handle-events) , [`fixed-user-handle-events`](./user-handle#fixed-user-handle-events) , [`Symbol-palette-events`](./symbol-palette/palette-events).



