var node = {
    shape: {
      type: 'SwimLane',
      orientation: 'Horizontal',
      //Intialize header to swimlane
      header: {
        annotation: { content: 'ONLINE PURCHASE STATUS' },
        height: 50,
        style: { fontSize: 11 },
      },
      // initialize the lane of swimlane
      lanes: [
        {
          id: 'stackCanvas1',
          // set the lane height
          height: 100,
          // set the lane info
          addInfo:{name:'lane1'}
        },
      ],
      phases: [
        {
          id: 'phase1',
          offset: 170,
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
  