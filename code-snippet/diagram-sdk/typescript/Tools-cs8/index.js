var diagram = new ej.diagrams.Diagram({
    width: 700,
    height: 700,
    drawingObject: { shape: { type: 'Basic', shape: 'Rectangle' } },
    tool: ej.diagrams.DiagramTools.DrawOnce,
    elementDraw: function elementDraw(args) {
      if (args.state === 'Completed') {
        // Example of alerting when a rectangle is drawn
        alert('Element draw - Rectangle');
      }
    },
  });
  diagram.appendTo('#element');
  