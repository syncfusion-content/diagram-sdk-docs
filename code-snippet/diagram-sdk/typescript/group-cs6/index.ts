import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

let node: NodeModel = {
  id: 'node1',
  width: 150,
  height: 100,
  offsetX: 100,
  offsetY: 100,
  annotations: [{ content: 'Node1' }],
};
var node2: NodeModel = {
  id: 'node2',
  width: 80,
  height: 130,
  offsetX: 200,
  offsetY: 200,
  annotations: [{ content: 'Node2' }],
};
var group: NodeModel = {
  id: 'group1',
  children: ['node1', 'node2'],
};
var node3: NodeModel = {
  id: 'node3',
  width: 100,
  height: 100,
  offsetX: 300,
  offsetY: 300,
  annotations: [{ content: 'Node3' }],
};

let diagram: Diagram = new Diagram({
  width: '100%',
  height: 900,
  nodes: [node, node2, group, node3],
});
diagram.appendTo('#element');

//To Add child to specifc group at Runtime
(document.getElementById('addChildToGroup') as HTMLInputElement).onclick = () => {
  diagram.addChildToGroup(group, 'node3');
};

//To remove the specific children from group at runtime
(document.getElementById('removeChildFromGroup') as HTMLInputElement).onclick = () => {
  diagram.removeChildFromGroup(group, 'node3');
};
