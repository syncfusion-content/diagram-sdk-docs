var diagram;
var node = {
  id: 'node1', width: 150, height: 100, offsetX: 100, offsetY: 100, annotations: [{ content: 'Node1' }]
};
var node2 = {
  id: 'node2', width: 80, height: 130, offsetX: 200, offsetY: 200, annotations: [{ content: 'Node2' }]
};
var group = {
  id: 'group1', children: ['node1', 'node2']
};
var node3 = {
  id: 'node3', width: 100, height: 100, offsetX: 300, offsetY: 300, annotations: [{ content: 'Node3' }]
};

//Initializes diagram control
diagram = new ej.diagrams.Diagram({
  width: 900,
  height: 900,
  nodes: [node, node2, node3,group],

}, '#element');

//To Add child to specifc group at Runtime
document.getElementById('addChildToGroup').onclick = () =>{
  diagram.addChildToGroup(group, 'node3');
}

//To remove the specific children from group at runtime
document.getElementById('removeChildFromGroup').onclick = () =>{
  diagram.removeChildFromGroup(group, 'node3');
}
