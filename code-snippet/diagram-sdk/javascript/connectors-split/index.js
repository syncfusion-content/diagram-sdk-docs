// Initial nodes for the diagram
let nodes = [
    {
      id: 'node1',
      offsetX: 100,
      offsetY: 100,
      width: 100,
      height: 100,
    },
    {
      id: 'node2',
      offsetX: 600,
      offsetY: 100,
      width: 100,
      height: 100,
    },
    {
      id: 'node3',
      offsetX: 400,
      offsetY: 300,
      width: 100,
      height: 100,
    },
  ];
  
  // Initial connectors for the diagram
  let connectors = [
    {
      id: 'connector1',
      sourceID: 'node1',
      targetID: 'node2',
      style: { strokeColor: 'red', strokeWidth: 2, strokeDashArray: '3,3' },
    },
  ];
  
  // Create and initialize the diagram
  let diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '645px',
    nodes: nodes,
    connectors: connectors,
    getNodeDefaults: (obj) => {
      obj.width = 100;
      obj.height = 100;
      obj.constraints =
        ej.diagrams.NodeConstraints.Default |
        ej.diagrams.NodeConstraints.AllowDrop;
      return obj;
    },
    getConnectorDefaults: (obj) => {
      obj.constraints =
        ej.diagrams.ConnectorConstraints.Default |
        ej.diagrams.ConnectorConstraints.AllowDrop;
      return obj;
    },
    enableConnectorSplit: true,
    collectionChange: function (args) {
      if (
        args.state === 'Changed' &&
        args.element instanceof ej.diagrams.Connector
      ) {
        let sourceNode = diagram.getObject(args.element.sourceID);
        if (sourceNode) {
          sourceNode.inEdges.forEach((edgeId) => {
            let initialConnector = diagram.getObject(edgeId);
            args.element.style = initialConnector.style;
          });
        }
      }
      diagram.dataBind();
    },
  });
  
  diagram.appendTo('#element');
  