var nodes = [
    {
      // Id of the node
      id: 'node1',
      // Position of the node
      offsetX: 250,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      shape: {
        type: 'HTML',
      },
    },
    {
      // Id of the node
      id: 'node2',
      // Position of the node
      offsetX: 450,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      shape: {
        type: 'HTML',
      },
    },
  ];
  
  // initialize Diagram component
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: nodes,
      nodeTemplate: '#nodetemplate',
    },
    '#element'
  );
  