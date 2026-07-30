function createNodes() {
  const nodes = [];
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
var area = new ej.diagrams.Rect(0, 0, 1500, 1500);
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: createNodes(),
    //Enables Virtualization
    constraints:
      ej.diagrams.DiagramConstraints.Default |
      ej.diagrams.DiagramConstraints.Virtualization,
  },

  '#element'
);
