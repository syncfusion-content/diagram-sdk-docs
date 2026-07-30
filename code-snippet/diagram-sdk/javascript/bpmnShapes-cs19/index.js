var connector = {
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 100 },
    type: 'Orthogonal',
    shape: {
      type: 'Bpmn',
      flow: 'Sequence',
      sequence: 'Default',
    },
  };
  var connector2 = {
    sourcePoint: { x: 100, y: 200 },
    targetPoint: { x: 300, y: 200 },
    type: 'Orthogonal',
    shape: {
      type: 'Bpmn',
      flow: 'Sequence',
      sequence: 'Normal',
    },
  };
  var connector3 = {
    sourcePoint: { x: 100, y: 300 },
    targetPoint: { x: 300, y: 300 },
    type: 'Orthogonal',
    shape: {
      type: 'Bpmn',
      flow: 'Sequence',
      sequence: 'Conditional',
    },
  };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', connectors: [connector,connector2,connector3]
    }, '#element');

