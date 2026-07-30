


import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
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
        // Sets the Annotation for the Node
        annotations: [{
            // Sets the text to be displayed
            content: 'Annotation'
        }]
};
let connector: connectorModel = {
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 400,
            y: 300
        },
        type: 'Orthogonal',
        style: {
            strokeColor: '#6BA5D7'
        },
        // Sets the Annotation for the Connector
        annotations: [{
            // Sets the text to be diaplayed
            content: 'Annotation'
        }]
}
// initialize diagram component
let diagram: Diagram = new Diagram({
        width: '100%',
        height: '600px',
        // Add node
        nodes: [node],
        connectors: [connector]
});
// render initialized diagram
diagram.appendTo('#element');


