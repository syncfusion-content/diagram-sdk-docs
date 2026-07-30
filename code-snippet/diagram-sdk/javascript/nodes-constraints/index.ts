import { DataManager } from '@syncfusion/ej2-data';
import {
  DataBinding,
  Diagram,
  NodeConstraints,
  NodeModel,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(DataBinding);
let nodes = [
  {
    id: 'node1',
    constraints: NodeConstraints.Default & ~NodeConstraints.Select,
    offsetX: 100,
    offsetY: 100,
    annotations: [{ content: 'Node Selection disabled' }],
  },
  {
    id: 'node2',
    constraints: NodeConstraints.Default & ~NodeConstraints.Resize,
    offsetX: 300,
    offsetY: 100,
    annotations: [{ content: 'Node Resize disabled' }],
  },
  {
    id: 'node3',
    constraints: NodeConstraints.Default & ~NodeConstraints.Rotate,
    offsetX: 500,
    offsetY: 100,
    annotations: [{ content: 'Node Rotate disabled' }],
  },
  {
    id: 'node4',
    constraints: NodeConstraints.Default & ~NodeConstraints.Drag,
    offsetX: 700,
    offsetY: 100,
    annotations: [{ content: 'Node Drag disabled' }],
  },
  {
    id: 'node5',
    constraints: NodeConstraints.Default & ~NodeConstraints.Delete,
    offsetX: 100,
    offsetY: 300,
    annotations: [{ content: 'Node Delete disabled' }],
  },
];
// initialize Diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  getNodeDefaults: function (node: NodeModel) {
    node.height = 100;
    node.width = 100;
    node.style = { fill: 'yellow', strokeColor: 'yellow' };
    return node;
  },
});
// render initialized Diagram
diagram.appendTo('#element');
