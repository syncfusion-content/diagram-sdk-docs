var nodes = [
    {
      id: 'node1',
      // Position of the node
      offsetX: 250,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      ports: [
        {
          id: 'port1',
          offset: { x: 0, y: 0.5 },
          visibility: ej.diagrams.PortVisibility.Visible,
        },
        {
          id: 'port2',
          offset: { x: 0.5, y: 0 },
          visibility: ej.diagrams.PortVisibility.Visible,
        },
      ],
    },
    {
      id: 'node2',
      // Position of the node
      offsetX: 250,
      offsetY: 400,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      ports: [
        {
          id: 'port3',
          offset: { x: 0, y: 0.5 },
          visibility: ej.diagrams.PortVisibility.Visible,
        },
        {
          id: 'port4',
          offset: { x: 0.5, y: 1 },
          visibility: ej.diagrams.PortVisibility.Visible,
        },
      ],
    },
  ];
  
  let connectors = [
    {
      id: 'connector1',
      sourceID: 'node1',
      targetID: 'node2',
      type: 'Orthogonal',
      sourcePortID: 'port1',
      targetPortID: 'port3',
      annotations: [{ content: 'connector1' }],
    },
    {
      id: 'connector2',
      sourceID: 'node2',
      targetID: 'node1',
      type: 'Orthogonal',
      sourcePortID: 'port4',
      targetPortID: 'port2',
      annotations: [{ content: 'connector2' }],
    },
  ];
  
  // initialize Diagram component
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: nodes,
      connectors: connectors,
    },
    '#element'
  );
  //get in edges
  document.getElementById('getInEdges').onclick = () => {
    let port1 = diagram.nodes[0].ports[1];
    console.log(port1.inEdges[0]);
  };
  //get out edges
  document.getElementById('getOutEdges').onclick = () => {
    let port1 = diagram.nodes[0].ports[0];
    console.log(port1.outEdges[0]);
  };
  