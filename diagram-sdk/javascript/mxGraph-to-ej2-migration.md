---
layout: post
title: Migrating from mxGraph to JavaScript Diagram control | Syncfusion®
description: Learn here all about migrating diagrams from mxGraph to JavaScript Diagram control of Syncfusion Essential® JS 2 and more.
platform: diagram-sdk
control: MxGraph to Syncfusion® Ej2 Migration
publishingplatform: diagram-sdk
documentation: ug
domainurl: https://help.syncfusion.com/diagram-sdk
---

# Migrating from mxGraph to Syncfusion® JavaScript Diagram control

[mxGraph](https://github.com/jgraph/mxgraph) was once one of the most popular client-side diagramming libraries for JavaScript. However, with its official end-of-life status since 2020, the need for modern alternatives has grown. Syncfusion® JavaScript Diagram presents a powerful and feature-rich option with robust features, better performance, and extensive documentation. This guide will walk you through setting up the Syncfusion® JavaScript Diagram, and migrating typical diagramming scenarios from `mxGraph` to this platform. You’ll also learn how to convert existing `mxGraph` diagrams into an EJ2-compatible format and continue building with a supported solution.

## Why Switch to Syncfusion® JavaScript Diagram from mxGraph

- **Enhanced Performance**:  Syncfusion® JavaScript Diagram offers superior performance for handling complex and large diagrams effectively.
- **Active Maintenance**:  Syncfusion® JavaScript Diagram is regularly updated and supported, unlike `mxGraph`, which is no longer maintained.
- **Modern Integration**: Seamlessly integrates with frameworks like Angular, React, and Vue.
- **Rich Customization**: Provides advanced customization options with a wide range of shapes and connectors.
- **Robust Support**: Backed by strong community support and extensive documentation.


## Migrating mxGraph XML data to Syncfusion® JavaScript Diagram

Let's say you have diagram data stored as `mxGraph` XML format. To migrate this data to Syncfusion® JavaScript Diagram, you need to convert the XML by following several key steps to achieve visual consistency with the original designs:

1. **Load and Parse XML**: Fetch the `mxGraph` XML data and use `DOMParser` to convert it into a document format for further processing.

2. **Extract Diagram Elements**: Identify and extract nodes and connectors. Additionally, gather annotations, shapes, and styles to ensure all visual aspects are captured.

3. **Convert to Syncfusion® JavaScript Diagram Format**: Transform the extracted nodes, connectors, annotations, and styles into the format required by Syncfusion® JavaScript Diagram.

4. **Render the Diagram**: Use the Syncfusion® JavaScript Diagram API to create and render the diagram with the converted elements, displaying it correctly in your application.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/diagram-sdk/javascript/mxgraph-to-ej2-migration/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/diagram-sdk/javascript/mxgraph-to-ej2-migration/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/diagram-sdk/javascript/mxgraph-to-ej2-migration" %}

Next, let's closely examine how the `mxGraph` diagram elements are rendered and how you can achieve the same output using Syncfusion® JavaScript Diagram.

## Migrating from mxGraph to Syncfusion® JavaScript Diagram control

The following examples demonstrating how to redefine common diagramming elements from `mxGraph` using Syncfusion® JavaScript Diagram.

### Creating Basic Nodes

In `mxGraph`, basic nodes are created using vertices.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
const graph = new mxGraph(container);
const parent = graph.getDefaultParent();

graph.getModel().beginUpdate();
try {
const v1 = graph.insertVertex(parent, null, 'Hello', 20, 20, 80, 30);
} finally {
graph.getModel().endUpdate();
}
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, you create nodes by specifying their properties such as position and size.

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
const diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: [{
    id: 'node1',
    offsetX: 60,
    offsetY: 35,
    width: 80,
    height: 30,
    annotations: [{ content: 'Hello' }]
  }]
});
diagram.appendTo('#diagram');
{% endhighlight %}
{% endtabs %}

### Connecting Diagram Elements

In `mxGraph`, connections between elements are formed by inserting edges between vertices.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
const v1 = graph.insertVertex(parent, null, 'Node1', 20, 20, 80, 30);
const v2 = graph.insertVertex(parent, null, 'Node2', 200, 150, 80, 30);
const e1 = graph.insertEdge(parent, null, '', v1, v2);
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, you create connectors by specifying the source and target node IDs.

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
const nodes = [
  { id: 'node1', offsetX: 60, offsetY: 35, width: 80, height: 30, annotations: [{ content: 'Node1' }] },
  { id: 'node2', offsetX: 200, offsetY: 150, width: 80, height: 30, annotations: [{ content: 'Node2' }] }
];
const connectors = [
  { id: 'connector1', sourceID: 'node1', targetID: 'node2' }
];
{% endhighlight %}
{% endtabs %}

