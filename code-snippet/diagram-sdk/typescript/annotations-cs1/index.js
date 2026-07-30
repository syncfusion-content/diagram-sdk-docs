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
    // Sets the Annotation for the Node
    annotations: [
      {
        // Sets the text to be displayed
        content: 'Annotation',
      },
    ],
  };
  
  var connector = {
    sourcePoint: {
      x: 300,
      y: 100,
    },
    targetPoint: {
      x: 400,
      y: 300,
    },
    type: 'Orthogonal',
    style: {
      strokeColor: '#6BA5D7',
    },
    // Sets the Annotation for the Connector
    annotations: [
      {
        // Sets the text to be diaplayed
        content: 'Annotation',
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
  