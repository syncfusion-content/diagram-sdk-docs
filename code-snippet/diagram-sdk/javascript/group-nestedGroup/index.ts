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
  offsetY: 350,
  annotations: [{ content: 'Node3' }],
};
var node4: NodeModel = {
  id: 'node4',
  width: 100,
  height: 100,
  offsetX: 500,
  offsetY: 350,
  annotations: [{ content: 'Node4' }],
};

var group1: NodeModel = {
  id: 'group1',
  children: ['node1', 'node2'],
  padding: { left: 20, right: 20, top: 20, bottom: 20 },
  style: { fill: 'green' },
};
var group2: NodeModel = {
  id: 'group2',
  children: ['node3', 'node4'],
  padding: { left: 20, right: 20, top: 20, bottom: 20 },
  style: { fill: 'skyblue' },
};
var group3: NodeModel = {
  id: 'group3',
  children: ['group1', 'group2'],
  padding: { left: 20, right: 20, top: 20, bottom: 20 },
  style: { fill: 'yellow' },
};

let diagram: Diagram = new Diagram({
  width: '100%',
  height: 900,
  nodes: [node, node2, node3, node4, group1, group2, group3],
});
diagram.appendTo('#element');
diagram.select([diagram.nameTable['group']]);
