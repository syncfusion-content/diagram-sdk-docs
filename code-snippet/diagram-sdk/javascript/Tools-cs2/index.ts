import { Diagram, DiagramTools } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
  width: '100%',
  height: 700,
  //Drawing object to draw path shape
  drawingObject: {
    id: 'Path',
    style: { fill: '#fbe172' },
    annotations: [
      {
        content: 'Path',
      },
    ],
    shape: {
      type: 'Path',
      data: 'M13.560 67.524 L 21.941 41.731 L 0.000 25.790 L 27.120 25.790 L 35.501 0.000 L 43.882 25.790 L 71.000 25.790 L 49.061 41.731 L 57.441 67.524 L 35.501 51.583 z',
    },
  },
  //To maintain the drawing tool continuously
  tool: DiagramTools.ContinuousDraw,
});
diagram.appendTo('#element');
