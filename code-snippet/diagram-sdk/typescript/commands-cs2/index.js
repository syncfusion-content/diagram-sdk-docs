var nodes = [ {
    id: 'node1',
    width: 100,
    height: 70,
    offsetX: 100,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
  },
  {
    id: 'node2',
    width: 100,
    height: 70,
    offsetX: 300,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
  },
  {
    id: 'node3',
    width: 100,
    height: 70,
    offsetX: 200,
    offsetY: 200,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
    },
  },
  {
    id: 'group',
    children: ['node1', 'node2', 'node3', 'connector1'],
  },
  ];
  
  var connector = {
  id: 'connector1',
  sourceID: 'node1',
  targetID: 'node2',
  style: {
    strokeColor : '#6BA5D7',
    fill: '#6BA5D7',
    strokeWidth :  2,
    targetDecorator: {
        style: {
            fill : '#6BA5D7',
            strokeColor :   '#6BA5D7'
        }
    }
  }
  };
  
  
  var diagram = new ej.diagrams.Diagram({
  width: '650px',
  height: '350px',
  nodes: nodes,
  connectors: [connector],
  }, '#element');
  
  document.getElementById('group').onclick = () => {
    diagram.group();
  };
  document.getElementById('unGroup').onclick = () => {
    diagram.unGroup();
  };
  
  