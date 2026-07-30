var nodes = [
  {
    // Position of the node
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
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
          ej.diagrams.PortConstraints.Draw,
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
    getConnectorDefaults: function (connector) {
      connector.type = 'Bezier';
      return connector;
    },
  },
  '#element'
);
