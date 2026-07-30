

import {Diagram,ConnectorModel,StraightSegmentModel} from '@syncfusion/ej2-diagrams';
let connectors: ConnectorModel = {
    id: "connector1",
    // Defines the segment type of the connector
    segments: [{
        type: 'Straight',
        // Defines the point of the segment
        point: {
            x: 100,
            y: 150
        }
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
    type: 'Straight',
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



