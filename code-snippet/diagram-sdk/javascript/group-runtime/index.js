var diagram;
let node = {
  id: 'node1',
  width: 100,
  height: 100,
  offsetX: 100,
  offsetY: 100,
  annotations: [{ content: 'Node1' }],
};
let node2 = {
  id: 'node2',
  width: 100,
  height: 100,
  offsetX: 200,
  offsetY: 200,
  annotations: [{ content: 'Node2' }],
};
let node3 = {
  id: 'node3',
  width: 100,
  height: 100,
  offsetX: 300,
  offsetY: 300,
  annotations: [{ content: 'Node3' }],
};

//Initializes diagram control
diagram = new ej.diagrams.Diagram(
  {
    width: 900,
    height: 900,
    nodes: [node, node2, node3],
  },
  '#element'
);
diagram.selectAll();

document.getElementById('group').onclick = function () {
  diagram.group();
};
