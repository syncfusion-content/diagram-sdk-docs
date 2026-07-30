

import {
  Diagram,
  NodeModel,
  ConnectorModel,
  NodeConstraints,
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram;

function getNodeDefaults(obj: NodeModel): NodeModel {
  obj.width = 100;
  obj.height = 100;
  obj.shape = { type: 'Basic', shape: 'Ellipse' };
  return obj;
}

//Sets the default values of a Connector
function getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
  connector.targetDecorator.style = { fill: '#024249', strokeColor: '#024249' };
  return { style: { strokeColor: '#024249', strokeWidth: 2 } };
}

// tslint:disable-next-line:max-func-body-length

let nodes: NodeModel[] = [
  {
    id: 'Node1',
    offsetX: 100,
    offsetY: 100,
    annotations: [{ content: 'Select disabled' }],
    constraints: NodeConstraints.Default & ~NodeConstraints.Select,
  },
  {
    id: 'Node2',
    offsetX: 250,
    offsetY: 100,
    annotations: [{ content: 'Rotate disabled' }],
    constraints: NodeConstraints.Default & ~NodeConstraints.Rotate,
  },
  {
    id: 'Node3',
    offsetX: 400,
    offsetY: 100,
    annotations: [{ content: 'Resize disabled' }],
    constraints: NodeConstraints.Default & ~NodeConstraints.Resize,
  },
  {
    id: 'Node4',
    offsetX: 550,
    offsetY: 100,
    annotations: [{ content: 'Drag disabled' }],
    constraints: NodeConstraints.Default & ~NodeConstraints.Drag,
  },
  {
    id: 'Node5',
    offsetX: 700,
    offsetY: 100,
    annotations: [{ content: 'Tooltip enabled' }],
    constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
    tooltip: { content: 'Node Tooltip', relativeMode: 'Object' },
  },
];
//Initializes diagram control
diagram = new Diagram({
  width: '100%',
  height: '645px',
  nodes: nodes,
  getNodeDefaults: getNodeDefaults,
});
diagram.appendTo('#element');
