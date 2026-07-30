var nodes = [
    {
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
      //Sets the annotation for the node
      annotations: [
        {
          content: 'Annotation Text WrapWithOverflow',
          // Sets the style for the text wrapping
          style: {
            textWrapping: 'WrapWithOverflow',
          },
        },
      ],
    },
    {
      id: 'node2',
      // Position of the node
      offsetX: 300,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
      },
      //Sets the annotation for the node
      annotations: [
        {
          content: 'Annotation Text Wrap',
          // Sets the style for the text wrapping
          style: {
            textWrapping: 'Wrap',
          },
        },
      ],
    },
    {
      id: 'node3',
      // Position of the node
      offsetX: 500,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
      },
      //Sets the annotation for the node
      annotations: [
        {
          content: 'Annotation Text NoWrap',
          // Sets the style for the text wrapping
          style: {
            textWrapping: 'NoWrap',
          },
        },
      ],
    },
  ];
  
  // initialize Diagram component
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: nodes,
    },
    '#element'
  );
  