import { Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';

// A node is created and stored in nodes array.

let node: NodeModel = {
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  style: {
    fill: '#6BA5D7',
    strokeColor: 'white',
  },
  //Pivot point
  pivot: { x: 0, y: 0 },
};
let diagram: Diagram = new Diagram({
  width: '100%',
  height: 900,
  nodes: [node],
});
diagram.appendTo('#element');
diagram.select([diagram.nodes[0]]);
