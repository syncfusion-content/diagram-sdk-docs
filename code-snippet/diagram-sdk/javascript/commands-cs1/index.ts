import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
  {
    id: 'node1',
    width: 100,
    height: 80,
    offsetX: 140,
    offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node1' }],
  },
  {
    id: 'node2',
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 200,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node2' }],
  },
  {
    id: 'node3',
    width: 200,
    height: 30,
    offsetX: 140,
    offsetY: 300,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node3' }],
  },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
});

diagram.appendTo('#element');

(document.getElementById('cut') as HTMLInputElement).onclick = () => {
  diagram.cut();
};
(document.getElementById('copy') as HTMLInputElement).onclick = () => {
  diagram.copy();
};
(document.getElementById('paste') as HTMLInputElement).onclick = () => {
  diagram.paste();
};
(document.getElementById('pasteObjects') as HTMLInputElement).onclick = () => {
  let nodes = [
    {
      id: 'n1',
      offsetX: 400,
      offsetY: 100,
      width: 100,
      style: { fill: '#6BA5D7' },
    },
    {
      id: 'n2',
      offsetX: 400,
      offsetY: 200,
      width: 100,
      style: { fill: '#6BA5D7' },
    },
  ];
  diagram.paste(nodes);
};
