import {
    Diagram,
    ConnectorModel,
    ConnectorConstraints,
    ConnectorEditing,
    IEditSegmentOptions,
  } from '@syncfusion/ej2-diagrams';
  Diagram.Inject(ConnectorEditing);
  let connectors: ConnectorModel = {
    id: 'connector1',
    constraints:
      ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    // Defines the segment type of the connector
    segments: [
      {
        type: 'Straight',
        // Defines the point of the segment
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
    type: 'Straight',
    sourcePoint: { x: 150, y: 100 },
    targetPoint: { x: 340, y: 200 },
  };
  
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: [connectors],
  });
  
  diagram.appendTo('#element');
  
  diagram.select(diagram.connectors);
  
  (document.getElementById('addOrRemoveSegment') as HTMLInputElement).onclick = () => {
    let options: IEditSegmentOptions = {};
    options.SegmentEditing = 'Toggle';
    options.point = { x: 220, y: 150 };
    options.connector = diagram.connectors[0];
    options.hitPadding = diagram.connectors[0].hitPadding;
  
    diagram.editSegment(options);
  };
  