import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

let node: NodeModel = {
  id: 'node1',
  width: 100,
  height: 100,
  offsetX: 100,
  offsetY: 100,
  annotations: [{ content: 'Node1' }],
};
var node2: NodeModel = {
  id: 'node2',
  width: 100,
  height: 100,
  offsetX: 200,
  offsetY: 200,
  annotations: [{ content: 'Node2' }],
};

var node3: NodeModel = {
  id: 'node3',
  width: 100,
  height: 100,
  offsetX: 300,
  offsetY: 300,
  annotations: [{ content: 'Node3' }],
};

var group: NodeModel = {
  id: 'group',
  children: ['node1', 'node2', 'node3'],
  padding: { left: 20, right: 20, top: 20, bottom: 20 },
};

let diagram: Diagram = new Diagram({
  width: '100%',
  height: 900,
  nodes: [node, node2, node3, group],
});
diagram.appendTo('#element');
diagram.select([diagram.nameTable['group']]);
