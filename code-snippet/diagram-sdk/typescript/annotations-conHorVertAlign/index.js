var connectors = [
  {
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 500, y: 300 },
    type: 'Orthogonal',
    //Path annotation offset
    annotations: [
      {
        content: 'annotation',
        horizontalAlignment: 'Right',
        verticalAlignment: 'Bottom',
        offset: 0.2,
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
