


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
        // Text(label) added to the node
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
        // Shape for the node
        shape: { type: 'Flow', shape: 'Terminator'},
        //To define border style for the node.
        borderColor:'orange',borderWidth:10,
        //To define style for the node.
        style:{fill:'red',strokeColor:'green',strokeWidth:5,strokeDashArray:'2 2'}
            }];
// initialize Diagram component
let diagram: Diagram = new Diagram({
    width: '100%', height: '600px',
    // Add node
    nodes: nodes
});
// render initialized Diagram
diagram.appendTo('#element');



