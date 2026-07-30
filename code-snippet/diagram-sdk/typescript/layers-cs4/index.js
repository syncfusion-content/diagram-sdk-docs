// A node is created and stored in nodes array.
var nodes = [
    // Layer 1 Nodes
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
      annotations: [{ content: 'Layer 1 Object' }],
    },
  
    // Layer 2 Nodes
  
    {
      id: 'node2',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 300,
      annotations: [{ content: 'Layer 2 Object' }],
    },
  ];
  // initialize diagram component
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: nodes,
      layers: [
        {
          id: 'layer1',
          //Layer 1 objects
          objects: ['node1'],
        },
        {
          id: 'layer2',
          //Layer 2 objects
          objects: ['node2'],
        },
      ],
    },
    '#element'
  );
  
  document.getElementById('addLayer').onclick = () => {
    let newLayer = {
      id: 'newlayer',
      visible: true,
      lock: false,
    };
    let layerObject = [
      {
        id: 'con1',
        type: 'Straight',
        sourceID: 'node1',
        targetID: 'node2',
      },
    ];
    /**
     * Add the layers to the existing diagram layer collection
     * newLayer - representing the layer to be added to the diagram.
     * layerObject -  An optional array of objects associated with the layer.
     */
    diagram.addLayer(newLayer, layerObject);
  };
  