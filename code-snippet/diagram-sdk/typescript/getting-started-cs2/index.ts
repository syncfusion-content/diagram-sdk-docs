


import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [{
    // Unique name for the node
    id: "Start",
    // Position of the node
    offsetX: 300,
    offsetY: 50,
    // Size of the node
    width: 140,
    height: 50,
}];
// initialize Diagram component
let diagram: Diagram = new Diagram({
    width: '100%', height: '600px',
    // Add node
    nodes: nodes
});
// render initialized Diagram
diagram.appendTo('#element');



