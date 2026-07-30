import { Diagram, NodeModel, NodeConstraints } from '@syncfusion/ej2-diagrams';

 //Template for the HTML Shape
function template(obj: any) {
  let background = '#6BA5D7';
  let name = 'button';
  if (obj.id === 'node1') {
    background = 'yellow';
    name = 'YELLOW';
  } else {
    name = 'BLUE';
  }
  return `<div style="background:${background};height:100%;width:100%;"><button type="button" style="width:100px"> ${name}</button></div>`;
}
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
      content: template.bind(this),
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
      content: template.bind(this),
    },
  },
];
// initialize diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  // Add node
  nodes: nodes,
});
// render initialized diagram
diagram.appendTo('#element');
