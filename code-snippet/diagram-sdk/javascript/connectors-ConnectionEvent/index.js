var nodes = [
  {
    id: 'node1',
    offsetX: 200,
    offsetY: 200,
    width: 120,
    height: 60,
    style: { fill: 'skyblue' },
  },
  {
    id: 'node2',
    offsetX: 500,
    offsetY: 200,
    width: 120,
    height: 60,
    style: { fill: 'skyblue' },
  },
];

var connectors = [
  {
    id: 'connector1',
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
    sourceID: 'node1',
    targetID: 'node2',
  },
];

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: nodes,
    connectors: connectors,
    connectionChange: function (args) {
      if (args.state === 'Changed') {
        console.log('connectionChange');
        //Customize
      }
    },
  },
  '#element'
);
