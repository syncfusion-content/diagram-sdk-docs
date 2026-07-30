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
      relationship: 'Association',
      //Define type of association
      associationType: 'Default',
    },
  },
  {
    id: 'connector2',
    //Define connector start and end points
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 400, y: 300 },
    type: 'Straight',
    shape: {
      type: 'UmlClassifier',
      relationship: 'Association',
      associationType: 'BiDirectional',
    },
  },
];
//Initializes diagram control
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  //Add connector
  connectors: connectors,
});
diagram.appendTo('#element');
