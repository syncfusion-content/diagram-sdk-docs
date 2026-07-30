import {
    Diagram,
    ConnectorModel,
    DiagramConstraints,
    LineRouting,
  } from '@syncfusion/ej2-diagrams';
  Diagram.Inject(LineRouting);
  let connectors: ConnectorModel[] = [
    {
      id: 'connector1',
      type: 'Orthogonal',
      style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2,
      },
      targetDecorator: {
        style: {
          fill: '#6BA5D7',
          strokeColor: '#6BA5D7',
        },
      },
      sourceID: 'node1',
      targetID: 'node2',
    },
  ];
  
  let nodes = [
    {
      id: 'node1',
      offsetX: 100,
      offsetY: 100,
      width: 150,
      height: 70,
      style: { fill: 'skyblue' },
    },
    {
      id: 'node2',
      offsetX: 500,
      offsetY: 150,
      width: 150,
      height: 70,
      style: { fill: 'skyblue' },
    },
    {
      id: 'node3',
      offsetX: 300,
      offsetY: 100,
      width: 150,
      height: 70,
      style: { fill: 'skyblue' },
    },
  ];
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
    nodes: nodes,
    constraints: DiagramConstraints.Default | DiagramConstraints.LineRouting,
  });
  diagram.appendTo('#element');