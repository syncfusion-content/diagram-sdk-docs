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
  annotations: [
    {
      width: 100,
      height: 50,
      id: 'Node',
    },
  ],
};
let connector = {
  id: 'connector1',
  sourcePoint: {
    x: 300,
    y: 100,
  },
  targetPoint: {
    x: 400,
    y: 300,
  },
  type: 'Orthogonal',
  //Sets the annotation for the node
  annotations: [
    {
      width: 100,
      height: 50,
      id: 'connector',
    },
  ],
};
// initialize Diagram component

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: [node],
    connectors: [connector],
    annotationTemplate: '#annotationTemplate',
  },
  '#element'
);
