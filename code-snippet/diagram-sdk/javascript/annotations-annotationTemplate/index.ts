import { ConnectorModel, Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
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
  //Sets the annotation for the node
  annotations: [
    {
      id: 'Node',
      width: 100,
      height: 30,
    },
  ],
};
// A connector is created and stored in connectors array.
let connector: ConnectorModel = {
  id: 'connector1',
  sourcePoint: {
    x: 300,
    y: 100,
  },
  targetPoint: {
    x: 400,
    y: 300,
  },
  type: 'Straight',
  //Sets the annotation for the node
  annotations: [
    {
      id: 'Connector',
      offset: 0.5,
      width: 100,
      height: 50,
    },
  ],
};
// initialize diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  // Add node
  nodes: [node],
  // Add connector
  connectors: [connector],
  annotationTemplate: '#annotationTemplate',
});
// render initialized diagram
diagram.appendTo('#element');