### Annotation Creation and Formatting

In `mxGraph`, styling labels requires editing a style object and applying it to the node. Custom label positioning needs extra configuration and is less straightforward.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
const vertex = graph.insertVertex(parent, null, 'Decision', 100, 100, 80, 40);
const style = graph.getStylesheet().getDefaultVertexStyle();
style[mxConstants.STYLE_FONTCOLOR] = '#FF0000';
style[mxConstants.STYLE_FONTSTYLE] = mxConstants.FONT_BOLD;
style[mxConstants.STYLE_FONTSIZE] = 14;
style[mxConstants.STYLE_ALIGN] = mxConstants.ALIGN_CENTER;
style[mxConstants.STYLE_VERTICAL_ALIGN] = mxConstants.ALIGN_MIDDLE;
graph.getModel().setStyle(vertex, mxStyleRegistry.getName(style));
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, annotations are defined within the annotations array of a node, allowing for straightforward customization:

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
const node = {
  id: 'decisionNode',
  offsetX: 300,
  offsetY: 200,
  width: 100,
  height: 60,
  shape: { type: 'Flow', shape: 'Decision' },
  annotations: [{
    content: 'Decision',
    style: {
      color: '#FF0000',
      bold: true,
      fontSize: 14
    },
    offset: { x: 0.5, y: 1.2 },
    verticalAlignment: 'Top',
    horizontalAlignment: 'Center',
    margin: { top: 10 }
  }]
};
{% endhighlight %}
{% endtabs %}

### Using Ports

In `mxGraph`, ports are additional vertices within a parent vertex.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
const vertex = graph.insertVertex(parent, null, 'Node 1', 100, 100, 80, 30);
const port = graph.insertVertex(vertex, null, '', 1, 0.5, 10, 10,
  'shape=ellipse;perimter=ellipsePerimeter;portConstraint=east;');
port.geometry.offset = new mxPoint(-5, -5);
port.geometry.relative = true;
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, ports are similarly enabled by defining them within a node, specifying offsets and shapes.

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: [{
    id: 'node1',
    offsetX: 90,
    offsetY: 60,
    width: 100,
    height: 40,
    annotations: [{ content: 'Node 1' }],
    ports: [{
      id: 'port1',
      offset: { x: 1, y: 0.5 },
      visibility: ej.diagrams.PortVisibility.Visible,
      shape: 'Circle',
      width: 10,
      height: 10
    }]
  }]
});
diagram.appendTo('#diagram');
{% endhighlight %}
{% endtabs %}

### Applying Layouts

In `mxGraph`, layouts like hierarchical are applied by using specific layout classes.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
var v1 = graph.insertVertex(parent, null, 'Start', 0, 0, 100, 40);
var v2 = graph.insertVertex(parent, null, 'Middle', 0, 0, 100, 40);
var v3 = graph.insertVertex(parent, null, 'End', 0, 0, 100, 40);
graph.insertEdge(parent, null, '', v1, v2);
graph.insertEdge(parent, null, '', v2, v3);
var layout = new mxHierarchicalLayout(graph, mxConstants.DIRECTION_NORTH);
layout.execute(parent);
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, layouts are defined in the diagram using `layout` property.

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
ej.diagrams.Diagram.Inject(ej.diagrams.HierarchicalTree);
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  layout: {
    type: 'HierarchicalTree',
    horizontalSpacing: 25,
    verticalSpacing: 35
  },
  nodes: [
    {
      id: 'node1',
      annotations: [{ content: 'Parent' }]
    },
    {
      id: 'node2',
      annotations: [{ content: 'Child 1' }]
    },
    {
      id: 'node3',
      annotations: [{ content: 'Child 2' }]
    }
  ],
  connectors: [
    { id: 'connector1', sourceID: 'node1', targetID: 'node2' },
    { id: 'connector2', sourceID: 'node1', targetID: 'node3' }
  ]
});
diagram.appendTo('#diagram');
{% endhighlight %}
{% endtabs %}

### Saving and Loading Diagrams

