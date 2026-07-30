var nodes = [
  {
    // Position of the node
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    annotations: [
      { content: 'draw port', offset: { x: 0, y: 0.7 } },
      { content: 'drag port', offset: { x: 1, y: 0.7 } },
    ],
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    ports: [
      {
        id: 'p1',
        offset: { x: 0, y: 0.5 },
        visibility: ej.diagrams.PortVisibility.Visible,
        constraints:
          ej.diagrams.PortConstraints.Default |
          ej.diagrams.PortConstraints.Draw,
      },
      {
        id: 'p2',
        offset: { x: 1, y: 0.5 },
        visibility: ej.diagrams.PortVisibility.Visible,
        constraints:
          ej.diagrams.PortConstraints.Default |
          ej.diagrams.PortConstraints.Drag,
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
    annotations: [
      {
        content: 'draw port',
        alignment: 'After',
        displacement: { x: 0, y: 10 },
      },
      {
        content: 'drag port',
        alignment: 'After',
        offset: 0.7,
        displacement: { x: 0, y: 10 },
      },
    ],
    ports: [
      {
        id: 'p1',
        offset: 0.5,
        visibility: ej.diagrams.PortVisibility.Visible,
        constraints:
          ej.diagrams.PortConstraints.Default |
          ej.diagrams.PortConstraints.Draw,
      },
      {
        id: 'p2',
        offset: 0.8,
        visibility: ej.diagrams.PortVisibility.Visible,
        constraints:
          ej.diagrams.PortConstraints.Default |
          ej.diagrams.PortConstraints.Drag,
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
    click: function (args) {
      console.log('clicked');
      //customize
    },
    elementDraw: function (args) {
      //Prevents connector drawn from connector port
      if (
        args.state === 'Start' &&
        args.source instanceof ej.diagrams.Connector
      ) {
        args.cancel = true;
      }
      //customize
    },
    positionChange: function (args) {
      console.log('Position change');
      //customize
    },
    connectionChange: function (args) {
      console.log('Connection change');
      //customize
    },
  },
  '#element'
);
