


import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: true,
    style: { fill: '#6AA8D7', strokeColor: 'white',strokeWidth:5 , strokeDashArray:'3',opacity:0.7},
    // Text(label) added to the node
};
let node2: NodeModel = {
    // Position of the node
    offsetX: 450,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: false,
    style: { fill: '#6AA8D7', strokeColor: 'white',strokeWidth:5 , strokeDashArray:'3',opacity:0.7},
    // Text(label) added to the node
};
// initialize Diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node,node2]
});
// render initialized Diagram
diagram.appendTo('#element');



