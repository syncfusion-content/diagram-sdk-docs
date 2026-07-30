var node1 = { 
    id: 'node1',
    width: 100, height: 100,
    offsetX: 150, offsetY: 150,
    annotations: [{ content: 'node1' } ], 
};
var node2= {
    id: 'node2', 
    width: 100, height: 100, 
    offsetX: 650, offsetY: 150,
    annotations: [{ content: 'node2' } ],
};
var node3 = {
    id: 'node3', 
    width: 100, height: 100,
     offsetX: 490, offsetY: 290,
     annotations: [{ content: 'node3' } ],
};
var connector1 = {
    id: 'connector1',sourceID:"node1",targetID:"node2",
    constraints: ej.diagrams.ConnectorConstraints.Default | ej.diagrams.ConnectorConstraints.AllowDrop
};
var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1000,
    enableConnectorSplit:true,
    nodes: [node1, node2, node3],
    connectors: [connector1]
}, '#element');


