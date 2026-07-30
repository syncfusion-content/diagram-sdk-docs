var nodes = [
  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.AllowDrop,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as Group
    shape: {
      type: 'Bpmn',
      shape: 'Group',
    },
  },
];

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes
    }, '#element');

