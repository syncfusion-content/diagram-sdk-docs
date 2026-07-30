import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
  {
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [
      {
        id: 'label1',
        content: 'Start',
      },
    ],
    shape: {
      type: 'Flow',
      shape: 'Terminator',
    },
  },
];

let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  rulerSettings: { showRulers: true },
  scrollSettings: {
    // sets the scroll padding
    padding: { left: 100, top: 100 },
  },
});

diagram.appendTo('#element');
