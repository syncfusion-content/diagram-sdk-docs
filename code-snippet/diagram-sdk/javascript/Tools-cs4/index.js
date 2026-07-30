var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: 700,
    //Drawing object to draw Text node
    drawingObject: {
      shape: { type: 'Text' },
    },
    //To maintain the drawing tool continuously
    tool: ej.diagrams.DiagramTools.ContinuousDraw,
  });
  diagram.appendTo('#element');
  