


import {Diagram,ConnectorModel} from '@syncfusion/ej2-diagrams';

let connectors: ConnectorModel[] = [

    {
        id: 'connector1',
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
        type: 'Bezier',
        segments: [{
            // Defines the type of the segment
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

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
});

diagram.appendTo('#element');



