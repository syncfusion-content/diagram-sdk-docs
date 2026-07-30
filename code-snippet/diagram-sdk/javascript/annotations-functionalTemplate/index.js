var node = {
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
  annotations: [
    {
      id: 'Node',
      width: 100,
      height: 20,
    },
  ],
};
let connector = {
  id: 'connector1',
  sourcePoint: {
    x: 300,
    y: 100,
  },
  targetPoint: {
    x: 400,
    y: 300,
  },
  type: 'Orthogonal',
  //Sets the annotation for the node
  annotations: [
    {
      id: 'connector',
      width: 100,
      height: 50,
    },
  ],
};

function getTemplate(obj) {
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
// initialize Diagram component

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: [node],
    connectors: [connector],
    annotationTemplate: getTemplate.bind(this),
  },
  '#element'
);
