import {
    Diagram,
    NodeModel,
    DiagramTools,
    IElementDrawEventArgs,
  } from '@syncfusion/ej2-diagrams';
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: 700,
    drawingObject: { shape: { type: 'Basic', shape: 'Rectangle' } } as NodeModel,
    tool: DiagramTools.DrawOnce,
    elementDraw: function elementDraw(args: IElementDrawEventArgs) {
      if (args.state === 'Completed') {
        // Example of alerting when a rectangle is drawn
        alert('Element draw - Rectangle');
      }
    },
  });
  diagram.appendTo('#element');
  