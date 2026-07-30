import {
  ConnectorModel,
  Diagram,
  NodeModel,
  PortConstraints,
  PortVisibility,
} from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.

let nodes: NodeModel[] = [
  {
    // Position of the node
    id: 'node1',
    offsetX: 250,
    offsetY: 250,
    annotations: [{ content: 'Hover over port to see tooltip' }],
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    ports: [
      {
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.ToolTip,
        tooltip: { content: 'node port tooltip' },
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
    ports: [
      {
        offset: 0.5,
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.ToolTip,
        tooltip: { content: 'connector port tooltip' },
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
});
// render initialized diagram
diagram.appendTo('#element');
