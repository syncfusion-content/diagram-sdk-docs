var diagram;

//Defines the nodes collection in diagram
var nodes = [
  {
    id: 'NewIdea',
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 60,
    shape: { type: 'Flow', shape: 'Terminator' },
    annotations: [{ content: 'Node' }],
  },
];
//Defines the connectors collection in diagram
var connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 100, y: 250 },
    annotations: [{ content: 'Connector' }],
  },
];
diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  connectors: connectors,
  //Sets node default values
  getNodeDefaults: function (node) {
    node.style.fill = 'green';
  },
  //Sets Connector default values
  getConnectorDefaults: function (connector) {
    connector.targetDecorator = { shape: 'Arrow' };
    connector.style = { strokeColor: 'red' };
  },
});
diagram.appendTo('#element');
