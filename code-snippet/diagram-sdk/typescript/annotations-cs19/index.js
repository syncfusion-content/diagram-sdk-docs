var node = {
    // Position of the node
    offsetX: 450,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [
      { content: 'Left', offset: { x: 0.12, y: 0.1 } },
      { content: 'Center', offset: { x: 0.5, y: 0.5 } },
      { content: 'Right', offset: { x: 0.82, y: 0.9 } },
    ],
  };
  var connector = {
    id: 'connector',
    type: 'Orthogonal',
    sourcePoint: { x: 200, y: 200 },
    targetPoint: { x: 300, y: 300 },
    // Sets the multiple annotation for the node
    annotations: [
      {
        content: 'connector1',
        offset: 0.2,
      },
      {
        content: 'connector1',
        offset: 0.6,
      },
      {
        content: 'connector1',
        offset: 0.8,
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
    },
    '#element'
  );
  