import {
    Diagram,
    DiagramTools,
    ConnectorModel,
  } from '@syncfusion/ej2-diagrams';
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: 700,
    //Drawing object to draw connector
    drawingObject: {
      id: 'connector1',
      type: 'Straight',
    },
    //To maintain the drawing tool continuously
    tool: DiagramTools.ContinuousDraw,
  });
  diagram.appendTo('#element');
  //To choose different connector type to draw
  (document.getElementById('connectorType') as HTMLInputElement).onchange = (args: any) => {
    let type = args.target.value;
    (diagram.drawingObject as ConnectorModel).type = type;
    diagram.dataBind();
  };
  