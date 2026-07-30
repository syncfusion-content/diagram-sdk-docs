import {
    ConnectorModel,
    Diagram,
    NodeModel,
    PortVisibility,
  } from '@syncfusion/ej2-diagrams';
  let connectors: ConnectorModel[] = [
    {
      id: 'connector1',
      sourcePoint: { x: 100, y: 200 },
      targetPoint: { x: 300, y: 220 },
      type: 'Orthogonal',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
          alignment: 'Before',
        },
      ],
    },
    {
      id: 'connector2',
      sourcePoint: { x: 320, y: 200 },
      targetPoint: { x: 500, y: 220 },
      type: 'Orthogonal',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
          alignment: 'Center',
        },
      ],
    },
    {
      id: 'connector3',
      sourcePoint: { x: 520, y: 200 },
      targetPoint: { x: 700, y: 220 },
      type: 'Orthogonal',
      ports: [
        {
          offset: 0.5,
          visibility: PortVisibility.Visible,
          alignment: 'After',
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
  