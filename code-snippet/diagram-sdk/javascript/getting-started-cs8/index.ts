


import { Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';

let nodes: NodeModel[] = [
    {
        id: 'Start', width: 140, height: 50, offsetX: 300, offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
        shape: { type: 'Flow', shape: 'Terminator'}
    },
    {
        id: 'Init', width: 140, height: 50, offsetX: 300, offsetY: 140,
        shape: { type: 'Flow', shape: 'Process' },
        annotations: [{ content: 'var i = 0;' }]
    }
];
let connectors: ConnectorModel = {
    // Unique name for the connector
    id: "connector1",
    // Source and Target node's name to which connector needs to be connected.
    sourceID: "Start",
    targetID: "Init",
    type: 'Orthogonal'
};

let diagram: Diagram = new Diagram({
    width: '100%', height: '600px', nodes: nodes, connectors: [connectors]
});

diagram.appendTo('#element');



