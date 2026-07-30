let nodes = [
    {
      id: 'node1',
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
      style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
      },
    },
  ];
  
  var snapSettings = {
    snapAngle: 20,
  };
  var diagram = new ej.diagrams.Diagram(
    {
      width: '800px',
      height: '500px',
      getNodeDefaults: function (node) {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      },
      nodes: nodes,
      snapSettings: snapSettings,
    },
    '#element'
  );
  
  document.getElementById('snapAngle').onchange = (args) => {
    //Update snapAngle dynamically
    diagram.snapSettings.snapAngle = Number(args.target.value);
    diagram.dataBind();
  };
  