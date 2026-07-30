ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding);

var nodes = [
  {
    id: 'node1',
    constraints:
      ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Select,
    offsetX: 100,
    offsetY: 100,
    annotations: [{ content: 'Node Selection disabled' }],
  },
  {
    id: 'node2',
    constraints:
      ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Resize,
    offsetX: 300,
    offsetY: 100,
    annotations: [{ content: 'Node Resize disabled' }],
  },
  {
    id: 'node3',
    constraints:
      ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
    offsetX: 500,
    offsetY: 100,
    annotations: [{ content: 'Node Rotate disabled' }],
  },
  {
    id: 'node4',
    constraints:
      ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Drag,
    offsetX: 700,
    offsetY: 100,
    annotations: [{ content: 'Node Drag disabled' }],
  },
  {
    id: 'node5',
    constraints:
      ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Delete,
    offsetX: 100,
    offsetY: 300,
    annotations: [{ content: 'Node Delete disabled' }],
  },
];

// initialize Diagram component

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: nodes,
    getNodeDefaults: function (node) {
      node.height = 100;
      node.width = 100;
      node.style = { fill: 'yellow', strokeColor: 'yellow' };
      return node;
    },
  },
  '#element'
);
