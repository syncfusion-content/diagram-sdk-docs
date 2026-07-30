var nodes = [{
       id: 'node',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
    },
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
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
    sourceID: 'node',
    targetID: 'node1',
    // Set Source Padding value
    sourcePadding:20,
    // Set Target Padding value
    targetPadding:20
};


var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '350px',
    getNodeDefaults: function(node) {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
    nodes: nodes,
    connectors: [connector]
}, '#element');

