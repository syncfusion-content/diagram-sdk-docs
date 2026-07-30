ej.diagrams.Diagram.Inject(ej.diagrams.ConnectorEditing);
var connectors = [
  {
    id: 'connector1',
    type: 'Straight',
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
    constraints:
      ej.diagrams.ConnectorConstraints.Default |
      ej.diagrams.ConnectorConstraints.DragSegmentThumb,
    sourcePoint: {
      x: 100,
      y: 100,
    },
    targetPoint: {
      x: 200,
      y: 200,
    },
    segments: [
      {
        type: 'Straight',
        point: {
          x: 170,
          y: 150,
        },
      },
    ],
  },
];

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    connectors: connectors,
    segmentChange: function (args) {
      console.log('segmentChange');
      //customize
    },
  },
  '#element'
);
