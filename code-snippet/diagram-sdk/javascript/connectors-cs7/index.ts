


import {Diagram,ConnectorModel,StraightSegmentModel} from '@syncfusion/ej2-diagrams';

let connectors: ConnectorModel = {
    id: "connector1",
    type: 'Straight',
    segments: [{
        // Defines the segment type of the connector
        type: 'Straight'
    }],
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
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: [connectors],
});

diagram.appendTo('#element');



