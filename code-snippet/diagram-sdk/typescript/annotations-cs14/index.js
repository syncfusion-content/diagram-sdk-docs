var node =  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [
      {
        content: 'Annotation    T e x t',
        style: {
          color: 'blue',
          bold: true,
          italic: true,
          fontSize: 15,
          fontFamily: 'TimesNewRoman',
          fill: 'orange',
          whiteSpace: 'PreserveAll',
          opacity: 0.6,
        },
        visibility:true
      },
      {
        content: 'Annotation    T e x t',
        offset: { x: 0.5, y: 1 },
        style: {
          color: 'blue',
          bold: true,
          italic: true,
          fontSize: 15,
          fontFamily: 'TimesNewRoman',
          fill: 'orange',
          whiteSpace: 'PreserveAll',
          opacity: 0.6,
        },
        visibility: false,
      },
    ],
  };
  
  // initialize Diagram component
  
  var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');
  
  