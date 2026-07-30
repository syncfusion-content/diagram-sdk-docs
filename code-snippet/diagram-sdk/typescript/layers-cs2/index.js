// A node is created and stored in nodes array.
var nodes = [
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
      annotations: [
        {
          content: 'Layer 1 object Locked',
        },
      ],
    },
    {
      id: 'node2',
      width: 100,
      height: 100,
      offsetX: 300,
      offsetY: 100,
      annotations: [
        {
          content: 'Layer 2 Object',
        },
      ],
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
      annotations: [
        {
          content: 'Layer 2 Object',
        },
      ],
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
          visible: true,
          objects: ['node1'],
          //Locks the layer1 and prevents any interactions to the objects in layer1
          lock: true,
        },
        {
          id: 'layer2',
          visible: true,
          objects: ['node2', 'connector1'],
          lock: false,
        },
      ],
    },
    '#element'
  );
  