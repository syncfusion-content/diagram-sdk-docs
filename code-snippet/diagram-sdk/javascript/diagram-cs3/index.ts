import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

let diagram: Diagram;

//Defines the nodes collection in diagram
let nodes: NodeModel[] = [
  {
    id: 'NewIdea',
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 60,
    shape: { type: 'Flow', shape: 'Terminator' },
    annotations: [{ content: 'Node' }],
  },
];
diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  //Sets backgrounf color for diagram
  backgroundColor: 'yellow',
  addInfo: { description: 'This is a diagram that has a yellow background color' }
});
diagram.appendTo('#element');
