var nodes = [
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
      style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1,
      },
      annotations: [{ content: 'Rectangle1' }],
    },
    {
      id: 'node2',
      width: 100,
      height: 100,
      offsetX: 300,
      offsetY: 100,
      style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1,
      },
      annotations: [{ content: 'Rectangle2' }],
    },
  ];
  var connector = {
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
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
  };
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '350px',
      nodes: nodes,
      connectors: [connector],
      //Enables the context menu
      contextMenuSettings: {
        show: true,
      },
    },
    '#element'
  );
  