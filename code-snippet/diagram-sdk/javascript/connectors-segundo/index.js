var nodes = [
  {
    id: 'sourcenode',
    width: 150,
    height: 50,
    offsetX: 350,
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
    id: 'targetnode',
    width: 150,
    height: 50,
    offsetX: 200,
    offsetY: 250,
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
    id: 'connector1',
    sourceID: 'sourcenode',
    targetID: 'targetnode',
    type: 'Orthogonal',
    segments: [
      {
        type: 'Orthogonal',
        direction: 'Left',
        length: 100,
      },
      {
        type: 'Orthogonal',
        direction: 'Bottom',
        length: 100
      },
      {
        type: 'Orthogonal',
        direction: 'Right',
        length: 100
      },
      {
        type: 'Orthogonal',
        direction: 'Bottom',
        length: 50
      }
    ],
    constraints:
      ej.diagrams.ConnectorConstraints.Default |
      ej.diagrams.ConnectorConstraints.DragSegmentThumb,
  },
];
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  connectors: connectors,
});
diagram.appendTo('#element');

document.getElementById('undo').onclick = () => {
  diagram.undo();
};

document.getElementById('redo').onclick = () => {
  diagram.redo();
};

