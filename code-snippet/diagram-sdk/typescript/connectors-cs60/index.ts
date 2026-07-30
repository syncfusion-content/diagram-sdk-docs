


import {
    Diagram,
    ConnectorModel,
    OrthogonalSegmentModel,ConnectorConstraints,ConnectorEditing
} from '@syncfusion/ej2-diagrams';

Diagram.Inject(ConnectorEditing);
let connectors: ConnectorModel[] = [{
    id: "connector1",
    type:"Orthogonal",
    hitPadding:40,
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
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    constraints:ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    }]

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
});

diagram.appendTo('#element');



