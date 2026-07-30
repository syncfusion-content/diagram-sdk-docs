var nodes = [
  {
    id: 'node1',
    // Position of the node
    offsetX: 450,
    offsetY: 200,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    ports: [
      {
        id: 'port1',
        offset: { x: 0, y: 0 },
        visibility: ej.diagrams.PortVisibility.Visible,
      },
    ],
  },
  {
    id: 'node2',
    // Position of the node
    offsetX: 270,
    offsetY: 300,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    ports: [
      {
        id: 'port3',
        offset: { x: 0.5, y: 0.5 },
        visibility: ej.diagrams.PortVisibility.Visible,
        //Sets the connection direction as Left
        connectionDirection: 'Left',
      },
    ],
  },
];

let connectors = [
  {
    id: 'connector1',
    sourceID: 'node2',
    targetID: 'node1',
    type: 'Orthogonal',
    sourcePortID: 'port3',
    targetPortID: 'port1',
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
