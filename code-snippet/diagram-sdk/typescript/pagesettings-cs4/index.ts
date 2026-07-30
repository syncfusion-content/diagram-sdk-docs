import {
    Diagram,
    ConnectorModel,
    NodeModel,
    BoundaryConstraints,
  } from '@syncfusion/ej2-diagrams';
  let diagram: Diagram;
  let connector: ConnectorModel = {
    id: 'connector1',
    style: { strokeColor: '#6BA5D7', fill: '#6BA5D7', strokeWidth: 2 },
    targetDecorator: { style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' } },
    sourcePoint: {
      x: 300,
      y: 100,
    },
    targetPoint: {
      x: 400,
      y: 100,
    },
  };
  let node: NodeModel = {
    id: 'node1',
    width: 150,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
  };
  let node2: NodeModel = {
    id: 'node2',
    width: 80,
    height: 130,
    offsetX: 200,
    offsetY: 200,
    style: { fill: '#6BA5D7', strokeColor: '#6BA5D7' },
  };
  diagram = new Diagram({
    width: 800,
    height: 800,
    nodes: [node, node2],
    connectors: [connector],
    pageSettings: {
      // Sets the BoundaryConstraints to page
      boundaryConstraints: 'Page',
      background: {
        color: 'grey',
      },
      width: 400,
      height: 400,
      showPageBreaks: true,
    },
  });
  diagram.appendTo('#element');
  