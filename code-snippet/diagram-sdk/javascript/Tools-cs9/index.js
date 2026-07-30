var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: 700,
    //Drawing object to draw Freehand connector
    drawingObject: { id: 'connector1', type: 'Freehand' },
    //To activate the drawing tool once
    tool: ej.diagrams.DiagramTools.DrawOnce,
    getConnectorDefaults: function (obj) {
      //To activate the segment editing
      obj.constraints =
        ej.diagrams.ConnectorConstraints.Default |
        ej.diagrams.ConnectorConstraints.DragSegmentThumb;
    },
  });
  diagram.appendTo('#element');
  