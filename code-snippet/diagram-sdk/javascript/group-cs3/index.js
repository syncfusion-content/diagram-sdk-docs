var nodes = [
    {
      id: 'rectangle1',
      offsetX: 100,
      offsetY: 100,
      width: 100,
      height: 100,
      style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
      },
      annotations: [
        {
          content: 'rectangle1',
        },
      ],
    },
    {
      id: 'rectangle2',
      offsetX: 200,
      offsetY: 200,
      width: 100,
      height: 100,
      style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
      },
      annotations: [
        {
          content: 'rectangle2',
        },
      ],
    },
  ];
  
  var group = {
    id: 'group',
    children: ['rectangle1', 'rectangle2'],
    style: { strokeColor: 'green' },
  };
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '1500px',
      height: '600px',
      nodes: nodes,
    },
    '#element'
  );
  diagram.add(group);
  