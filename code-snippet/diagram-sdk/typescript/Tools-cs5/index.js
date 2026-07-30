var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: 700,
    //Drawing object to draw polygon shape
    drawingObject: {
      shape: { type: 'Basic', shape: 'Polygon' },
    },
    //To activate the drawing tool once
    tool: ej.diagrams.DiagramTools.DrawOnce,
  });
  diagram.appendTo('#element');
  