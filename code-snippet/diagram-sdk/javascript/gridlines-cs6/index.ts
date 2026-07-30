import {
    Diagram,
    SnapConstraints,
    SnapSettingsModel,
    Snapping,
    NodeModel,
  } from '@syncfusion/ej2-diagrams';
  Diagram.Inject(Snapping);
  let nodes: NodeModel[] = [
    {
      id: 'node1',
      style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
      width: 100,
      height: 100,
      offsetX: 100,
      offsetY: 100,
    },
    {
      id: 'node2',
      style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
      width: 100,
      height: 100,
      offsetX: 300,
      offsetY: 100,
    },
  ];
  let snapSettings: SnapSettingsModel = {
    // Enable snap to object constraint
    constraints: SnapConstraints.SnapToObject | SnapConstraints.ShowLines,
    // Sets the Snap object distance
    snapObjectDistance: 10,
  };
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '500px',
    nodes: nodes,
    snapSettings: snapSettings,
  });
  diagram.appendTo('#element');
  