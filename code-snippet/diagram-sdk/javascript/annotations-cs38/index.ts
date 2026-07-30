


import { Diagram, NodeModel, AnnotationConstraints } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the multiple annotation for the node
    annotations: [{
            content: 'Left',
            offset: {
                x: 0.12,
                y: 0.1
            }
        },
        {
            content: 'Center',
            offset: {
                x: 0.5,
                y: 0.5
            }
        },
        {
            content: 'Right',
            offset: {
                x: 0.82,
                y: 0.9
            }
        }
    ]
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



