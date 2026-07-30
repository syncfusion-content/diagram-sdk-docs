var connectors = [
    {
      id: 'connector1',
      constraints:
        ej.diagrams.ConnectorConstraints.Default &
        ~ej.diagrams.ConnectorConstraints.Select,
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
      constraints:
        ej.diagrams.ConnectorConstraints.Default &
        ~ej.diagrams.ConnectorConstraints.Drag,
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
        ej.diagrams.ConnectorConstraints.Default &
        ~ej.diagrams.ConnectorConstraints.DragSourceEnd,
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
        ej.diagrams.ConnectorConstraints.Default &
        ~ej.diagrams.ConnectorConstraints.DragTargetEnd,
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
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: 1500,
      height: 1500,
      connectors: connectors,
    },
    '#element'
  );
  