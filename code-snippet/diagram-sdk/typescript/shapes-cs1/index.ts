


import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type of the shape as text
    shape: {
        type: 'Text',
        content: 'Text Element'
    },
    //Customizes the appearances such as text, font, fill, and stroke.
    style: {
        strokeColor: 'none',
        fill: 'none',
        color: 'black',
        textAlign: 'Center'
    }
};
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');
diagram.select([diagram.nodes[0]]);



