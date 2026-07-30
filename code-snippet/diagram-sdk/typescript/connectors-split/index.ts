import {
    Diagram,
    NodeModel,
    NodeConstraints,
    Connector,
    ConnectorConstraints,
    ConnectorModel,
    Node
  } from '@syncfusion/ej2-diagrams';
  let nodes: NodeModel[] = [
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
  let connectors: ConnectorModel[] = [
    {
      id: 'connector1',
      sourceID: 'node1',
      targetID: 'node2',
      style: { strokeColor: 'red', strokeWidth: 2, strokeDashArray: '3,3' },
    },
  ];
  // initialize Diagram component
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: nodes,
    connectors: connectors,
    getNodeDefaults: (obj: NodeModel) => {
      obj.width = 100;
      obj.height = 100;
      obj.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
      return obj;
    },
    getConnectorDefaults: (obj: ConnectorModel) => {
      obj.constraints =
        ConnectorConstraints.Default | ConnectorConstraints.AllowDrop;
      return obj;
    },
    enableConnectorSplit: true,
    collectionChange: function (args) {
      if (args.state === 'Changed' && args.element instanceof Connector) {
        let sourceNode: Node = diagram.getObject(args.element.sourceID);
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
  // render initialized Diagram
  diagram.appendTo('#element');
  