In `mxGraph`, the graph model is serialized and deserialized using XML.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
// Save the graph model to XML string
function saveGraph(graph) {
  const encoder = new mxCodec();
  const node = encoder.encode(graph.getModel());
  const xml = mxUtils.getXml(node);
  return xml;
}

// Load the graph model from XML string
function loadGraph(graph, xml) {
  const doc = mxUtils.parseXml(xml);
  const codec = new mxCodec(doc);
  codec.decode(doc.documentElement, graph.getModel());
  graph.refresh();
}
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, diagram states are saved and loaded using JSON strings for persistence.

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
const savedDiagram = diagram.saveDiagram(); // returns JSON string
diagram.loadDiagram(savedDiagram); // restores diagram
{% endhighlight %}
{% endtabs %}

### Event Handling

In `mxGraph`, you handle events by adding listeners to the graph.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
graph.addListener(mxEvent.CLICK, function(sender, evt) {
  const cell = evt.getProperty('cell');
  if (cell != null) {
    console.log('Cell clicked:', cell.value);
  }
});
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, event handling is configured with function callbacks in the diagram.

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  click: function(args) {
    if (args.element && args.element.annotations) {
      console.log('Node clicked:', args.element.annotations[0].content);
    }
  }
});
diagram.appendTo('#diagram');
{% endhighlight %}
{% endtabs %}

### Diagram Canvas Configuration and Customization

Configuring the `mxGraph` diagram canvas often involves manual calculations and numerous API calls. In comparison, Syncfusion® JavaScript Diagram provides a more straightforward approach with built-in properties and methods.

#### Grid Lines

In `mxGraph`, enabling and customizing grid lines involves setting various properties.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
graph.setGridEnabled(true);
graph.setGridSize(10);
graph.view.gridColor = '#e0e0e0';
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, grid lines are configured using the [snapSettings](api/diagram/index-default#snapsettings) property, allowing for a straightforward setup while also supporting additional customization options that are self-explanatory:

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px',
    snapSettings: {
        constraints: ej.diagrams.SnapConstraints.ShowLines,
        horizontalGridlines: { lineColor: '#e0e0e0', lineDashArray: '2,2' },
        verticalGridlines: { lineColor: '#e0e0e0', lineDashArray: '2,2' }
    }
});
diagram.appendTo('#element');
{% endhighlight %}
{% endtabs %}


#### Ruler

To use rulers in `mxGraph`, you'll need to undertake custom development since it lacks native support for this feature. In contrast, Syncfusion® Diagram provides built-in ruler support that can be easily activated with a straightforward property setting:

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px',
    rulerSettings: { showRulers: true }
});
diagram.appendTo('#element');
{% endhighlight %}
{% endtabs %}

#### Page Settings

In `mxGraph`, setting up page dimensions and appearance involves setting properties on the graph object like `pageVisible`, `pageBreaksVisible`, and `setPageSize`.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
graph.pageVisible = true;
graph.pageBreaksVisible = true;
graph.setPageSize(new mxRectangle(0, 0, 800, 600));
graph.container.style.backgroundColor = '#f5f5f5';
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram (ej2), the [pageSettings](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#pagesettings) property provides a straightforward way to configure page settings, including support for multiple pages and showing page breaks.

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px',
    pageSettings: {
        width: 800, height: 600,
        background: { color: '#f5f5f5' },
        showPageBreaks: true,
        multiplePage: true // Enables multiple page feature
    }
});
diagram.appendTo('#element');
{% endhighlight %}
{% endtabs %}


#### Scroll Settings

