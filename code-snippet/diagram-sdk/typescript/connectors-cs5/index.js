var port1 = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
    }
}
port1.shape = 'Circle';
port1.id = 'nodeportnew'
port1.visibility = ej.diagrams.PortVisibility.Visible;
port1.id = 'port';
port1.offset = {
    x: 1,
    y: 1
};
var port2 = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
    }
};
port2.offset = {
    x: 1,
    y: 0.5
};
port2.id = 'port1';
port2.visibility = ej.diagrams.PortVisibility.Visible;
port2.shape = 'Circle';
var port3 = {
    style: {
        strokeColor: '#366F8C',
        fill: '#366F8C'
    }
};
port3.offset = {
    x: 0,
    y: 1
};
port3.id = 'newnodeport1';
port3.visibility = ej.diagrams.PortVisibility.Visible;
port3.shape = 'Circle';
var nodes = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        ports: [port1]
    },
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        ports: [port2, port3]
    },
];

var connectors = {
    id: "connector1",
    sourcePoint: {
        x: 100,
        y: 100
    },
    type: 'Orthogonal',
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


