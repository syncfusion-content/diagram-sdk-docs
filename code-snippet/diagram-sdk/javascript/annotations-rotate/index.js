var node = {
  id: 'node1',
  // Position of the node
  offsetX: 100,
  offsetY: 100,
  // Size of the node
  width: 100,
  height: 100,
  style: {
    fill: '#6BA5D7',
    strokeColor: 'white',
  },
  // Sets the annotation for the node
  annotations: [
    {
      content: 'Annotation Text',
      rotateAngle: 45,
    },
  ],
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
