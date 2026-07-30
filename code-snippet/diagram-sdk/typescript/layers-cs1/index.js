
  // A node is created and stored in nodes array.
  var nodes = [
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
      annotations: [{ content: 'Layer 1 Object' }],
    },
    {
      id: 'node2',
      width: 100,
      height: 100,
      offsetX: 300,
      offsetY: 100,
      annotations: [{ content: 'Layer 2 Object' }],
    },
  ];
  var connectors = [
    {
      id: 'connector1',
      type: 'Straight',
      sourcePoint: {
        x: 100,
        y: 300,
      },
      targetPoint: {
        x: 200,
        y: 400,
      },
      annotations: [{ content: 'Layer 2 Object' }],
    },
  ];
  // initialize diagram component
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      connectors: connectors,
      nodes: nodes,
      layers: [
        {
          id: 'layer1',
          //Layer 1 visibility set as false.
          visible: false,
          objects: ['node1'],
        },
        {
          id: 'layer2',
          visible: true,
          objects: ['node2', 'connector1'],
        },
      ],
    },
    '#element'
  );
  