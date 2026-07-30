import {
    Diagram,
    DiagramConstraints,
    ConnectorConstraints,
    ConnectorModel,
  } from '@syncfusion/ej2-diagrams';
  
  let connectors: ConnectorModel[] = [
    {
      id: 'connector1',
      constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
      annotations: [{ content: 'Connector Selection disabled' }],
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
      sourcePoint: {
        x: 100,
        y: 100,
      },
      targetPoint: {
        x: 200,
        y: 200,
      },
    },
    {
      id: 'connector2',
      constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Drag,
      annotations: [{ content: 'Connector Drag disabled' }],
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
      sourcePoint: {
        x: 300,
        y: 100,
      },
      targetPoint: {
        x: 400,
        y: 200,
      },
    },
    {
      id: 'connector3',
      constraints:
        ConnectorConstraints.Default & ~ConnectorConstraints.DragSourceEnd,
      annotations: [{ content: 'Connector Source end disabled' }],
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
      sourcePoint: {
        x: 500,
        y: 100,
      },
      targetPoint: {
        x: 600,
        y: 200,
      },
    },
    {
      id: 'connector4',
      constraints:
        ConnectorConstraints.Default & ~ConnectorConstraints.DragTargetEnd,
      annotations: [{ content: 'Connector Target end disabled' }],
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
      sourcePoint: {
        x: 700,
        y: 100,
      },
      targetPoint: {
        x: 800,
        y: 200,
      },
    },
  ];
  
  let diagram: Diagram = new Diagram({
    width: 1500,
    height: 1500,
    connectors: connectors,
  });
  
  diagram.appendTo('#element');
  