ej.diagrams.Diagram.Inject(ej.diagrams.ConnectorEditing);
var connectors = {
  // Unique name for the connector
  id: 'connector1',
  type: 'Straight',
  constraints:
    ej.diagrams.ConnectorConstraints.Default |
    ej.diagrams.ConnectorConstraints.DragSegmentThumb,
  segments: [
    {
      type: 'Straight',
      point: {
        x: 100,
        y: 150,
      },
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
  sourcePoint: { x: 150, y: 100 },
  targetPoint: { x: 340, y: 200 },
};

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    connectors: [connectors],
  },
  '#element'
);

diagram.select(diagram.connectors);

document.getElementById('addOrRemoveSegment').onclick = () => {
  let options = {};
  options.SegmentEditing = 'Toggle';
  options.point = { x: 220, y: 150 };
  options.connector = diagram.connectors[0];
  options.hitPadding = diagram.connectors[0].hitPadding;

  diagram.editSegment(options);
};
