import { Diagram, NodeModel, NodeConstraints } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
  id: 'node1',
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 300,
  height: 100,
  //sets the type of the shape as Image
  shape: {
    type: 'Image',
    source:
      'https://ej2.syncfusion.com/demos/src/diagram/employees/image16.png',
    scale: 'Stretch',
    align: 'None',
  },
  //Customizes the appearances such as text, font, fill, and stroke.
  style: {
    fill: 'none',
  },
};
// initialize diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  // Add node
  nodes: [node],
});
// render initialized diagram
diagram.appendTo('#element');
