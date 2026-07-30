var node = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [{ content: 'Task1' }]
};

var node2 = {
    id: 'node2',
    // Position of the node
    offsetX: 300,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [{ content: 'Task2' }]
};

var connector = {
    sourceID: 'node1', targetID: 'node2' , type: 'Orthogonal', style: { strokeColor: '#6BA5D7', strokeWidth: 2 },
    annotations: [{ content: '0', offset: 0 }, { content: '1', offset: 1}]
};


// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node, node2], connectors: [connector]
    }, '#element');

