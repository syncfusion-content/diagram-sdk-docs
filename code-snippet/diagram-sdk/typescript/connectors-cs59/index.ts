


import {
    Diagram,NodeModel,ConnectorModel,ConnectorConstraints
} from '@syncfusion/ej2-diagrams';

let node1: NodeModel = {
    id: 'node1',
    width: 100, height: 100,
    offsetX: 150, offsetY: 150,
    annotations: [{ content: 'node1' }]
};
let node2: NodeModel = {
    id: 'node2',
    width: 100, height: 100,
    offsetX: 650, offsetY: 150,
    annotations: [{ content: 'node2' }]
};
let node3: NodeModel = {
    id: 'node3',
    width: 100, height: 100,
    offsetX: 490, offsetY: 290,
    annotations: [{ content: 'node3' }]
};
let connector1: ConnectorModel = {
    id: 'connector1',sourceID:"node1",targetID:"node2",
    constraints: ConnectorConstraints.Default | ConnectorConstraints.AllowDrop
};
let diagram:Diagram = new Diagram({
    width: 1500, height: 1000,
    enableConnectorSplit:true,
    nodes: [node1, node2, node3],
    connectors: [connector1]
});
diagram.appendTo('#element');



