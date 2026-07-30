var connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 200 },
    targetPoint: { x: 100, y: 320 },
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: ej.diagrams.PortVisibility.Visible,
        //Displacement
        displacement: { x: 50, y: 0 },
        alignment: 'Before',
      },
    ],
  },
  {
    id: 'connector2',
    sourcePoint: { x: 300, y: 200 },
    targetPoint: { x: 500, y: 220 },
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: ej.diagrams.PortVisibility.Visible,
        //Displacement
        displacement: { x: 0, y: 50 },
        alignment: 'Before',
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
