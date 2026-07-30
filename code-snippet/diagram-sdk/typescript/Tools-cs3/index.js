var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: 700,
    //Drawing object to draw connector
    drawingObject: {
      id: 'connector1',
      type: 'Straight',
    },
    //To maintain the drawing tool continuously
    tool: ej.diagrams.DiagramTools.ContinuousDraw,
  });
  diagram.appendTo('#element');
  
  //To choose different connector type to draw
  document.getElementById('connectorType').onchange = (args) => {
    var type = args.target.value;
    diagram.drawingObject.type = type;
    diagram.dataBind();
  };
  