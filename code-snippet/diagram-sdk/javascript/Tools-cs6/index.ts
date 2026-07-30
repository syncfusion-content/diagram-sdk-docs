import {
    Diagram,
    DiagramTools,
    ConnectorEditing,
    ConnectorModel,
    ConnectorConstraints,
  } from '@syncfusion/ej2-diagrams';
  Diagram.Inject(ConnectorEditing);
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: 700,
    //Drawing object to draw polyline connector
    drawingObject: { id: 'connector1', type: 'Polyline' },
    //To activate the drawing tool once
    tool: DiagramTools.DrawOnce,
    getConnectorDefaults: function (obj: ConnectorModel) {
      //To activate the visibility of segment thumb
      obj.constraints =
        ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb;
    },
  });
  diagram.appendTo('#element');
  