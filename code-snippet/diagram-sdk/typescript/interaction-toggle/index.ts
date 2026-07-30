import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let node: NodeModel = {
  id: 'node1',
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
};
// initialize Diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  // Add node
  nodes: [node],
  //Toggle selection
  selectedItems: { canToggleSelection: true },
});
diagram.appendTo('#element');
