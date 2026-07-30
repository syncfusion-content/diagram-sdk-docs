var nodes = [
  {
    id: 'node1',
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [{ content: 'margin:{left:50}' }],
    ports: [
      {
        id: 'nodePort',
        offset: { x: 1, y: 0 },
        visibility: ej.diagrams.PortVisibility.Visible,
        horizontalAlignment: 'Left',
        verticalAlignment: 'Top',
        margin: { left: 50 },
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
  },
  '#element'
);
