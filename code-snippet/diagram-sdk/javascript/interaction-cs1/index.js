var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
  };
  var connector = {
    id: 'con1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 150 },
  };
  // initialize Diagram component
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: [node],
      connectors: [connector],
      //Resize Handles and connector end point handle size
      selectedItems: { handleSize: 40 },
    },
    '#element'
  );
  diagram.select([diagram.nodes[0]]);
  