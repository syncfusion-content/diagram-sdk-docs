ej.diagrams.Diagram.Inject(ej.diagrams.ConnectorEditing);
var connectors = [
  {
    id: 'connector1',
    type: 'Orthogonal',
    // Defines multile segemnts for the connectors
    segments: [
      {
        type: 'Orthogonal',
        direction: 'Bottom',
        length: 150,
      },
      {
        type: 'Orthogonal',
        direction: 'Right',
        length: 150,
      },
      {
        type: 'Orthogonal',
        direction: 'Top',
        length: 100,
      },
      {
        type: 'Orthogonal',
        direction: 'Left',
        length: 100,
      },
    ],
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
    sourcePoint: {
      x: 300,
      y: 100,
    },
    targetPoint: {
      x: 350,
      y: 150,
    },
    constraints:
      ej.diagrams.ConnectorConstraints.Default |
      ej.diagrams.ConnectorConstraints.DragSegmentThumb,
  },
  {
    id: 'connector2',
    type: 'Bezier',
    constraints:
      ej.diagrams.ConnectorConstraints.Default |
      ej.diagrams.ConnectorConstraints.DragSegmentThumb,
    segments: [
      { point: { x: 150, y: 150 }, type: 'Bezier' },
      { point: { x: 250, y: 250 }, type: 'Bezier' },
    ],
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
  },
  {
    id: 'connector3',
    type: 'Straight',
    constraints:
      ej.diagrams.ConnectorConstraints.Default |
      ej.diagrams.ConnectorConstraints.DragSegmentThumb,
    segments: [
      { point: { x: 500, y: 200 }, type: 'Straight' },
      { point: { x: 600, y: 300 }, type: 'Straight' },
    ],
    sourcePoint: { x: 600, y: 100 },
    targetPoint: { x: 800, y: 300 },
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
  },
];

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    connectors: connectors,
  },
  '#element'
);
