var nodes = [
    {
      id: 'Start',
      width: 140,
      height: 50,
      offsetX: 100,
      offsetY: 100,
      annotations: [
        {
          id: 'label1',
          content: 'Start',
        },
      ],
      shape: {
        type: 'Flow',
        shape: 'Terminator',
      },
    },
    {
      id: 'Init',
      width: 140,
      height: 50,
      offsetX: 300,
      offsetY: 300,
      annotations: [
        {
          id: 'label2',
          content: 'End',
        },
      ],
      shape: {
        type: 'Flow',
        shape: 'Process',
      },
    },
  ];
  
  var connector = {
    // Name of the connector
    id: 'connector1',
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
    // ID of the source and target nodes
    sourceID: 'Start',
    targetID: 'Init',
    type: 'Orthogonal',
  };
  
  var diagram = new ej.diagrams.Diagram({
    width: 700,
    height: 700,
    nodes: nodes,
    connectors: [connector],
    tool: ej.diagrams.DiagramTools.ZoomPan,
  });
  diagram.appendTo('#element');
  