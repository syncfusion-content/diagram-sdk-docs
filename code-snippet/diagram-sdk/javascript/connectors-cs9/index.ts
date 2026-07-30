


import {
    Diagram,
    ConnectorModel,
    OrthogonalSegmentModel,
    ConnectorConstraints,
    ConnectorEditing
} from '@syncfusion/ej2-diagrams';

Diagram.Inject(ConnectorEditing);
let connectors: ConnectorModel[] = [{
        id: "connector1",
        // Define the type of the segment
        type: 'Orthogonal',
        segments: [
            {
                type: 'Orthogonal',
                direction: 'Bottom',
                length: 150,
              },
              {
                type: 'Orthogonal',
                direction: 'Right',
                length: 150,
              },
              {
                type: 'Orthogonal',
                direction: 'Top',
                length: 100,
              },
              {
                type: 'Orthogonal',
                direction: 'Left',
                length: 100,
              },
        ],
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
            x: 300,
            y: 100,
          },
          targetPoint: {
            x: 350,
            y: 150,
          },
         constraints:ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,

    },]

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
});

diagram.appendTo('#element');



