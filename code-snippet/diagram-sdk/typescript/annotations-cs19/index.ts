import {
    Diagram,
    NodeModel,
    AnnotationConstraints,
    ConnectorModel,
  } from '@syncfusion/ej2-diagrams';
  // A node is created and stored in nodes array.
  let node: NodeModel = {
    id: 'node1',
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    // Sets the multiple annotation for the node
    annotations: [
      {
        content: 'Left',
        offset: {
          x: 0.12,
          y: 0.1,
        },
      },
      {
        content: 'Center',
        offset: {
          x: 0.5,
          y: 0.5,
        },
      },
      {
        content: 'Right',
        offset: {
          x: 0.82,
          y: 0.9,
        },
      },
    ],
  };
  let connector: ConnectorModel = {
    id: 'connector',
    type: 'Orthogonal',
    sourcePoint: { x: 200, y: 200 },
    targetPoint: { x: 300, y: 300 },
    // Sets the multiple annotation for the node
    annotations: [
      {
        content: 'connector1',
        offset: 0.2,
      },
      {
        content: 'connector1',
        offset: 0.6,
      },
      {
        content: 'connector1',
        offset: 0.8,
      },
    ],
  };
  // initialize diagram component
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node],
    connectors: [connector],
  });
  // render initialized diagram
  diagram.appendTo('#element');
  