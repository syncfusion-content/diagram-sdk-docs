import {
    Diagram,
    DiagramTools,
    ConnectorEditing,
    ConnectorModel,
    ConnectorConstraints,
  } from '@syncfusion/ej2-diagrams';
  //To activate the visibility of segment thumbs
  Diagram.Inject(ConnectorEditing);
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: 700,
    //Drawing object to draw Freehand connector
    drawingObject: { id: 'connector1', type: 'Freehand' },
    //To activate the drawing tool once
    tool: DiagramTools.DrawOnce,
    getConnectorDefaults: function (obj: ConnectorModel) {
      //To activate the segment editing
      obj.constraints =
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
    },
  });
  diagram.appendTo('#element');
  