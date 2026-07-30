import { ConnectorModel, Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
var connectors: ConnectorModel[] = [
  {
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 500, y: 100 },
    type: 'Straight',
    //Path annotation offset
    annotations: [
      {
        content: 'annotation',
        offset: 0.2,
        alignment: 'After',
        displacement: { x: 50, y: 50 },
      },
    ],
  },
];
// initialize diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  // Add node
  connectors: connectors,
});
// render initialized diagram
diagram.appendTo('#element');
