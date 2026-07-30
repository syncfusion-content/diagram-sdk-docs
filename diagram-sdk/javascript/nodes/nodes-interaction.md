---
layout: post
title: Interaction of nodes in JavaScript Diagram control | Syncfusion®
description: Learn here all about Nodes in Syncfusion® JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Nodes interaction 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Node Interaction in JavaScript Diagram control

The diagram provides support for selecting, dragging, resizing, and rotating nodes interactively. A node can be selected by simply clicking on it, dragged by dragging it on diagram canvas, resized using the resize handle, and rotated using the rotate handle. Additionally, interactions can be performed using some public methods, which are explained below:

## Select

You can simply click on the node to select it and click on diagram canvas to unselect it like below.

![Select/UnSelect Node](../images/Single-node-select.gif)


### To select node programatically

A node can be selected at runtime by using the [`select`](../../api/diagram#select) method and the selection can be cleared in the diagram by using the [`clearSelection`](../../api/diagram#clearselection) or [`unSelect`](../../api/diagram#unselect) method. The following code explains how to select and clear selection in the diagram.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/nodes-select/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/nodes-select/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/nodes-select" %}

|Method | Parameter | Description|
|----|----|----|
|[`unSelect`](../../api/diagram#unselect)| NodeModel/ConnectorModel | The object to remove from the selection.|
|[`clearSelection`](../../api/diagram#clearselection)| - | Clears all the selection in the diagram.|

## Drag

You can simply mousedown on a node and drag it anywhere on the diagram canvas like below.

![Drag node](../images/drag-single-node.gif)

### To drag node programatically

A node can be dragged at runtime by using the [`drag`](../../api/diagram#drag) method. The following code explains how to drag the node by using the drag method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/nodes-drag/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/nodes-drag/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/nodes-drag" %}

## Resize

When we select a node a resize handle will appear on all the sides of the node. We can resize the node by clicking and dragging the resize handle.

![Resize Node](../images/resize-Single-node.gif)

### To resize node programatically

A node can be resized at runtime by using the [`scale`](../../api/diagram#scale) method. The following code explains how to resize the node by using the scale method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/nodes-resize/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/nodes-resize/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/nodes-resize" %}

## Rotate

A node can be rotated interactively by clicking and dragging the rotate handle of the node.

![Rotate Node](../images/rotate-single-node.gif)

### To rotate node programatically

A node can be rotated at runtime by using the [`rotate`](../../api/diagram#rotate) method. The following code explains how to rotate the node by using the rotate method.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/nodes-rotate/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/nodes-rotate/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/nodes-rotate" %}


## Flip

The diagram Provides support to flip the node. [`flip`](../../api/diagram/node#flip) is performed to give the mirrored image of the original element.

The flip types are as follows:

| Flip direction | Description |
| -------- | ----------- |
|HorizontalFlip |[`Horizontal`](../../api/diagram/flipDirection) is used to flip the node to be mirrored across the horizontal axis.|
|VerticalFlip|[`Vertical`](../../api/diagram/flipDirection) is used to flip the node to be mirrored across the vertical axis.|
|Both|[`Both`](../../api/diagram/flipDirection) is used to flip the node to be mirrored across the horizontal and vertical axes.|
|None|It is used to disable all the flip behavior.|

The following code illustrates how to provide the mirror image of the original element.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/nodes-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/nodes-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/nodes-cs4" %}

### Update flip at runtime

You can dynamically update the flip for a node at runtime using the `^` operator. This operator allows you to apply the same flip direction multiple times, toggling the node's orientation effectively.
The following example demonstrates how to update the flip for a node dynamically:

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/nodes-cs4-flip/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/nodes-cs4-flip/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/nodes-cs4-flip" %}


### Flip modes

The [`flipMode`](../../api/diagram/flipMode) is used to control the behavior of the flip object whether to flip the object along with the port and label.

| FlipMode | Description | 
| -------- | -------- |
|Label| It flips the label along with the object while keeping the text readable.|
|Port| It flips the port along with the object.|
|All| It flips the port, label, and label text along with the object.|
|None| It flips only the object.|
|LabelText| It flips the object and inverts the label without changing its position.|
|PortAndLabel| It flips the port and label along with the object while keeping the text readable.|
|PortAndLabelText| It flips the port and label text along with the object.|
|LabelAndLabelText| It flips the label and label text along with the Object.|

Below are examples of a node undergoing various FlipModes in different flip directions.

| Flip Direction | Flip Mode | Default Node | Flipped Node |
| -------- | -------- | -------- | -------- |
| Horizontal | All |![Horizontal All](../images/Horizontal-All.jpg)|![HorizontalFlip All](../images/HorizontalFlip-All.jpg)| 
| Horizontal | Label |![Horizontal Label](../images/Horizontal-All.jpg)|![HorizontalFlip Label](../images/HorizontalFlip-Label.jpg)|
| Horizontal | LabelText |![Horizontal LabelText](../images/Horizontal-All.jpg)|![HorizontalFlip LabelText](../images/HorizontalFlip-LabelText.jpg)|
| Horizontal | Port |![Horizontal Port](../images/Horizontal-All.jpg)|![HorizontalFlip Port](../images/HorizontalFlip-Port.jpg)|
| Horizontal | None |![Horizontal None](../images/Horizontal-All.jpg)|![HorizontalFlip None](../images/HorizontalFlip-None.jpg)|
| Horizontal | PortAndLabel |![Horizontal PortAndLabel](../images/Horizontal-All.jpg)|![HorizontalFlip PortAndLabel](../images/HorizontalFlip-PortAndLabel.jpg)|
| Horizontal | PortAndLabelText |![Horizontal PortAndLabelText](../images/Horizontal-All.jpg)|![HorizontalFlip PortAndLabelText](../images/HorizontalFlip-PortAndLabelText.jpg)|
| Horizontal | LabelAndLabelText |![Horizontal LabelAndLabelText](../images/Horizontal-All.jpg)|![HorizontalFlip LabelAndLabelText](../images/HorizontalFlip-LabelAndLabelText.jpg)|
| Vertical | All |![Vertical All](../images/Vertical-All.jpg)|![VerticalFlip All](../images/VerticalFlip-All.jpg)| 
| Vertical | Label |![Vertical Label](../images/Vertical-All.jpg)|![VerticalFlip Label](../images/VerticalFlip-Label.jpg)|  
| Vertical | LabelText |![Vertical LabelText](../images/Vertical-All.jpg)|![VerticalFlip LabelText](../images/VerticalFlip-LabelText.jpg)| 
| Vertical | Port |![Vertical Port](../images/Vertical-All.jpg)|![VerticalFlip Port](../images/VerticalFlip-Port.jpg)| 
| Vertical | None |![Vertical None](../images/Vertical-All.jpg)|![VerticalFlip None](../images/VerticalFlip-None.jpg)|  
| Vertical | PortAndLabel |![Vertical PortAndLabel](../images/Vertical-All.jpg)|![VerticalFlip PortAndLabel](../images/VerticalFlip-PortAndLabel.jpg)|  
| Vertical | PortAndLabelText |![Vertical PortAndLabelText](../images/Vertical-All.jpg)|![VerticalFlip PortAndLabelText](../images/VerticalFlip-PortAndLabelText.jpg)|  
| Vertical | LabelAndLabelText |![Vertical LabelAndLabelText](../images/Vertical-All.jpg)|![VerticalFlip LabelAndLabelText](../images/VerticalFlip-LabelAndLabelText.jpg)|  
| Both | All |![Both All](../images/Vertical-All.jpg)|![BothFlip All](../images/BothFlip-All.jpg)|  
| Both | Label |![Both Label](../images/Vertical-All.jpg)|![BothFlip Label](../images/BothFlip-Label.jpg)|
| Both | LabelText |![Both LabelText](../images/Vertical-All.jpg)|![BothFlip LabelText](../images/BothFlip-LabelText.jpg)| 
| Both | Port |![Both Port](../images/Vertical-All.jpg)|![BothFlip Port](../images/BothFlip-Port.jpg)| 
| Both | None |![Both None](../images/Vertical-All.jpg)|![BothFlip None](../images/BothFlip-None.jpg)|
| Both | PortAndLabel |![Both PortAndLabel](../images/Vertical-All.jpg)|![BothFlip PortAndLabel](../images/BothFlip-PortAndLabel.jpg)| 
| Both | PortAndLabelText |![Both PortAndLabelText](../images/Vertical-All.jpg)|![BothFlip PortAndLabelText](../images/BothFlip-PortAndLabelText.jpg)| 
| Both | LabelAndLabelText |![Both LabelAndLabelText](../images/Vertical-All.jpg)|![BothFlip LabelAndLabelText](../images/BothFlip-LabelAndLabelText.jpg)| 

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/nodes-flipMode/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/nodes-flipMode/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/nodes-flipMode" %}