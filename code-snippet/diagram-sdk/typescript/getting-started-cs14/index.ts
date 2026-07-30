import { Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
  {
    id: 'Start',
    offsetY: 50,
    annotations: [{ content: 'Start' }],
    shape: { type: 'Flow', shape: 'Terminator' },
  },
  {
    id: 'Init',
    offsetY: 140,
    annotations: [{ content: 'var i = 0;' }],
    shape: { type: 'Flow', shape: 'Process' },
  },
  {
    id: 'Condition',
    offsetY: 230,
    annotations: [{ content: 'i < 10?' }],
    shape: { type: 'Flow', shape: 'Decision' },
  },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  getNodeDefaults: (node: NodeModel) => {
    node.height = 50;
    node.width = 140;
    node.offsetX = 300;
    node.style = { fill: 'skyblue', strokeColor: 'skyblue' };
    return node;
  },
});
diagram.appendTo('#element');
