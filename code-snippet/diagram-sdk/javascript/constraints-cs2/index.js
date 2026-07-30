ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);

var diagram;

var connectors = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 200, y: 200 },
    type: 'Orthogonal',
    constraints:
      ej.diagrams.ConnectorConstraints.Default &
      ~ej.diagrams.ConnectorConstraints.Select,
    annotations: [{ content: 'Select disabled', alignment: 'After' }],
  },
  {
    id: 'connector2',
    sourcePoint: { x: 250, y: 100 },
    targetPoint: { x: 350, y: 200 },
    type: 'Orthogonal',
    constraints:
      ej.diagrams.ConnectorConstraints.Default &
      ~ej.diagrams.ConnectorConstraints.Drag,
    annotations: [{ content: 'Drag disabled', alignment: 'After' }],
  },
  {
    id: 'connector3',
    sourcePoint: { x: 400, y: 100 },
    targetPoint: { x: 500, y: 200 },
    type: 'Orthogonal',
    constraints:
      ej.diagrams.ConnectorConstraints.Default &
      ~ej.diagrams.ConnectorConstraints.DragSourceEnd,
    annotations: [{ content: 'Source end disabled', alignment: 'After' }],
  },
  {
    id: 'connector4',
    sourcePoint: { x: 550, y: 100 },
    targetPoint: { x: 650, y: 200 },
    type: 'Orthogonal',
    constraints:
      ej.diagrams.ConnectorConstraints.Default &
      ~ej.diagrams.ConnectorConstraints.DragTargetEnd,
    annotations: [{ content: 'Target end disabled', alignment: 'After' }],
  },
  {
    id: 'connector5',
    sourcePoint: { x: 700, y: 100 },
    targetPoint: { x: 800, y: 200 },
    type: 'Orthogonal',
    constraints:
      ej.diagrams.ConnectorConstraints.Default &
      ~ej.diagrams.ConnectorConstraints.Delete,
    annotations: [{ content: 'Delete disabled', alignment: 'After' }],
  },
];
//Initialize the diagram
diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '645px',
  connectors: connectors,
});
diagram.appendTo('#element');
