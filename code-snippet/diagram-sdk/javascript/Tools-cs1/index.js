var diagram = new ej.diagrams.Diagram({
    width: 700,
    height: 700,
    //Drawing object to draw basic rectangle
    drawingObject: { shape: { type: 'Basic', shape: 'Rectangle' } },
    //To maintain the drawing tool continuously
    tool: ej.diagrams.DiagramTools.ContinuousDraw,
  });
  diagram.appendTo('#element');
  