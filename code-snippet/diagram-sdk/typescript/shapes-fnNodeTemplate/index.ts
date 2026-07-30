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

// initialize diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodeTemplate: template.bind(this),
  // Add node
  nodes: nodes,
});
// render initialized diagram
diagram.appendTo('#element');
