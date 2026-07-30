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
        id: 'nodePort',
        offset: { x: 1, y: 0.5 },
        visibility: ej.diagrams.PortVisibility.Visible,
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
        id: 'connectorPort',
        offset: 0.5,
        visibility: ej.diagrams.PortVisibility.Visible,
      },
    ],
  },
  {
    id: 'connector2',
    sourceID: 'node1',
    //connector id
    targetID: 'connector1',
    sourcePortID: 'nodePort',
    //Connector port id
    targetPortID: 'connectorPort',
    type: 'Orthogonal',
    ports: [
      {
        offset: 0.5,
        visibility: ej.diagrams.PortVisibility.Visible,
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
