import {
    ConnectorModel,
    Diagram,
    NodeModel,
    ShapeAnnotationModel,
  } from '@syncfusion/ej2-diagrams';
  // A node is created and stored in nodes array.
  let nodes: NodeModel[] = [
    {
      // Position of the node
      offsetX: 100,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [
        {
          content: 'Clip Wrap',
          offset: { x: 0.5, y: 1.4 },
        },
        {
          content:
            'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text long annotation text long annotation text',
          style: { textOverflow: 'Clip', textWrapping: 'Wrap' },
        },
      ],
    },
    {
      // Position of the node
      offsetX: 300,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [
        {
          content: 'Clip NoWrap',
          offset: { x: 0.5, y: 1.4 },
        },
        {
          content:
            'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
          style: { textOverflow: 'Clip', textWrapping: 'NoWrap' },
        },
      ],
    },
    {
      // Position of the node
      offsetX: 500,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [
        {
          content: 'Clip WrapWithOverflow',
          offset: { x: 0.5, y: 1.4 },
        },
        {
          content:
            'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
          style: { textOverflow: 'Clip', textWrapping: 'WrapWithOverflow' },
        },
      ],
    },
  
    {
      // Position of the node
      offsetX: 100,
      offsetY: 300,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [
        {
          content: 'Ellipsis Wrap',
          offset: { x: 0.5, y: 1.4 },
        },
        {
          content:
            'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text long annotation text long annotation text',
          style: { textOverflow: 'Ellipsis', textWrapping: 'Wrap' },
        },
      ],
    },
    {
      // Position of the node
      offsetX: 300,
      offsetY: 300,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [
        {
          content: 'Ellipsis NoWrap',
          offset: { x: 0.5, y: 1.4 },
        },
        {
          content:
            'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
          style: { textOverflow: 'Ellipsis', textWrapping: 'NoWrap' },
        },
      ],
    },
    {
      // Position of the node
      offsetX: 500,
      offsetY: 300,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [
        {
          content: 'Ellipsis WrapWithOverflow',
          offset: { x: 0.5, y: 1.4 },
        },
        {
          content:
            'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
          style: { textOverflow: 'Ellipsis', textWrapping: 'WrapWithOverflow' },
        },
      ],
    },
  
    {
      // Position of the node
      offsetX: 100,
      offsetY: 700,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [
        {
          content: 'Wrap Wrap',
          offset: { x: 0.5, y: 1.4 },
        },
        {
          content:
            'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text long annotation text long annotation text',
          style: { textOverflow: 'Wrap', textWrapping: 'Wrap' },
        },
      ],
    },
    {
      // Position of the node
      offsetX: 300,
      offsetY: 500,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [
        {
          content: 'Wrap NoWrap',
          offset: { x: 0.5, y: 1.4 },
        },
        {
          content:
            'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
          style: { textOverflow: 'Wrap', textWrapping: 'NoWrap' },
        },
      ],
    },
    {
      // Position of the node
      offsetX: 500,
      offsetY: 700,
      // Size of the node
      width: 100,
      height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      annotations: [
        {
          content: 'Wrap WrapWithOverflow',
          offset: { x: 0.5, y: 1.4 },
        },
        {
          content:
            'Long Annotation Text, Long annotation text long annotation text long annotation text long annotation text',
          style: { textOverflow: 'Wrap', textWrapping: 'WrapWithOverflow' },
        },
      ],
    },
  ];
  // initialize diagram component
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: nodes,
  });
  // render initialized diagram
  diagram.appendTo('#element');
  