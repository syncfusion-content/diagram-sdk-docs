ej.diagrams.Diagram.Inject(
  ej.diagrams.UndoRedo,
  ej.diagrams.DiagramContextMenu
);

var diagram;

var nodes = [
  {
    id: 'Node1',
    offsetX: 100,
    offsetY: 100,
    annotations: [{ content: 'Select disabled' }],
    constraints:
      ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Select,
  },
  {
    id: 'Node2',
    offsetX: 250,
    offsetY: 100,
    annotations: [{ content: 'Rotate disabled' }],
    constraints:
      ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Rotate,
  },
  {
    id: 'Node3',
    offsetX: 400,
    offsetY: 100,
    annotations: [{ content: 'Resize disabled' }],
    constraints:
      ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Resize,
  },
  {
    id: 'Node4',
    offsetX: 550,
    offsetY: 100,
    annotations: [{ content: 'Drag disabled' }],
    constraints:
      ej.diagrams.NodeConstraints.Default & ~ej.diagrams.NodeConstraints.Drag,
  },
  {
    id: 'Node5',
    offsetX: 700,
    offsetY: 100,
    annotations: [{ content: 'Tooltip enabled' }],
    constraints:
      ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
    tooltip: { content: 'Node Tooltip', relativeMode: 'Object' },
  },
];
//Initialize the diagram
diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '645px',
  nodes: nodes,
  //Sets the default values of a nodes
  getNodeDefaults: function (obj) {
    obj.width = 100;
    obj.height = 100;
    obj.shape = { shape: 'Ellipse' };
    return obj;
  },
});
diagram.appendTo('#element');
