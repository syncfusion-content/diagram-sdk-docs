var connectors = [
  {
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 500, y: 100 },
    type: 'Straight',
    //Path annotation offset
    annotations: [
      {
        content: 'annotation',
        offset: 0.2,
        alignment: 'After',
        displacement: { x: 50, y: 50 },
      },
    ],
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
