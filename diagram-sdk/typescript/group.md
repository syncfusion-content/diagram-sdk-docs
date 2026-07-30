---
layout: post
title: Group in TypeScript Diagram control | Syncfusion®
description: Learn here all about Group in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Group 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Group in TypeScript Diagram control

## Create group

Group is used to cluster multiple nodes and connectors into a single element. It acts like a container for its children (nodes, groups, and connectors). Every change made to the group also affects the children. Child elements can be edited individually.


## Add group when initializing diagram

A group can be added to the diagram model through [`nodes`](https://ej2.syncfusion.com/documentation/api/diagram/nodemodel) collection. To define an object as group, add the child objects to the [`children`](https://ej2.syncfusion.com/documentation/api/diagram/node#children) collection of the group. The following code illustrates how to create a group node.

* While creating group, its child node need to be declared before the group declaration.




 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-cs1" %}



## Group nodes at runtime

Groups can be dynamically created during runtime in the diagram by invoking the [`diagram.group`](https://ej2.syncfusion.com/documentation/api/diagram#group) method. To initiate this process, first, select the nodes that you intend to include within the group. Subsequently, by utilizing the [`diagram.group`](https://ej2.syncfusion.com/documentation/api/diagram#group) method, the selected nodes will be encapsulated within a newly formed group node.

The following code illustrates how a group  at runtime.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-runtime/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-runtime/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-runtime" %}



## UnGroup nodes at runtime

Group node can be unGrouped dynamically, by using the [`diagram.unGroup`](https://ej2.syncfusion.com/documentation/api/diagram#ungroup) method. The following code example shows how to unGroup group node at runtime.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-cs2" %}



## Add group node at runtime

A group node can be added at runtime by using the diagram method [`add`](https://ej2.syncfusion.com/documentation/api/diagram#add).

The following code illustrates how a group node is added at runtime.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-cs3" %}



## Add collection of group nodes at runtime

* The collection of group nodes can be dynamically added using 'addElements' method.Each time an element is added to the diagram canvas, the 'collectionChange' event will be triggered.

The following code illustrates how to add a group nodes collection at runtime.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-cs7/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-cs7" %}



## Add/Remove children from group

### Add children To group at runtime

A child node can be added to the specified Group at runtime by utilizing the diagram method [`addChildToGroup`](https://ej2.syncfusion.com/documentation/api/diagram#addchildtogroup).

This functionality is achieved by passing the group and existing children as arguments to the method.

The following code illustrates how a child node and a group node can be passed as arguments to the method and executed at runtime.

```JavaScript

diagram.addChildToGroup(groupNode, childNode); 

```

### Remove children from group at runtime

A specific child from a group node can be removed at runtime by utilizing the diagram method [`removeChildFromGroup`](https://ej2.syncfusion.com/documentation/api/diagram#removechildfromgroup).

This functionality is achieved by passing the group and its children as arguments to the method.

The following code illustrates how a child node is removed from a group at runtime.

```JavaScript

diagram.removeChildFromGroup (groupNode, childNode); 

```



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-cs6" %}



## Group padding

The [`Padding`](https://ej2.syncfusion.com/documentation/api/diagram/node#padding) property of a group node defines the spacing between the group node’s edges and its children.

The following code illustrates how to add Padding to the node group.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-padding/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-padding/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-padding" %}



## Group flip

The flip functionality for a group node works similarly to that of normal nodes. However, when flipping a group node, the flip of its child nodes is combined with the group's flip. This combination ensures that the child nodes inherit the group’s flip while retaining their own individual flips.

`Example`:

- If a child node’s flip is set to Vertical and the group node’s flip is set to Horizontal, the resulting flip for the child node will be a combination of Vertical and Horizontal (effectively a "both" flip).
- This ensures that the child nodes’ orientations adapt dynamically based on the group’s flip while maintaining their unique flip settings.

The following example shows how to apply flip for group node.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-flip/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-flip/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-flip" %}



## Group flip mode

The [`flipMode`](https://ej2.syncfusion.com/documentation/api/diagram/flipMode) of a group node also behave similarly to those of normal nodes. However,When you apply a flip mode to a group node, it takes precedence over any flip mode set on its child nodes, overriding their individual settings.

For example, in the below code,
the flipMode for the child node `Node1` is set to `LabelText`.
The flipMode for the group node is set to `Label`.
As a result, the effective flipMode for both the child node and the group node will be Label, as the group node’s flipMode overrides the child’s.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-flipMode/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-flipMode/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-flipMode" %}




## Nested group

Nested groups are essentially groups within groups, where a group can contain other groups as its children, creating a hierarchy that helps manage complexity and relationships between different elements. The following code illustrates how to create nested group node.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-nestedGroup/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-nestedGroup/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-nestedGroup" %}



![Nested Group GIF](images/nestedGroup.gif)

## Add Group in palette

Group node can be added in symbol palette like the normal nodes.  The following code illustrates how to render group node in palette.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-palette/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-palette/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-palette" %}



## Update group node at runtime

Group can be updated dynamically similar to the normal nodes.  The following code illustrates how to update group node at runtime.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-updateRuntime/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-updateRuntime/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-updateRuntime" %}




## Container

Containers are used to automatically measure and arrange the size and position of the child elements in a predefined manner. There are two types of containers available.

***Canvas***

* The canvas panel supports absolute positioning and provides the least layout functionality to its contained diagram elements.

* Canvas allows you to position its contained elements by using the margin and alignment properties.

* Rendering alone possible in canvas container.

* It allows elements to be either vertically or horizontally aligned.

* Child can be defined with the collection [`canvas.children`](https://ej2.syncfusion.com/documentation/api/diagram/canvas#children-DiagramElement) property.

* Basic element can be defined with the collection of [`basicElements`](https://ej2.syncfusion.com/documentation/api/diagram#basicElements-DiagramElement).

The following code illustrates how to add canvas panel.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-cs4" %}



***Stack***

* Stack panel is used to arrange its children in a single line or stack order, either vertically or horizontally.

* It controls spacing by setting margin properties of child and padding properties of group. By default, a stack panel’s [`orientation`](https://ej2.syncfusion.com/documentation/api/diagram/orientation) is vertical.

The following code illustrates how to add a stack panel.



 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/group-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/group-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/group-cs5" %}



## Difference between a basic group and containers

| Group | Container |
| -------- | -------- |
| It arranges the child elements based on the child elements position and size properties. | Each container has a predefined behavior to measure and arrange its child elements. Canvas and stack containers are supported in the diagram. |
| The Min, and Max Size properties are not applicable for basic group. | It is applicable for container. |
| The Children’s margin and alignment properties are not applicable for basic group. |  It is applicable for container. |

## Interaction

Group node interactions can be performed similarly to normal nodes. Fundamental diagram interactions like selecting, dragging, resizing, and rotating apply equally to group nodes. For more informatation refer to the [`nodes interactions`](./nodes/nodes-interaction)

### Selecting a Node Group

When a child element within a node group is clicked, the entire contained node group is selected instead of the individual child element. Subsequent clicks on the selected element change the selection from top to bottom within the hierarchy, moving from the parent node group to its children.

![Group Interactions GIF](images/groupInteractions-Gif.gif)

## Events

The events triggered when interacting with group nodes are similar to those for individual nodes. For more information, refer to the [`nodes events`](./nodes/nodes-events)

## See Also

* [How to add annotations to the node](./labels/node-labels)
* [How to add ports to the node](./ports)
* [How to enable/disable the behavior of the node](./constraints)
* [How to add nodes to the symbol palette](./symbol-palette)
* [How to create diagram nodes using drawing tools](./tools)
* [How to perform the interaction on the group](./interaction#selecting-a-group)