import {
    Diagram,
    ConnectorModel,
    NodeModel,
    ComplexHierarchicalTree,
    TextModel,
  } from '@syncfusion/ej2-diagrams';
  Diagram.Inject(ComplexHierarchicalTree);
  //Initializes nodes
  let nodes: NodeModel[] = [
    { id: 'node1' },
    { id: 'node2' },
    { id: 'node3' },
    { id: 'node4' },
    { id: 'node5' },
    { id: 'node6' },
    { id: 'node7' },
  ];
  //Initialize connectors
  let connectors: ConnectorModel[] = [
    { id: 'node1-node4', sourceID: 'node1', targetID: 'node4' },
    { id: 'node2-node4', sourceID: 'node2', targetID: 'node4' },
    { id: 'node3-node4', sourceID: 'node3', targetID: 'node4' },
    { id: 'node4-node5', sourceID: 'node4', targetID: 'node5' },
    { id: 'node4-node6', sourceID: 'node4', targetID: 'node6' },
    { id: 'node5-node6', sourceID: 'node6', targetID: 'node7' },
  ];
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: 1000,
    nodes: nodes,
    connectors: connectors,
    //Uses layout to auto-arrange nodes on the diagram page
    layout: {
      //Sets layout type
      type: 'ComplexHierarchicalTree',
      orientation: 'TopToBottom',
      horizontalAlignment: 'Center',
      verticalAlignment: 'Top',
    },
    //Sets the default properties for nodes and connectors
    getNodeDefaults: (obj: NodeModel) => {
      (obj.width = 70),
        (obj.height = 70),
        (obj.annotations = [{ content: obj.id }]);
      obj.style = {
        fill: '#6BA5D7',
        strokeColor: 'none',
        strokeWidth: 2,
      };
      obj.borderColor = 'white';
      obj.backgroundColor = '#6BA5D7';
      obj.borderWidth = 1;
      (obj.shape as TextModel).margin = {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      };
      return obj;
    },
    getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
      connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2,
      };
      connector.targetDecorator.style.fill = '#6BA5D7';
      connector.targetDecorator.style.strokeColor = '#6BA5D7';
      connector.type = 'Orthogonal';
      return connector;
    },
  });
  diagram.appendTo('#element');
  