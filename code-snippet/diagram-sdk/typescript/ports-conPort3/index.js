var connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 200 },
    targetPoint: { x: 300, y: 220 },
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: ej.diagrams.PortVisibility.Visible,
        alignment: 'Before',
      },
    ],
  },
  {
    id: 'connector2',
    sourcePoint: { x: 320, y: 200 },
    targetPoint: { x: 500, y: 220 },
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: ej.diagrams.PortVisibility.Visible,
        alignment: 'Center',
      },
    ],
  },
  {
    id: 'connector3',
    sourcePoint: { x: 520, y: 200 },
    targetPoint: { x: 700, y: 220 },
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: ej.diagrams.PortVisibility.Visible,
        alignment: 'After',
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
