let nodes = [
    {
      id: 'node1',
      style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
    },
    {
      id: 'node2',
      style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
      width: 100,
      height: 100,
      offsetX: 300,
      offsetY: 100,
    },
  ];
  
  var snapSettings = {
    // Enable snap to object constraint
    constraints:
      ej.diagrams.SnapConstraints.SnapToObject |
      ej.diagrams.SnapConstraints.ShowLines,
    // Sets the Snap object distance
    snapObjectDistance: 10,
  };
  var diagram = new ej.diagrams.Diagram(
    {
      width: '800px',
      height: '500px',
      nodes: nodes,
      getNodeDefaults: function (node) {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
      },
      snapSettings: snapSettings,
    },
    '#element'
  );
  