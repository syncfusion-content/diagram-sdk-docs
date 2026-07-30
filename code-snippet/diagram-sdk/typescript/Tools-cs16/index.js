var nodes = [{
        id: 'Start',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
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
        offsetY: 140,
        annotations: [{
            id: 'label2',
            content: 'End'
        }],
        shape: {
            type: 'Flow',
            shape: 'process'
        },
        annotations: [{
            content: 'var i = 0;'
        }]
    }
];

var connector = {
    id: "connector1",
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
    width: 700, height: 700,
    nodes: nodes,
    connectors: [connector], created: () => {
    tool:DiagramTools.DrawOnce | DiagramTools.ZoomPan;
    }
});
diagram.appendTo('#element');

