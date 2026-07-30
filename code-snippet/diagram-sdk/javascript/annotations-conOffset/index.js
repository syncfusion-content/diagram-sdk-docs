var connectors = [
  {
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 300, y: 200 },
    type: 'Straight',
    //Path annotation offset
    annotations: [{ content: 'annotation', offset: 0.2 }],
  },
];
// initialize Diagram component

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    connectors: connectors,
  },
  '#element'
);