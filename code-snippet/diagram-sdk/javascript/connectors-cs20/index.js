var connectors = [
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
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '350px',
      getNodeDefaults: function (node) {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      },
      connectors: connectors,
    },
    '#element'
  );
  