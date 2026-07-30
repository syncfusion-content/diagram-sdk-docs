var connectors = [

    {
        id: 'connector3',
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
            point1: {
                x: 100,
                y: 100
            },
            point2: {
                x: 200,
                y: 200
            }
        }],
        sourcePoint: {
            x: 100,
            y: 200
        },
        targetPoint: {
            x: 200,
            y: 100
        },
    },
];

var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors
}, '#element');

