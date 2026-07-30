var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    ports: [
      {
        offset: { x: 1, y: 0.5 },
        visibility: ej.diagrams.PortVisibility.Visible,
        style: {
          fill: 'red',
          strokeWidth: 2,
          strokeColor: 'black',
          opacity: 0.7,
          strokeDashArray: '2 2',
        },
        width: 12,
        height: 12,
        shape: 'Circle',
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
  