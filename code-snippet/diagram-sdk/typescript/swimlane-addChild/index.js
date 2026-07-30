var node = {
    id: 'swimlane',
    shape: {
      type: 'SwimLane',
      orientation: 'Horizontal',
      //Intialize header to swimlane
      header: {
        annotation: {
          content: 'ONLINE PURCHASE STATUS',
          style: { fill: '#111111' },
        },
        height: 50,
        style: { fontSize: 11 },
      },
      lanes: [
        {
          id: 'stackCanvas1',
          height: 100,
          header: {
            annotation: { content: 'CUSTOMER' },
            width: 50,
            style: { fontSize: 11 },
          },
        },
      ],
      phases: [
        {
          id: 'phase1',
          offset: 150,
          addInfo: { name: 'phase1' },
          header: { annotation: { content: 'Phase' } },
        },
      ],
      phaseSize: 20,
    },
    offsetX: 300,
    offsetY: 200,
    height: 200,
    width: 350,
  };
  
  // initialize Diagram component
  
  var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    nodes: [node],
  });
  diagram.appendTo('#element');
  document.getElementById('addChildToLane').onclick = () => {
    var node = [
      {
        id: 'newNode',
        width: 100,
        height: 50,
      },
    ];
    diagram.addNodeToLane(node, 'swimlane', 'stackCanvas1');
  };
  