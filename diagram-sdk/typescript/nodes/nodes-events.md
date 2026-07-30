---
layout: post
title: Events of node interaction in TypeScript Diagram control | Syncfusion®
description: Learn here all about Nodes in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Events of node 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Node events in TypeScript Diagram control

Diagram provides some events support for node that triggers when interacting with the node.

## Click event

Triggers when the node is clicked. The following code example explains how to get the [`click`](https://ej2.syncfusion.com/documentation/api/diagram/iClickEventArgs) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/nodes-clickEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/nodes-clickEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/nodes-clickEvent" %}

## Selection change event

Triggers when the node is selected in diagram.
The following code example explains how to get the [`selectionChange`](https://ej2.syncfusion.com/documentation/api/diagram#selectionchange) event in the diagram.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/nodes-selectionEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/nodes-selectionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/nodes-selectionEvent" %}

 You can prevent selection by setting the `cancel` property of [`SelectionChangeEventArgs`](https://ej2.syncfusion.com/documentation/api/diagram/iSelectionChangeEventArgs) to true, as shown in the code snippet below.

```ts
  selectionChange: function (args: ISelectionChangeEventArgs) {
    if (args.state == 'Changing') {
      //Prevents selection
      args.cancel = true;
    }
  },

```

## Position change event

While dragging the node through interaction, the position change event can be used to do the customization.
The following code example explains how to get the [`positionChange`](https://ej2.syncfusion.com/documentation/api/diagram/iDraggingEventArgs) event in the diagram.


{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/nodes-positionEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/nodes-positionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/nodes-positionEvent" %}

 You can prevent dragging by setting the `cancel` property of [`DraggingEventArgs`](https://ej2.syncfusion.com/documentation/api/diagram/iDraggingEventArgs) to true, as shown in the code snippet below.

 ```ts
   positionChange: function (args: IDraggingEventArgs) {
    if (args.state == 'Progress') {
      //Prevents dragging
      args.cancel = true;
    }
  },

```

## Size change event

While resizing the node during the interaction, the size change event can be used to do the customization.
The following code example explains how to get the [`sizeChange`](https://ej2.syncfusion.com/documentation/api/diagram/iSizeChangeEventArgs) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/nodes-resizeEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/nodes-resizeEvent/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/nodes-resizeEvent" %}

 You can prevent resizing by setting the `cancel` property of [`SizeChangeEventArgs`](https://ej2.syncfusion.com/documentation/api/diagram/iSizeChangeEventArgs) to true, as shown in the code snippet below.

 ```ts
    sizeChange: function (args: ISizeChangeEventArgs) {
    if (args.state == 'Progress') {
      //Prevents resizing
      args.cancel = true;
    }
  },

```

## Rotate change event

While rotating the node during the interaction, the rotate change event can be used to do the customization.
The following code example explains how to get the [`rotateChange`](https://ej2.syncfusion.com/documentation/api/diagram/iRotationEventArgs) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/nodes-rotateEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/nodes-rotateEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/nodes-rotateEvent" %}

 You can prevent rotation by setting the `cancel` property of [`RotationEventArgs`](https://ej2.syncfusion.com/documentation/api/diagram/iRotationEventArgs) to true, as shown in the code snippet below.

 ```ts
  rotateChange: function (args: IRotationEventArgs) {
    if (args.state == 'Progress') {
      //Prevents rotation
      args.cancel = true;
    }
  },

```

## Property change event

Triggers when there is any property change occurred for the node. The following code example explains how to get the [`propertyChange`](https://ej2.syncfusion.com/documentation/api/diagram/iPropertyChangeEventArgs) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/nodes-propertyChange/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/nodes-propertyChange/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/nodes-propertyChange" %}

## Collection change event

Triggers when the node is added or removed in diagram dynamically.
The following code example explains how to get the [`collectionChange`](https://ej2.syncfusion.com/documentation/api/diagram/iCollectionChangeEventArgs) event in the diagram.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/nodes-collectionEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/nodes-collectionEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/nodes-collectionEvent" %}

You can prevent changes to the diagram collection, such as adding or deleting nodes, by setting the `cancel` property of [`CollectionChangeEventArgs`](https://ej2.syncfusion.com/documentation/api/diagram/iCollectionChangeEventArgs) to true, as shown in the code snippet below.

 ```ts
    collectionChange: function (args: ICollectionChangeEventArgs) {
    if (args.state == 'Changing') {
      //Prevents collection change - Prevents Adding or deleting nodes
      args.cancel = true;
    }
  },

```

## Mouse Events

### Mouse enter event

The [`mouseEnter`](https://ej2.syncfusion.com/documentation/api/diagram/iMouseEventArgs) is triggered when the mouse enters the node surface.

### Mouse over event

The [`mouseOver`](https://ej2.syncfusion.com/documentation/api/diagram/iMouseEventArgs) is triggered when the mouse hover over the node surface.

### Mouse leave event

The [`mouseLeave`](https://ej2.syncfusion.com/documentation/api/diagram/iMouseEventArgs) is triggered when the mouse leaves the node surface.

The following code example shows how to handle these events in the diagram and change the color of a node based on these events:

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/nodes-mouseEvent/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/nodes-mouseEvent/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/nodes-mouseEvent" %}



