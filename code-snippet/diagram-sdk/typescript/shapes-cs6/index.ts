import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.

let nodes: NodeModel[] = [
  {
    id: 'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    shape: {
      type: 'HTML',
    },
  },
  {
    id: 'node2',
    // Position of the node
    offsetX: 450,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    shape: {
      type: 'HTML',
    },
  },
];
// initialize diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodeTemplate: '#nodetemplate',
  // Add node
  nodes: nodes,
});
// render initialized diagram
diagram.appendTo('#element');
