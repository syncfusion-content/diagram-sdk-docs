var node = {
  id: 'node1',
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  style: { fill: '#6BA5D7', strokeColor: 'white' },
  //Enables aspect ratio
  constraints:
    ej.diagrams.NodeConstraints.Default |
    ej.diagrams.NodeConstraints.AspectRatio,
};

// initialize Diagram component

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: [node],
  },
  '#element'
);
