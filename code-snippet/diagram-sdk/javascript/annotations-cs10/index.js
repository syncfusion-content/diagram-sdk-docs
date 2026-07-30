var node = {
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [
      {
        hyperlink: {
          link: 'https://hr.syncfusion.com/home',
          hyperlinkOpenState: 'NewWindow',
        },
      },
    ],
  };
  let connectors = [
    {
      sourcePoint: { x: 300, y: 200 },
      targetPoint: { x: 500, y: 300 },
      type: 'Orthogonal',
      //Path annotation offset
      annotations: [
        {
          hyperlink: {
            link: 'https://google.com',
            hyperlinkOpenState: 'NewWindow',
            content: 'Google',
            color: 'orange',
            textDecoration: 'Underline',
          },
        },
      ],
    },
  ];
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: [node],
      connectors: connectors,
    },
    '#element'
  );
  