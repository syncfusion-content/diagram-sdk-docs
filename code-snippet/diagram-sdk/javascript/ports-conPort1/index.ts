import {
    ConnectorModel,
    Diagram,
    NodeModel,
    PortVisibility,
  } from '@syncfusion/ej2-diagrams';

  let connectors: ConnectorModel[] = [
    {
      id: 'connector1',
      sourcePoint: { x: 100, y: 100 },
      targetPoint: { x: 300, y: 100 },
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
        },
      ],
    },
    {
      id: 'connector2',
      sourcePoint: { x: 100, y: 200 },
      targetPoint: { x: 300, y: 220 },
      type: 'Orthogonal',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
        },
      ],
    },
    {
      id: 'connector3',
      sourcePoint: { x: 100, y: 300 },
      targetPoint: { x: 300, y: 340 },
      type: 'Bezier',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
        },
      ],
    },
  ];
  // initialize diagram component
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
  });
  // render initialized diagram
  diagram.appendTo('#element');
  