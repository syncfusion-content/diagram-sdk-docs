import {
    Diagram,
    SnapSettingsModel,
    Snapping,
    NodeModel,
  } from '@syncfusion/ej2-diagrams';
  Diagram.Inject(Snapping);
  let snapSettings: SnapSettingsModel = {
    snapAngle: 20,
  };
  let nodes: NodeModel[] = [
    {
      id: 'node1',
      width: 100,
      style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
      height: 100,
      offsetX: 100,
      offsetY: 100,
    },
  ];
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '500px',
    nodes: nodes,
    snapSettings: snapSettings,
  });
  diagram.appendTo('#element');
  
  (document.getElementById('snapAngle') as HTMLInputElement).onchange = (args: any) => {
    //Update snapAngle dynamically
    diagram.snapSettings.snapAngle = Number(args.target.value);
    diagram.dataBind();
  };
  