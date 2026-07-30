import {
  Diagram,
  ConnectorModel,
  ConnectorConstraints,
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram;

let connectors: ConnectorModel[] = [
  {
    id: 'connector1',
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 200, y: 200 },
    type: 'Orthogonal',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
    annotations: [{ content: 'Select disabled', alignment: 'After' }],
  },
  {
    id: 'connector2',
    sourcePoint: { x: 250, y: 100 },
    targetPoint: { x: 350, y: 200 },
    type: 'Orthogonal',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Drag,
    annotations: [{ content: 'Drag disabled', alignment: 'After' }],
  },
  {
    id: 'connector3',
    sourcePoint: { x: 400, y: 100 },
    targetPoint: { x: 500, y: 200 },
    type: 'Orthogonal',
    constraints:
      ConnectorConstraints.Default & ~ConnectorConstraints.DragSourceEnd,
    annotations: [{ content: 'Source end disabled', alignment: 'After' }],
  },
  {
    id: 'connector4',
    sourcePoint: { x: 550, y: 100 },
    targetPoint: { x: 650, y: 200 },
    type: 'Orthogonal',
    constraints:
      ConnectorConstraints.Default & ~ConnectorConstraints.DragTargetEnd,
    annotations: [{ content: 'Target end disabled', alignment: 'After' }],
  },
  {
    id: 'connector5',
    sourcePoint: { x: 700, y: 100 },
    targetPoint: { x: 800, y: 200 },
    type: 'Orthogonal',
    constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Delete,
    annotations: [{ content: 'Delete disabled', alignment: 'After' }],
  },
];
//Initializes diagram control
diagram = new Diagram({
  width: '100%',
  height: '645px',
  connectors: connectors,
});
diagram.appendTo('#element');