In `mxGraph`, scroll behavior is primarily handled through the container’s CSS and enabling panning. There are no built-in APIs for configuring advanced scroll behavior like auto-scroll or scroll boundaries.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
// Basic scroll setup via container styling and panning
graph.setPanning(true);
graph.panningHandler.useLeftButtonForPanning = true;
graph.container.style.overflow = 'auto';
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, the [scrollSettings](https://ej2.syncfusion.com/javascript/documentation/api/diagram/index-default#scrollsettings) property provides detailed control over scroll behavior, including auto-scroll, scroll limits, and scroll frequency.

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
var diagram = new ej.diagrams.Diagram({
width: '100%', height: '600px',
scrollSettings: {
scrollLimit: 'Infinity',
canAutoScroll: true,
autoScrollBorder: { left: 20, top: 20, right: 20, bottom: 20 },
autoScrollFrequency: 100
}
});
diagram.appendTo('#element');
{% endhighlight %}
{% endtabs %}

### Symbol Palette 

Unlike Syncfusion® JavaScript Diagram, `mxGraph` does not offer a built-in SymbolPalette UI component. You must manually build a palette using HTML elements, style them, and use mxUtils.makeDraggable() for drag-and-drop integration. Below is an example of easily creating a palette with Syncfusion® JavaScript Diagram.

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
const palette = new ej.diagrams.SymbolPalette({
  palettes: [{
    id: 'flowShapes',
    expanded: true,
    symbols: [
      { id: 'Terminator', shape: { type: 'Flow', shape: 'Terminator' } },
      { id: 'Process', shape: { type: 'Flow', shape: 'Process' } }
    ],
    title: 'Flow Shapes'
  }]
});
palette.appendTo('#palette');
{% endhighlight %}
{% endtabs %}

### Diagram Interactions

Syncfusion® JavaScript Diagram provides easy support for key interactions like zooming, panning, selection, dragging, resizing, rotating, and keyboard navigation with little setup. Its user-friendly API and clear properties simplify implementation. In contrast, `mxGraph` usually needs more manual setup and extra coding to achieve similar outcomes.

#### Zooming

In `mxGraph`, implementing zoom functionality involves invoking specific methods and managing the zoom scale manually.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
// Zoom in
graph.zoomIn();

// Zoom out
graph.zoomOut();

// Zoom to specific scale
graph.zoomTo(1.5); // 150% zoom
{% endhighlight %}
{% endtabs %}

With Syncfusion® JavaScript Diagram, you can easily control zooming using built-in methods or through the user interface.

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
// Zoom in
diagram.zoomTo({ type: 'ZoomIn', zoomFactor: 0.2 });

// Zoom out
diagram.zoomTo({ type: 'ZoomOut', zoomFactor: 0.2 });

// Zoom to specific scale
diagram.zoomTo({ type: 'Zoom', zoomFactor: 1.5 }); // 150% zoom
{% endhighlight %}
{% endtabs %}

#### Panning

In `mxGraph`, panning is enabled by setting the panning handler and configuring the mouse button for panning:

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
// Enable panning
graph.setPanning(true);
graph.panningHandler.useLeftButtonForPanning = true;
{% endhighlight %}
{% endtabs %}


In Syncfusion® JavaScript Diagram, to enable panning, you need to set the tool property to include ZoomPan:

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
// Enable panning
diagram.tool = ej.diagrams.DiagramTools.ZoomPan;
{% endhighlight %}
{% endtabs %}

#### Undo / Redo

In `mxGraph`, enabling undo and redo requires setting up an mxUndoManager and wiring it to the model events.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
const undoManager = new mxUndoManager();
graph.getModel().addListener(mxEvent.UNDO, undoManager);
undoManager.undo();
undoManager.redo();
{% endhighlight %}
{% endtabs %}

Syncfusion® JavaScript Diagram provides built-in undo and redo commands, requiring no additional setup:

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
diagram.undo();
diagram.redo();
{% endhighlight %}
{% endtabs %}

In addition to the interactions showcased above, Syncfusion® JavaScript Diagram supports many more intuitive and powerful interactions—such as snapping, constraints, drag-and-drop from palettes, tooltips, and context menus. All of these can be enabled or customized with minimal configuration, making it easy to deliver a seamless and interactive diagramming experience.

N> To know more about the Interactions in Syncfusion® JavaScript Diagram, refer to the [documentation](https://ej2.syncfusion.com/javascript/documentation/diagram/interaction).

### Keyboard Interactions

Keyboard shortcuts enhance user productivity by allowing quick access to common actions. While both `mxGraph` and Syncfusion® JavaScript Diagram support keyboard interactions, Syncfusion® offers a more extensive set of built-in commands and easier customization.

The following table compares common keyboard shortcuts and their implementations in `mxGraph` and Syncfusion® JavaScript Diagram:

| Action            | mxGraph Implementation                                                       | Syncfusion® JavaScript Diagram Implementation                                            |
|-------------------|--------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| **Select All**     | Requires custom key handler setup using `mxKeyHandler` or `mxDefaultKeyHandler`  | Built-in support: `Ctrl + A` selects all nodes/connectors                              |
| **Copy**           | Custom implementation needed using `mxClipboard.copy` and key handler            | Built-in support: `Ctrl + C` copies selected elements                                   |
| **Paste**          | Custom implementation needed using `mxClipboard.paste` and key handler           | Built-in support: `Ctrl + V` pastes copied elements                                     |
| **Cut**            | Custom implementation needed using `mxClipboard.cut` and key handler             | Built-in support: `Ctrl + X` cuts selected elements                                     |
| **Undo**           | Requires setting up `mxUndoManager` and binding `Ctrl + Z` manually              | Built-in support: `Ctrl + Z` undoes the last action                                     |
| **Redo**           | Requires setting up `mxUndoManager` and binding `Ctrl + Y` manually              | Built-in support: `Ctrl + Y` redoes the last undone action                              |
| **Delete**         | Custom implementation needed to bind `Delete` key to remove selected elements    | Built-in support: `Delete` key removes selected elements                                |
| **Label Editing**  | Requires custom event handling for label editing initiation and termination      | Built-in support: `F2` to start editing, `Esc` to cancel                                |
| **Zoom In/Out**    | Custom implementation needed to bind `Ctrl + MouseWheel` for zooming             | Built-in support: `Ctrl + MouseWheel` zooms in/out                                      |
| **Nudge Elements** | Custom implementation needed to move elements with arrow keys                    | Built-in support: Arrow keys move elements by 1px; `Shift + Arrow` moves by 5px         |
| **Group/Ungroup**  | Custom implementation needed to group/ungroup elements with key bindings         | Built-in support: `Ctrl + G` to group, `Ctrl + Shift + U` to ungroup                    |
| **Rotate Elements**| Custom implementation needed to rotate elements with key bindings                | Built-in support: `Ctrl + R` rotates clockwise, `Ctrl + L` rotates counter-clockwise    |
| **Flip Elements**  | Custom implementation needed to flip elements with key bindings                  | Built-in support: `Ctrl + H` flips horizontally, `Ctrl + J` flips vertically            |
| **Align Text**     | Custom implementation needed to align text with key bindings                    | Built-in support: Use `Ctrl + Shift + L/C/R/J` for horizontal and `Ctrl + Shift + E/M/V` for vertical text alignment. |

### Enhanced Interactions in Syncfusion JavaScript Diagram over mxGraph

Syncfusion® JavaScript Diagram offers a comprehensive set of built-in commands for common diagramming tasks. Unlike `mxGraph`, which often needs lengthy manual code, these commands can be used with minimal coding, enhancing productivity and maintainability.

#### Fit to Page

In `mxGraph`, fitting a diagram to the page involves calculating bounds, determining scale, and manually adjusting the viewport.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
const bounds = graph.getGraphBounds();
const scale = Math.min(container.clientWidth / bounds.width, container.clientHeight / bounds.height);
graph.view.setScale(scale);
graph.view.setTranslate(-bounds.x, -bounds.y);
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, this can be achieved with a single method call:

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
diagram.fitToPage();
{% endhighlight %}
{% endtabs %}

#### Bring to Center

Centering an element in `mxGraph` involves manual calculations based on the element’s bounds and viewport dimensions.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
const bounds = graph.getCellBounds(cell);
const dx = container.clientWidth / 2 - (bounds.x + bounds.width / 2);
const dy = container.clientHeight / 2 - (bounds.y + bounds.height / 2);
graph.view.setTranslate(dx, dy);
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, this is simplified with a direct API method:

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
diagram.bringToCenter('node1');
{% endhighlight %}
{% endtabs %}

#### Bring into View

In `mxGraph`, bringing an element into view can be done using the `scrollCellToVisible` method, which scrolls the diagram to reveal the specified cell.

{% tabs %}
{% highlight js tabtitle="mxGraph" %}
graph.scrollCellToVisible(cell);
{% endhighlight %}
{% endtabs %}

In Syncfusion® JavaScript Diagram, bringing a node into view is very similar to doing so in `mxGraph`.

{% tabs %}
{% highlight js tabtitle="Syncfusion" %}
diagram.bringIntoView('node1');
{% endhighlight %}
{% endtabs %}

In addition to the commands shown above, Syncfusion® JavaScript Diagram provides a full set of built-in commands for easy diagram editing and interaction. These commands cover common tasks for arranging, transforming, navigating, and managing diagram elements, accessible via straightforward API calls or user-friendly keyboard shortcuts.

N> To learn more about the built-in commands in Syncfusion® JavaScript Diagram, refer to our [documentation](https://ej2.syncfusion.com/javascript/documentation/diagram/commands).