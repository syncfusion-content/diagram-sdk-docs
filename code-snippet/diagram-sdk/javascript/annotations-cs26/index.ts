


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
    // Sets the annotation for the node
    annotations: [{
        content: 'Task1'
    }]
};
let node2: NodeModel = {
    id: 'node2',
    // Position of the node
    offsetX: 300,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        content: 'Task2'
    }]
};
let connector: connectorModel = {
    sourceID: 'node1',
    targetID: 'node2',
    type: 'Orthogonal',
    style: {
        strokeColor: '#6BA5D7',
        strokeWidth: 2
    },
    // Sets the annotation for the connector
    annotations: [{
        content: '0',
        // Sets the offset for the content
        offset: 0
    }, {
        content: '1',
        // Sets the offset for the content
        offset: 1
    }]
};
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node, node2],
    connectors: [connector]
});
// render initialized diagram
diagram.appendTo('#element');



