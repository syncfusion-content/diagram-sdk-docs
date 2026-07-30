var nodes = [
    {
      id: 'Start',
      width: 140,
      height: 50,
      offsetX: 300,
      offsetY: 50,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
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
  ];
  //ScrollableArea from 0 to 1500 in horizontal axis and 0 to 1500 in vertical axis
  var area = new ej.diagrams.Rect(0, 0, 1500, 1500);
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: nodes,
    },
    '#element'
  );
  
  document.getElementById('updateViewPortWidth').onclick = () => {
    diagram.width = 400;
    diagram.updateViewPort();
  };
  
  document.getElementById('updateViewPortHeight').onclick = () => {
    diagram.height = 500;
    diagram.updateViewPort();
  };