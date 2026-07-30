ej.diagrams.Diagram.Inject(ej.diagrams.ComplexHierarchicalTree);
var nodes = [];
var connectors = [];

//Initializes nodes
var nodes = [
  { id: 'node1' },
  { id: 'node2' },
  { id: 'node3' },
  { id: 'node4' },
  { id: 'node5' },
  { id: 'node6' },
  { id: 'node7' },
];
//Initialize connectors
var connectors = [
  { id: 'node1-node4', sourceID: 'node1', targetID: 'node4' },
  { id: 'node2-node4', sourceID: 'node2', targetID: 'node4' },
  { id: 'node3-node4', sourceID: 'node3', targetID: 'node4' },
  { id: 'node4-node5', sourceID: 'node4', targetID: 'node5' },
  { id: 'node4-node6', sourceID: 'node4', targetID: 'node6' },
  { id: 'node5-node6', sourceID: 'node6', targetID: 'node7' },
];
var diagram = new ej.diagrams.Diagram({
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
  getNodeDefaults: (obj) => {
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
    obj.shape.margin = {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    };
    return obj;
  },
  getConnectorDefaults: (connector) => {
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
