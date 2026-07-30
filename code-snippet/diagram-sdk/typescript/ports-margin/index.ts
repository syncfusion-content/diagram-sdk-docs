import {
    ConnectorModel,
    Diagram,
    NodeModel,
    PortConstraints,
    PortVisibility,
  } from '@syncfusion/ej2-diagrams';
  // A node is created and stored in nodes array.
  
  let nodes: NodeModel[] = [
    {
      id: 'node1',
      offsetX: 100,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [{ content: 'margin:{left:50}' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 1, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Left',
          verticalAlignment: 'Top',
          margin: { left: 50 },
        },
      ],
    },
  ];
  
  // initialize diagram component
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
  });
  // render initialized diagram
  diagram.appendTo('#element');
  