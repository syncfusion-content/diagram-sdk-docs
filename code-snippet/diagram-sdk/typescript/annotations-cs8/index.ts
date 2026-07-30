import { ConnectorModel, Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
  id: 'node1',
  // Position of the node
  offsetX: 100,
  offsetY: 100,
  // Size of the node
  width: 100,
  height: 100,
  style: {
    fill: '#6BA5D7',
    strokeColor: 'white',
  },
  // Sets the annotation for the connector
  annotations: [
    {
      content: 'Task1',
      // Sets the margin for the content
      margin: {
        top: 20,
      },
      horizontalAlignment: 'Center',
      verticalAlignment: 'Top',
      offset: {
        x: 0.5,
        y: 1,
      },
    },
  ],
};
let connectors: ConnectorModel[] = [
  {
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 500, y: 300 },
    type: 'Orthogonal',
    //Path annotation offset
    annotations: [
      {
        content: 'annotation',
        offset: 0.2,
        margin: { left: 40 },
      },
    ],
  },
];
// initialize diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  // Add node
  nodes: [node],
  connectors: connectors,
});
// render initialized diagram
diagram.appendTo('#element');
