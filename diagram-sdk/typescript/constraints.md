---
layout: post
title: Constraints in TypeScript Diagram control | Syncfusion®
description: Learn here all about Constraints in Syncfusion® TypeScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: Constraints 
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Constraints in TypeScript Diagram control

Constraints are used to enable or disable certain behaviors of the diagram, nodes, and connectors. Constraints are provided as flagged enumerations, so that multiple behaviors can be enabled or disabled using the Bitwise operators (`&`, `|`, `~`, `<<`, etc.).

To know more about Bitwise operators, refer to [`Bitwise Operations`](#bitwise-operations).

## Diagram constraints

[`Diagram constraints`](https://ej2.syncfusion.com/documentation/api/diagram/diagramConstraints) allows you to enable or disable the following behaviors:

The following table displays the list of all diagram constraints.

| Constraints | Description |
| -------- | -------- |
|None|Disable all diagram functionalities.|
|Bridging|Enables or disables Bridging support for connector in diagram.|
|Undo/redo|Enables or disables the Undo/Redo support for the diagram.|
|UserInteraction|Enables or disables user interaction support for the diagram.|
|ApiUpdate|Enables or disables Api update support for the diagram.|
|PageEditable|Enables or disables Page Editable support for the diagram.|
|Zoom|Enables or disables Zoom support for the diagram.|
|PanX|Enables or disables Panning X coordinate support for the diagram.|
|PanY|Enables or disables Panning Y coordinate support for the diagram.|
|Pan|Enables or disables panning both X and Y coordinates support for the diagram.|
|ZoomTextEdit|Enables or disables zooming the text box while editing the text.|
|Tooltip|Enables or disables the tooltip for the diagram.|
|Virtualization|Enables or disables Virtualization support for the diagram.|
|LineRouting|Enables or disables the line routing.|
|Default|Enables or disables all constraints in diagram.|

The following example illustrates how to disable page editing using the diagram constraints.

```javascript
let diagram:Diagram = new Diagram({
    width: '100%', height: 600,
    constraints: DiagramConstraints.Default & ~DiagramConstraints.PageEditable
});
```
The following example shows how to enable Bridging constraint to the default constraints of diagram.

```javascript
let diagram:Diagram = new Diagram({
    width: '100%', height: 600,
    constraints: DiagramConstraints.Default | DiagramConstraints.Bridging
});

```

Multiple behaviors can be added or removed from the default constraints using the Bitwise Operations in the diagram.

```javascript
let diagram:Diagram = new Diagram({
    width: '100%', height: 600,
    constraints: DiagramConstraints.Default & ~(DiagramConstraints.PageEditable|DiagramConstraints.Zoom);
});

```

For more information about diagram constraints, refer to [`DiagramConstraints`](https://ej2.syncfusion.com/documentation/api/diagram/diagramConstraints).

N> By default, the following constraints are enabled in the diagram,
<br/>* Zoom
<br/>* ApiUpdate
<br/>* PanX
<br/>* PanY
<br/>* Pan
<br/>* Undo/Redo
<br/>* PageEditable
<br/>* Default



## Node constraints

Node constraints allows to enable or disable the following behaviors of node. They are as follows:

| Constraints | Description |
| -------- | -------- |
|None|Disable all node Constraints|
|Select|Enables or disables the node to be selected.|
|Drag|Enables or disables the node to be dragged.|
|Rotate|Enables or disables the node to be rotated.|
|Shadow|Enables or disables the node to display shadow.|
|PointerEvents|Enables or disables the node to provide pointer option.|
|Delete|Enables or disables node to be deleted.|
|InConnect|Enables or disables node to provide in connect option.|
|OutConnect|Enables or disables node to provide out connect option.|
|AllowDrop|Enables node to provide allow to drop option.|
|Individual|Enables node to provide individual resize option |
|ResizeNorthEast|Enable or disable to resize NorthEast side of the node.|
|ResizeEast|Enable or disable to resize East side of the node.|
|ResizeSouthEast|Enable or disable to resize SouthEast side of the node.|
|ResizeSouth|Enable or disable to resize South side of the node.|
|ResizeSouthWest|Enable or disable to resize SouthWest side of the node.|
|ResizeWest|Enable or disable to resize West side of the node.|
|ResizeNorthWest|Enable or disable to resize NorthWest side of the node.|
|ResizeNorth|Enable or disable to resize North side of the node.|
|AspectRatio|Enables the Aspect ratio of the node.|
|ReadOnly|Enables the ReadOnly support for annotation in the node.|
|HideThumbs|Enable to hide all resize thumbs for the node.|
|Tooltip|Enables or disables tooltip for the Nodes.|
|InheritTooltip|Enables or disables inherit tooltip option from the parent object.|
|Resize|Enables or Disables the expansion or compression of a node.|
|Inherit|Enables the node to inherit the interaction option from the parent object.|
|Expandable|Enables node to provide Expandable option|
|AllowMovingOutsideLane| Enables or disables child in parent for the swimLane node |
|Default|Enables all default constraints for the node.|

The following example illustrates how to disable rotation using the node constraints.

```javascript
let nodes :NodeModel[] = [{ id: 'node', offsetX: 100, offsetY: 100, constraints: NodeConstraints.Default & ~NodeConstraints.Rotate }];
let diagram:Diagram = new Diagram({
    width: '100%, height: 600, nodes: nodes,
},'#element');
```
The following example shows how to add Shadow constraint to the default constraints of node.

```javascript
let node = { id: 'node', offsetX: 100, offsetY: 100, constraints: NodeConstraints.Default | NodeConstraints.Shadow };

```

The following code example shows how the tooltip can be enabled for the node.

```javascript
//Enabled the tooltip constraints for the node.
let node = { id: 'node', offsetX: 100, offsetY: 100, tooltip:{content:'Node'}, constraints: NodeConstraints.Default | NodeConstraints.Tooltip };

```
Multiple behaviors can be added or removed from the default constraints using the `Bitwise Operations`.

The following code example shows how to remove rotate and resize constraints from node.

```javascript
 //Removing multiple constraints from default.
let node = { id: 'node', offsetX: 100, offsetY: 100,constraints: NodeConstraints.Default &~ (NodeConstraints.Rotate | NodeConstraints.Resize) };

```
Refer sample below

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/constraints-cs1" %}

For more information about node constraints, refer to [`NodeConstraints`](https://ej2.syncfusion.com/documentation/api/diagram/nodeConstraints).

N>By default, the following constraints are enabled for the node,
<br/>* Select
<br/>* Drag
<br/>* Resize
<br/>* Rotate
<br/>* InConnect
<br/>* OutConnect
<br/>* PointerEvents
<br/>* ResizeNorthEast
<br/>* ResizeEast
<br/>* ResizeSouthEast
<br/>* ResizeSouth
<br/>* ResizeSouthWest
<br/>* ResizeWest
<br/>* ResizeNorthWest
<br/>* ResizeNorth
<br/>* Inherit
<br/>* Expandable
<br/>* Individual
<br/>* InheritTooltip
<br/>* Default

## Connector constraints

Connector constraints allows you to enable or disable certain behaviors of connectors.

| Constraints | Description |
| -------- | -------- |
|None|Disable all connector Constraints.|
|Select|Enables or disables connector to be selected.|
|Delete|Enables or disables connector to be deleted.|
|Drag|Enables or disables connector to be dragged.|
|DragSourceEnd|Enables connectors source end to be selected.|
|DragTargetEnd|Enables connectors target end to be selected.|
|DragSegmentThumb|Enables control point and end point of every segment in a connector for editing.|
|Interaction|Enables or disables Interaction for the connector.|
|AllowDrop|Enables allow drop support to the connector.|
|Bridging|Enables bridging to the connector.|
|InheritBridging|Enables to inherit bridging option from the parent object.|
|BridgeObstacle| Enables or Disables Bridge Obstacles with overlapping of connectors.|
|PointerEvents|Enables to set the pointer events.|
|ConnectToNearByNode|Enables to connect to the nearest node.|
|ConnectToNearByPort|Enables to connect to the nearest port.|
|Tooltip|Enables or disables tooltip for the connectors.|
|LineRouting| Enables or disables routing to the connector.|
|InheritLineRouting|Enables or disables routing to the connector. |
|InheritTooltip|Enables or disables inherit tooltip option from the parent object
|ConnectToNearByElement|Enables to connect to the nearest elements.|
|InheritSegmentThumbShape|Enables or disables to inherit the value of segmentThumbShape.|
|ReadOnly|Enables or disables readonly for the connector.|
|Default|Enables all constraints for the connector.|


The following code shows how to disable select constraint from the default constraints of connector.

```javascript
let connectors :ConnectorModel[]= [{
    id: 'connector1',
    type: 'Straight',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 200, y: 200 },
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select
}];
let diagram:Diagram = new Diagram({
    width: '100%', height: 600, connectors: connectors,
},'#element');
```

The following example shows how to add Bridging constraint to the default constraints of connector.

```javascript
let connector = {
    id: 'connector1',
    type: 'Straight',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 200, y: 200 },
    constraints: ConnectorConstraints.Default | ConnectorConstraints.Bridging
};
```

N> To visualize connector bridging, we need to inject ConnectorBridgin module.

The following code example shows how the tooltip can be enabled for the connector.

```javascript
let connector = {
        id: 'connector1',
        type: 'Straight',
        sourcePoint: { x: 100, y: 100 },
        targetPoint: { x: 200, y: 200 },
        tooltip:{content:'Connector'},
        constraints: ConnectorConstraints.Default | ConnectorConstraints.Tooltip
    };
```

The connector constraints are provided as flagged enumerations, so that multiple behaviors can be added or removed from the default constraints using the Bitwise Operations.
```javascript
//Removing multiple constraints from default.
let connector = {
        id: 'connector1',
        type: 'Straight',
        sourcePoint: { x: 100, y: 100 },
        targetPoint: { x: 200, y: 200 },
        tooltip:{content:'Connector'},
        constraints: ConnectorConstraints.Default &~ (ConnectorConstraints.DragSourceEnd|ConnectorConstraints.DragTargetEnd)
    };
```
Refer sample below

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/constraints-cs2" %}

For more information about connector constraints, refer to [`ConnectorConstraints`](https://ej2.syncfusion.com/documentation/api/diagram/connectorConstraints).

N>By default, the following constraints are enabled for the connector,
<br/>* Select
<br/>* Delete
<br/>* Drag
<br/>* Interaction
<br/>* ConnectToNearByNode
<br/>* ConnectToNearByPort
<br/>* ConnectToNearByElement
<br/>* BridgeObstacle
<br/>* InheritBridging
<br/>* PointerEvents
<br/>* InheritLineRouting
<br/>* InheritTooltip
<br/>* InheritSegmentThumbShape
<br/>* Default

## Port constraints

The constraints property of the Port allows you to enable or disable the following behaviors of port.

| Constraints | Description |
| -------- | -------- |
|None|Disable all port Constraints.|
|Draw|Enables to create the connection when mouse hover on the port.|
|Drag|Enables or disables port dragging|
|InConnect|Enables or disables to connect only the target end of connector.|
|OutConnect|Enables or disables to connect only the source end of connector.|
|ToolTip|Enables or disables the Tooltip  for the ports.|
|InheritTooltip|Enables or disables the Tooltip for the ports.|
|Default|Enables all constraints for the port.|

The following code illustrates how to disable creating connections with a port.

```javascript
let nodes :NodeModel[] = [
    {
        id: 'node',
        offsetX: 100,
        offsetY: 100,
        ports: [
            {
                constraints: PortConstraints.None
            }
        ]
    }
];
let diagram:Diagram = new Diagram({
    width: '100%', height: 600, nodes: nodes,
});
```

The following code example shows how to modify the port constraints to accept target connection alone.

```javascript
        ports: [
            {   //Enable to create target connection alone.
                constraints: PortConstraints.InConnect
            }
        ]
```

The port constraints are provided as flagged enumerations, so that multiple behaviors can be added or removed from the default constraints using the Bitwise Operations.

```javascript
        ports: [
            {   //Enable to draw connector from port also accepts both in and out connections.
                constraints: PortConstraints.Default | PortConstraints.Draw;
            }
        ]
```
Refer sample below

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/constraints-cs3" %}

For more information about port constraints, refer to [`PortConstraints`](https://ej2.syncfusion.com/documentation/api/diagram/portConstraints).

N> By default, the following constraints are enabled for the port,
<br/>* InConnect
<br/>* OutConnect

## Annotation constraints

The constraints property of the Annotations allows you to enable or disable certain behaviors of annotation.

| Constraints | Description |
| -------- | -------- |
|ReadOnly|Enables or disables the ReadOnly Constraints,|
|InheritReadOnly|Enables or disables to inherit the ReadOnly option from the parent object.|
|Select|Enables or Disable select support for the annotation|
|Drag|Enables or Disable drag support for the annotation|
|Resize| Enables or Disable resize support for the annotation |
|Rotate| Enables or Disable rotate support for the annotation|
|Interaction|Enables interaction of annotation|
|None|Disables all constraints for the annotation.|

The read-only mode for the annotation is enabled by settings ReadOnly constraints to the annotation.

The following code illustrates how to enable read-only mode for the annotations.

```javascript
let nodes :NodeModel[] = [
    {
        id: 'node',
        offsetX: 100,
        offsetY: 100,
        annotations: [
            {
                id: 'anotation_1',
                content: 'annotation',
                constraints: AnnotationConstraints.ReadOnly,
            }
        ]
    }
];
let diagram:Diagram = new Diagram({
    width: '100%', height: 600, nodes: nodes,
});
```

Interactions such as select, drag, resize, and rotate can be enabled for the annotation as shown below.

```javascript

 annotations: [
            {
                id: 'anotation_1',
                content: 'annotation',
                constraints: AnnotationConstraints.Select | AnnotationConstraints.Drag | AnnotationConstraints.Resize |
                AnnotationConstraints.Rotate,
            }
        ]

```
Refer sample below

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/constraints-cs4" %}

For more details about annotation constraints, refer to [`AnnotationConstraints`](https://ej2.syncfusion.com/documentation/api/diagram/annotationConstraints#AnnotationConstraints).

## Selector constraints

Selector visually represents the selected elements with certain editable thumbs. The visibility of the thumbs can be controlled with selector constraints. The part of selector is categorized as follows:

| Constraints | Description |
| -------- | -------- |
|None|Hides all the selector elements.|
|ConnectorSourceThumb|Shows or hides the source thumb of the connector.|
|ConnectorTargetThumb|Shows or hides the target thumb of the connector.|
|ResizeSouthEast|Shows or hides the bottom right resize handle of the selector.|
|ResizeSouthWest|Shows or hides the bottom left resize handle of the selector.|
|ResizeNorthEast|Shows or hides the top right resize handle of the selector.|
|ResizeNorthWest|Shows or hides the top left resize handle of the selector.|
|ResizeEast|Shows or hides the middle right resize handle of the selector.|
|ResizeWest|Shows or hides the middle left resize handle of the selector.|
|ResizeSouth|Shows or hides the bottom center resize handle of the selector.|
|ResizeNorth|Shows or hides the top center resize handle of the selector.|
|Rotate|Shows or hides the rotate handle of the selector.|
|UserHandle|Shows or hides the user handles of the selector.|
|ToolTip| Shows or hides the default tooltip for the drag, resize, and rotate operation of nodes and connectors. |
|ResizeAll|Shows or hides all resize handles of the selector.|
|All|Shows all handles of the selector.|

The following code illustrates how to hide rotator.

```javascript
let diagram:Diagram = new Diagram({
    width: '100%', height: 600,
    selectedItems: { constraints: SelectorConstraints.All & ~SelectorConstraints.Rotate}
});
```
The following code demonstrates how to hide the default tooltip during the drag, resize, and rotate operations on nodes:

```javascript
let diagram:Diagram = new Diagram({
    width: '100%', height: 600,
    selectedItems: { constraints: SelectorConstraints.All & ~SelectorConstraints.ToolTip}
});

```

The following code example shows how to disable the userhandle functionality for the selected item.

```javascript
let diagram:Diagram = new Diagram({
    width: '100%', height: 600,
    selectedItems: { constraints: SelectorConstraints.All & ~SelectorConstraints.UserHandle}
});

```
Refer sample below

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/constraints-cs5" %}

For more information about selector constraints, refer to [`SelectorConstraints`](https://ej2.syncfusion.com/documentation/api/diagram/selectorConstraints).

N> By default, the following constraints are enabled for the selected items,
<br/>* Rotate
<br/>* UserHandel
<br/>* ResizeAll
<br/>* All
<br/>* ToolTip

## Snap constraints

Snap constraints control the visibility of gridlines and enable/disable snapping.

The following list of snapping constraints are used to enable or disable certain features of snapping.

| Constraints | Description |
| -------- | -------- |
|None|Disable snapping for the nodes/connectors in diagram.|
|ShowHorizontalLines|Displays only the horizontal gridlines in diagram.|
|ShowVerticalLines|Displays only the Vertical gridlines in diagram.|
|ShowLines|Display both Horizontal and Vertical gridlines.|
|SnapToHorizontalLines|Enables the object to snap only with horizontal gridlines.|
|SnapToVerticalLines|Enables the object to snap only with Vertical gridlines.|
|SnapToLines|Enables the object to snap with both horizontal and Vertical gridlines.|
|SnapToObject|Enables the object to snap with the other objects in the diagram.|
|All|Shows gridlines and enables snapping.|

The following code illustrates how to show only horizontal gridlines.

```javascript
let diagram:Diagram = new Diagram({
    width: '100%', height: 600,
    snapSettings: {
        constraints: SnapConstraints.ShowHorizontalLines
    }
});
```
The snap constraints are provided as flagged enumerations, so that multiple behaviors can be added or removed from the default constraints using the Bitwise Operations.

```javascript

  snapSettings: {
        constraints: SnapConstraints.ShowHorizontalLines | SnapConstraints.ShowVerticalLines
    };

```
Refer sample below

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs6/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs6/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/constraints-cs6" %}

For more information about snap constraints, refer to [`SnapConstraints`](https://ej2.syncfusion.com/documentation/api/diagram/snapConstraints).

N> By default, the following constraints are enabled for the snap functionality in the diagram,
<br/>* ShowLines
<br/>* ShowVerticalLines
<br/>* ShowHorizontalLines
<br/>* SnapToLines
<br/>* SnapToHorizontalLines
<br/>* SnapToVerticalLines
<br/>* SnapToObject
<br/>* All

## Boundary constraints

Boundary constraints defines a boundary for the diagram inside which the interaction should be done.

The following list of constraints are used to enable or disable certain features of boundary interactions of the diagram.

| Constraints | Description |
| -------- | -------- |
|Infinity|Allow the interactions to take place at the infinite height and width.|
|Diagram|Allow the interactions to take place around the diagram height and width.|
|Page|Allow the interactions to take place around the page height and width.|

The following code illustrates how to limit the interaction done inside a diagram within a page.

```javascript
let diagram:Diagram = new Diagram({
    width: '100%', height: 600,
    pageSettings: {
        boundaryConstraints: 'Page'
    }
});
```
Refer sample below

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs7/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/typescript/constraints-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/typescript/constraints-cs7" %}

For more information about selector constraints, refer to [`BoundaryConstraints`](https://ej2.syncfusion.com/documentation/api/diagram/boundaryConstraints).

## Inherit behaviors

Some of the behaviors can be defined through both the specific object (node/connector) and diagram. When the behaviors are contradictorily defined through both, the actual behavior is set through inherit options.

The following code example illustrates how to inherit the line bridging behavior from the diagram model.

```ts
Diagram.Inject(ConnectorBridging);
let connectors :ConnectorModel[]= [
  {
    id: 'connector1',
    type: 'Straight',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 200, y: 200 },
    constraints:
      ConnectorConstraints.Default |
      ConnectorConstraints.InheritBridging,
  },
  {
    id: 'connector2',
    type: 'Straight',
    sourcePoint: { x: 100, y: 200 },
    targetPoint: { x: 200, y: 100 },
    constraints:
      ConnectorConstraints.Default |
      ConnectorConstraints.InheritBridging,
  },
];
let diagram:Diagram = new Diagram({
  width: '100%',
  height: 600,
  connectors: connectors,
  constraints:
    DiagramConstraints.Default |
    DiagramConstraints.Bridging,
});

diagram.appendTo('#element');

```

## Bitwise operations

Bitwise operations are used to manipulate the flagged enumerations `enum`. In this section, Bitwise operations are shown by using the node constraints. The same is applicable when working connector constraints, or port constraints.

### Add operation

You can add or enable multiple values at a time by using Bitwise `|` (OR) operator.

The following code demonstrates how to add tooltip constraints to the default node constraints, thereby enabling tooltip functionality for the node:

```javascript
node.constraints = NodeConstraints.Default | NodeConstraints.Tooltip;
```

In the previous example, you can perform basic interactions with the node while also enabling tooltip functionality.

### Remove Operation

You can remove or disable values by using Bitwise `&~` (XOR) operator.

```javascript
node.constraints = NodeConstraints.Default & ~(NodeConstraints.Rotate);
```

In the previous example, rotation is disabled from the default node constraints.

### Check operation

You can check any value by using Bitwise `&` (AND) operator.

```javascript
if ((node.constraints & (NodeConstraints.Rotate)) == (NodeConstraints.Rotate));
```

In the previous example, check whether the rotate constraints are enabled in a node. When node constraints have rotate constraints, the expression returns a rotate constraint.