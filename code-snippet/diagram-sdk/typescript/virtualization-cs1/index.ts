import {
  Diagram,
  NodeModel,
  DiagramConstraints,
} from '@syncfusion/ej2-diagrams';
function createNodes() {
  const nodes: NodeModel[] = [];
  const nodeWidth = 50;
  const nodeHeight = 50;
  const space = 50;
  const nodesPerRow = 50;
  const totalNodes = 500;

  for (let i = 0; i < totalNodes; i++) {
    const row = Math.floor(i / nodesPerRow);
    const col = i % nodesPerRow;

    const node = {
      id: `node${i + 1}`,
      width: nodeWidth,
      height: nodeHeight,
      offsetX: col * (nodeWidth + space) + nodeWidth / 2,
      offsetY: row * (nodeHeight + space) + nodeHeight / 2,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [
        {
          content: `${i + 1}`,
        },
      ],
    };

    nodes.push(node);
  }

  return nodes;
}
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  //Enables Virtualization
  constraints: DiagramConstraints.Default | DiagramConstraints.Virtualization,
  nodes: createNodes(),
});

diagram.appendTo('#element');
