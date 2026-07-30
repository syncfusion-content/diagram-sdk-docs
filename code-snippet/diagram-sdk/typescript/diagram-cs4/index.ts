import { Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';

let diagram: Diagram;

//Defines the nodes collection in diagram
let nodes: NodeModel[] = [
  {
    id: 'NewIdea',
    offsetX: 300,
    offsetY: 60,
    shape: { type: 'Flow', shape: 'Terminator' },
    annotations: [{ content: 'Node' }],
  },
];
//Defines the connectors collection in diagram
let connectors: ConnectorModel[] = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 100, y: 250 },
    annotations: [{ content: 'Connector' }],
  },
];
diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  connectors: connectors,
  ///Sets node default values
  getNodeDefaults: function (node: NodeModel) {
    node.style.fill = 'green';
  },

  //Sets Connector default values
  getConnectorDefaults: function (connector: ConnectorModel) {
    connector.targetDecorator = { shape: 'Arrow' };
    connector.style = { strokeColor: 'red' };
  },
});
diagram.appendTo('#element');
