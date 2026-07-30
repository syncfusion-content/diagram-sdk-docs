var nodes = [
    {
      id: 'node1',
      // Position of the node
      offsetX: 250,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      shape: {
        type: 'HTML',
        content: template.bind(this),
      },
    },
    {
      id: 'node2',
      // Position of the node
      offsetX: 450,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      shape: {
        type: 'HTML',
        content: template.bind(this),
      },
    },
  ];
  //Template for the HTML Shape
  function template(obj) {
    let background = '#6BA5D7';
    let name = 'button';
    if (obj.id === 'node1') {
      background = 'yellow';
      name = 'YELLOW';
    } else {
      name = 'BLUE';
    }
    return `<div style="background:${background};height:100%;width:100%;"><button type="button" style="width:100px"> ${name}</button></div>`;
  }
  
  // initialize Diagram component
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: nodes,
    },
    '#element'
  );
  