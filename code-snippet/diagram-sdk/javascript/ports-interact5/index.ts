import {
  ConnectorModel,
  Diagram,
  NodeModel,
  PortConstraints,
  PortVisibility,
  IDraggingEventArgs,
  IClickEventArgs,
  IConnectionChangeEventArgs,
  Connector,
  IElementDrawEventArgs,
} from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.

let nodes: NodeModel[] = [
  {
    // Position of the node
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    annotations: [
      { content: 'draw port', offset: { x: 0, y: 0.7 } },
      { content: 'drag port', offset: { x: 1, y: 0.7 } },
    ],
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    ports: [
      {
        id: 'p1',
        offset: { x: 0, y: 0.5 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Draw,
      },
      {
        id: 'p2',
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Drag,
      },
    ],
  },
];
let connectors: ConnectorModel[] = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 120 },
    type: 'Orthogonal',
    annotations: [
      {
        content: 'draw port',
        alignment: 'After',
        displacement: { x: 0, y: 10 },
      },
      {
        content: 'drag port',
        alignment: 'After',
        offset: 0.7,
        displacement: { x: 0, y: 10 },
      },
    ],
    ports: [
      {
        id: 'p1',
        offset: 0.5,
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Draw,
      },
      {
        id: 'p2',
        offset: 0.8,
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Drag,
      },
    ],
  },
];
// initialize diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  connectors: connectors,
  click: function (args: IClickEventArgs) {
    console.log('clicked');
    //customize
  },
  elementDraw: function (args: IElementDrawEventArgs) {
    //Prevents connector drawn from connector port
    if (args.state === 'Start' && args.source instanceof Connector) {
      args.cancel = true;
    }
    //customize
  },
  positionChange: function (args: IDraggingEventArgs) {
    console.log('Position change');
    //customize
  },
  connectionChange: function (args: IConnectionChangeEventArgs) {
    console.log('Connection change');
    //customize
  },
});
// render initialized diagram
diagram.appendTo('#element');
