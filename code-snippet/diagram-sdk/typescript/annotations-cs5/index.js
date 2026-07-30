var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
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
        // Sets the content for the annotation
        content: 'Annotation long annotation content',
        //Sets the offset for the content
        offset: { x: 0, y: 1 },
        height: 100,
        width: 100,
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
  