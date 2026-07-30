


import {Diagram,ConnectorModel} from '@syncfusion/ej2-diagrams';
let connectors: ConnectorModel[] = [{
    id: 'connector2',
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
    // Defines the type of the segment
    type: 'Bezier',
    segments: [{
        type: 'Bezier',
        // Length and angle between the source point and the first control point
        vector1: {
            distance: 100,
            angle: 90
        },
        // Length and angle between the target point and the second control point
        vector2: {
            distance: 45,
            angle: 270
        }
    }],
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
}, ];
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
});
diagram.appendTo('#element');



