var nodes = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 100,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
        shape: {
            type: 'Flow',
            shape: 'Terminator'
        }
    },
    {
        id: 'Init',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 300,
        shape: {
            type: 'Flow',
            shape: 'Process'
        },
        annotations: [{
            content: 'var i = 0;'
        }]
    }
];

var connector = {
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
    sourceID: "Start",
    targetID: "Init",
    connectorSpacing: 7,
    type: 'Orthogonal'
};


var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '350px',
    getNodeDefaults: function(node) {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        return node;
    },
    nodes: nodes,
    connectors: [connector]
}, '#element');

