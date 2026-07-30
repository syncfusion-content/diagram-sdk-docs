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
var connectors = [
  {
    // Unique name for the connector
    id: 'connector1',
    sourceID: 'Start',
    targetID: 'Init',
    type: 'Orthogonal',
  },
];
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  connectors: connectors,
  historyChange: function (args) {
    //Triggers while interacting with diagram and performing undo-redo
    console.log(args);
  },
});
diagram.appendTo('#element');
