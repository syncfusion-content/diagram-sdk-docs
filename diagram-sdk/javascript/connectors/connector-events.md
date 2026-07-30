---
layout: post
title: Connector Events in JavaScript Diagram control | Syncfusion®
description: Learn here all about Connectors in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Connector Events
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Connector Events in JavaScript Diagram control

Diagram provides some events support for connectors that triggers when interacting with the connector.

## Click event

Triggers when the connector is clicked. The following code example explains how to get the [`click`](../../api/diagram/iClickEventArgs) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/nodes-clickEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/nodes-clickEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/nodes-clickEvent" %}

## Selection change event

When selecting/unselecting the connector, the selection change event will be triggered.
The following code example explains how to get the [`selectionChange`](https://ej2.syncfusion.com/javascript/documentation/api/diagram#selectionchange) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-SelectEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-SelectEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-SelectEvent" %}

 You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/javascript/documentation/api/diagram/iselectionchangeeventargs) to true, as shown in the code snippet below.

```ts
  selectionChange: function (args) {
    if (args.state == 'Changing') {
      //Prevents selection
      args.cancel = true;
    }
  },

```

## Position change event

Triggers when the connector's position is changed in diagram.
The following code example explains how to get the [`positionChange`](../../api/diagram/iDraggingEventArgs) event in the diagram.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-PositionEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-PositionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-PositionEvent" %}

 You can prevent dragging by setting the `cancel` property of [`DraggingEventArgs`](../../api/diagram/iDraggingEventArgs) to true, as shown in the code snippet below.

 ```ts
   positionChange: function (args) {
    if (args.state == 'Progress') {
      //Prevents dragging
      args.cancel = true;
    }
  },

```

## Connection change event

Triggers when the connector’s source or target point is connected or disconnected from the source or target.
The following code example explains how to get the [`connectionChange`](../../api/diagram/iConnectionChangeEventArgs) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-ConnectionEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-ConnectionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-ConnectionEvent" %}

## Source Point change event

Triggers when the connector's source point is changed.
The following code example explains how to get the [`sourcePointChange`](../../api/diagram/iendchangeeventargs) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-SourcePointEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-SourcePointEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-SourcePointEvent" %}

 You can prevent source point dragging by setting the `cancel` property of [`EndChangeEventArgs`](../../api/diagram/iEndChangeEventArgs) to true, as shown in the code snippet below.

```javascript

 sourcePointChange: function (args) {
    if (args.state === 'Progress') {
      //Prevents source point dragging
      args.cancel = true;
      //Customize
    }
  },

```

## Target Point change event

Triggers when the connector's target point is changed.
The following code example explains how to get the [`targetPointChange`](../../api/diagram/iEndChangeEventArgs) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-TargetPointEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-TargetPointEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-TargetPointEvent" %}

 You can prevent target point dragging by setting the `cancel` property of [`EndChangeEventArgs`](../../api/diagram/iEndChangeEventArgs) to true, as shown in the code snippet below.

```javascript

targetPointChange: function (args) {
    if (args.state === 'Progress') {
      //Prevents target point dragging
      args.cancel = true;
      //Customize
    }
  },

```

## Segment Collection Change event

Triggers when the connector's segments added or removed at runtime.
The following code example explains how to get the [`segmentCollectionChange`](../../api/diagram/isegmentcollectionchangeeventargs) event in the diagram. 

Use `CTRL+Shift+Click` on connector to add/remove segments.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-SegmentEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-SegmentEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-SegmentEvent" %}

## Segment Change event

Triggers when the connector's segments were adjusted or edited.
The following code example explains how to get the [`segmentChange`](../../api/diagram/isegmentchangeeventargs) event in the diagram.


{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-SegmentEditEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-SegmentEditEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-SegmentEditEvent" %}

 You can prevent segment editing by setting the `cancel` property of [`SegmentChangeEventArgs`](../../api/diagram/iEndChangeEventArgs) to true, as shown in the code snippet below.

``` javascript
 segmentChange: function (args) {
    if (args.state === 'Start') {
      //Prevents the segment editing
      args.cancel = true;
    }
  },

```

## Collection change event

Triggers when the connector is added or removed from diagram.
The following code example explains how to get the [`collectionChange`](../../api/diagram/iCollectionChangeEventArgs) event in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/connectors-CollectionEvent/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/connectors-CollectionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/connectors-CollectionEvent" %}

You can prevent changes to the diagram collection, such as adding or deleting connectors, by setting the `cancel` property of [`CollectionChangeEventArgs`](../../api/diagram/iCollectionChangeEventArgs) to true, as shown in the code snippet below.

``` javascript
collectionChange: function (args) {
    if (args.state === 'Changing') {
      //Prevents collection change - Prevents Adding or deleting connectors
      args.cancel = true;
    }
  },

````
