var connectors = [
    {
      id: 'connector2',
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
      type: 'Bezier',
      segments: [
        {
          type: 'Bezier',
          vector1: {
            distance: 100,
            angle: 270,
          },
          vector2: {
            distance: 100,
            angle: 90,
          },
        },
      ],
      sourcePoint: {
        x: 100,
        y: 200,
      },
      targetPoint: {
        x: 200,
        y: 100,
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
  