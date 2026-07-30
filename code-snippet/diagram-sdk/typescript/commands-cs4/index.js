var nodes = [
    {
      id: 'node1',
      width: 90,
      height: 70,
      offsetX: 120,
      offsetY: 100,
      style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1,
      },
    },
    {
      id: 'node2',
      width: 90,
      height: 70,
      offsetX: 150,
      offsetY: 120,
      style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1,
      },
    },
    {
      id: 'node3',
      width: 90,
      height: 70,
      offsetX: 170,
      offsetY: 150,
      style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1,
      },
    },
  ];
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '650px',
      height: '350px',
      nodes: nodes,
    },
    '#element'
  );
  
  document.getElementById('sendToBack').onclick = () => {
    diagram.sendToBack();
  };
  