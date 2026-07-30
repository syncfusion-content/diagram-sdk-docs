import { Diagram, DiagramTools } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
  width: '100%',
  height: 700,
  //Drawing object to draw Text node
  drawingObject: {
    shape: { type: 'Text' },
  },
  //To maintain the drawing tool continuously
  tool: DiagramTools.ContinuousDraw,
});
diagram.appendTo('#element');
