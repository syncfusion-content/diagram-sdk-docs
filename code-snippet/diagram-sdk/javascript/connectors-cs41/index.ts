


import { Diagram, ConnectorModel, ConnectorEditing, ConnectorConstraints } from '@syncfusion/ej2-diagrams';

Diagram.Inject(ConnectorEditing);



let connector2: ConnectorModel = {};

    connector2.id = 'connector2';

    // Define the type of the segment

    connector2.type = 'Orthogonal';

    connector2.sourcePoint = { x: 250, y: 250 };

    connector2.targetPoint = { x: 350, y: 350 };

    connector2.segments = [{

            type: 'Orthogonal',

             // Defines the direction for the segment lines

            direction: "Right",

              // Defines the length for the segment lines

            length:70

            },

            {

            type:'Orthogonal',

            direction: "Bottom",

            length: 20

            }]



let diagram: Diagram = new Diagram({

    width: '900px', height: '500px', connectors: [connector2],segmentThumbShape: 'Square',

    getConnectorDefaults: function (connector: ConnectorModel) {

    connector.constraints = ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;

    }

});

diagram.appendTo('#element');



