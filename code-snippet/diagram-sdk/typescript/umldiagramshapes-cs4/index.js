var diagram;

var connectors = [
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
diagram = new ej.diagrams.Diagram(
  {
    width: '650px',
    height: '350px',
    connectors: connectors,
  },
  '#element'
);
