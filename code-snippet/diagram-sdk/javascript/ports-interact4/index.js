var nodes = [
  {
    // Position of the node
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    annotations: [{ content: 'Hover over port to see tooltip' }],
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    ports: [
      {
        offset: { x: 1, y: 0.5 },
        visibility: ej.diagrams.PortVisibility.Visible,
        constraints:
          ej.diagrams.PortConstraints.Default |
          ej.diagrams.PortConstraints.ToolTip,
        tooltip: { content: 'node port tooltip' },
      },
    ],
  },
];

var connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 120 },
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: ej.diagrams.PortVisibility.Visible,
        constraints:
          ej.diagrams.PortConstraints.Default |
          ej.diagrams.PortConstraints.ToolTip,
        tooltip: { content: 'connector port tooltip' },
      },
    ],
  },
];

// initialize Diagram component

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: nodes,
    connectors: connectors,
  },
  '#element'
);
