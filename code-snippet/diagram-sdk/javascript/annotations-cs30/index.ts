


import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
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
    //Sets the annotation for the node
    annotations: [{
        // Sets the template for a node
        template: '<div><input type="button" value="Submit"></div>'
    }]
};
// A connector is created and stored in connectors array.
let connector: ConnectorModel = {
    id: 'connector1',
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 400,
        y: 300
    },
    type: 'Orthogonal',
    //Sets the annotation for the node
    annotations: [{
        // Sets the template for a node
        template: '<div><input type="button" value="Submit"></div>'
    }]
};
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node],
    // Add connector
    connectors: [connector],
});
// render initialized diagram
diagram.appendTo('#element');



