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
  // Sets the annotation for the Node
  annotations: [
    {
      hyperlink: {
        link: 'https://google.com',
        //Set the link to open in the current tab
        hyperlinkOpenState: 'NewWindow',
      },
    },
  ],
};
let connectors: ConnectorModel[] = [
  {
    sourcePoint: { x: 300, y: 200 },
    targetPoint: { x: 500, y: 300 },
    type: 'Orthogonal',
    //Path annotation offset
    annotations: [
      {
        hyperlink: {
          link: 'https://google.com',
          hyperlinkOpenState: 'NewWindow',
          content: 'Google',
          color: 'orange',
          textDecoration: 'Underline',
        },
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
