var nodes = [
  {
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [
      {
        content: 'Node1',
      },
    ],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    expandIcon: {
      shape: 'ArrowDown',
      width: 20,
      height: 15,
    },
    collapseIcon: {
      shape: 'ArrowUp',
      width: 20,
      height: 15,
    },
  },
  {
    id: 'Init',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 140,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    annotations: [
      {
        content: 'Node2',
      },
    ],
  },
];
let connectors = {
  // Unique name for the connector
  id: 'connector1',
  sourceID: 'Start',
  targetID: 'Init',
  type: 'Orthogonal',
};
let diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  layout: { type: 'HierarchicalTree' },
  nodes: nodes,
  connectors: [connectors],
  expandStateChange: function (args) {
    //We can get the expanded or collapsed state in args
    console.log('Expanded ' + args.state);
  },
});
diagram.appendTo('#element');
