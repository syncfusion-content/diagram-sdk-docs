var connectors = [

    {
        id: 'connector1',
        type: 'Bezier',
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
        segments: [{
            type: 'Bezier',
        }],
        sourcePoint: {
            x: 50,
            y: 100
        },
        targetPoint: {
            x: 150,
            y: 200
        },
    },
];

var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors
}, '#element');

