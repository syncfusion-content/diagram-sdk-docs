import {
  Diagram,
  NodeModel,
  ConnectorModel,
  IClickEventArgs,
  Node,
  Connector,
} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
  {
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [
      {
        content: 'Click node',
      },
    ],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
  },
];
let connectors: ConnectorModel[] = [
  {
    // Unique name for the connector
    id: 'connector1',
    sourceID: 'Start',
    targetPoint: { x: 300, y: 200 },
    type: 'Orthogonal',
    annotations: [
      {
        content: 'Click Connector',
      },
    ],
  },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  connectors: connectors,
  click: function (args: IClickEventArgs) {
    let element = 'Diagram';
    if (args.actualObject instanceof Node) {
      element = 'Node';
    } else if (args.actualObject instanceof Connector) {
      element = 'Connector';
    }
    alert(element + ' Clicked');
  },
});
diagram.appendTo('#element');
