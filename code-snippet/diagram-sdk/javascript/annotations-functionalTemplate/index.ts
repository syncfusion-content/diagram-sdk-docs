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
  //Sets the annotation for the node
  annotations: [
    {
      id: 'Node',
      width: 100,
      height: 30,
    },
  ],
  style: {
    fill: '#6BA5D7',
    strokeColor: 'white',
  },
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

function getTemplate(obj: any) {
  let background = 'yellow';
  let height = '50%';
  if (obj.id === 'Node') {
    background = 'red';
    height = '100%';
  }
  let template = `<div style="width:100%;height:${height};overflow:hidden; background:${background}"><input type="button" value="${obj.id}"
 style="width:100px;" /></div>`;
  return template;
}
// initialize diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  // Add node
  nodes: [node],
  // Add connector
  connectors: [connector],
  annotationTemplate: getTemplate.bind(this),
});
// render initialized diagram
diagram.appendTo('#element');
