import { Diagram, DiagramTools } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
  width: '100%',
  height: 700,
  //Drawing object to draw polygon shape
  drawingObject: {
    shape: { type: 'Basic', shape: 'Polygon' },
  },
  //To activate the drawing tool once
  tool: DiagramTools.DrawOnce,
});
diagram.appendTo('#element');
