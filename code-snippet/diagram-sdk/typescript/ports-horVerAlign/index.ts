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
      annotations: [{ content: 'Left Top' }],
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Left',
          verticalAlignment: 'Top',
        },
      ],
    },
    {
      id: 'node2',
      offsetX: 250,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [{ content: 'Left Bottom' }],
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Left',
          verticalAlignment: 'Bottom',
        },
      ],
    },
    {
      id: 'node3',
      offsetX: 400,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [{ content: 'Left Center' }],
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Left',
          verticalAlignment: 'Center',
        },
      ],
    },
    {
      id: 'node4',
      offsetX: 100,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [{ content: 'Right Top' }],
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Right',
          verticalAlignment: 'Top',
        },
      ],
    },
    {
      id: 'node5',
      offsetX: 250,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [{ content: 'Right Bottom' }],
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Right',
          verticalAlignment: 'Bottom',
        },
      ],
    },
    {
      id: 'node6',
      offsetX: 400,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [{ content: 'Right Center' }],
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Right',
          verticalAlignment: 'Center',
        },
      ],
    },
    {
      id: 'node7',
      offsetX: 100,
      offsetY: 400,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [{ content: 'Center Top' }],
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Center',
          verticalAlignment: 'Top',
        },
      ],
    },
    {
      id: 'node8',
      offsetX: 250,
      offsetY: 400,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [{ content: 'Center Bottom' }],
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Center',
          verticalAlignment: 'Bottom',
        },
      ],
    },
    {
      id: 'node9',
      offsetX: 400,
      offsetY: 400,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [{ content: 'Center Center' }],
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      ports: [
        {
          id: 'nodePort',
          offset: { x: 0, y: 0 },
          visibility: PortVisibility.Visible,
          horizontalAlignment: 'Center',
          verticalAlignment: 'Center',
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
  