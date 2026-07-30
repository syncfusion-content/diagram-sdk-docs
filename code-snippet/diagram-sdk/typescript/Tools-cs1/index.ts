import { Diagram, NodeModel, DiagramTools } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
  width: '100%',
  height: 700,
  //Drawing object to draw basic rectangle
  drawingObject: { shape: { type: 'Basic', shape: 'Rectangle' } } as NodeModel,
  //To maintain the drawing tool continuously
  tool: DiagramTools.ContinuousDraw,
});
diagram.appendTo('#element');
