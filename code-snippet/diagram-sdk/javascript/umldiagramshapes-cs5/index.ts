import { Diagram, ConnectorModel } from '@syncfusion/ej2-diagrams';
let connectors: ConnectorModel[] = [
  {
    id: 'connector1',
    //Define connector start and end points
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      //Set an relationship for connector
      relationship: 'Aggregation',
    },
  },
];
//Initializes diagram control
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  connectors: connectors,
});
diagram.appendTo('#element');
