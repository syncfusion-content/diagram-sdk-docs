import {
    ConnectorModel,
    NodeModel,
    BasicShapeModel,
    Diagram,
  } from '@syncfusion/ej2-diagrams';
  
  let connectors: ConnectorModel[] = [
    {
      id: 'connector1',
      //Flip
      flip: 'Horizontal',
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
      annotations: [{ content: 'Horizontal Flip' }],
      sourcePoint: { x: 100, y: 100 },
      targetPoint: { x: 200, y: 200 },
    },
    {
      id: 'connector2',
      //Flip
      flip: 'Vertical',
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
      annotations: [{ content: 'Vertical Flip' }],
      sourcePoint: { x: 300, y: 100 },
      targetPoint: { x: 400, y: 200 },
    },
    {
      id: 'connector3',
      //Flip
      flip: 'Both',
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
      annotations: [{ content: 'Both Flip' }],
      sourcePoint: { x: 500, y: 100 },
      targetPoint: { x: 600, y: 200 },
    },
  ];
  
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: 900,
    connectors: connectors,
  });
  diagram.appendTo('#element');
  