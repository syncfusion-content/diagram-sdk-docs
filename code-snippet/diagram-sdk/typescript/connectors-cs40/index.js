var nodeport = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
    }
};
nodeport.shape = 'Circle';
nodeport.visibility = ej.diagrams.PortVisibility.Visible;
nodeport.id = 'port';
nodeport.offset = {
    x: 0,
    y: 0.5
};
var port2 = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
    }
}
port2.offset = {
    x: 0,
    y: 0.5
};
port2.id = 'port1';
port2.visibility = ej.diagrams.PortVisibility.Visible;
port2.shape = 'Circle';
var nodes = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        ports: [nodeport]
    },
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        ports: [port2]
    },
];

var connectors = {
    id: "connector1",
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    type: 'Orthogonal',
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
    sourceID: 'node',
    targetID: 'node1',
    sourcePortID: 'port',
    targetPortID: 'port1'
}

var diagram = new ej.diagrams.Diagram({
    width: 900,
    height: 900,
    nodes: nodes,
    connectors: [connectors],
    getNodeDefaults: (node) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
}, '#element');


