var diagram;
var node = {
  id: 'node1',
  width: 100,
  height: 100,
  offsetX: 100,
  offsetY: 100,
  annotations: [{ content: 'Node1' }],
};
var node2 = {
  id: 'node2',
  width: 100,
  height: 100,
  offsetX: 200,
  offsetY: 200,
  annotations: [{ content: 'Node2' }],
};
var node3 = {
  id: 'node3',
  width: 100,
  height: 100,
  offsetX: 300,
  offsetY: 300,
  annotations: [{ content: 'Node3' }],
};
var group = {
  id: 'group',
  children: ['node1', 'node2', 'node3'],
  padding: { left: 20, right: 20, top: 20, bottom: 20 },
  // style: { strokeColor: 'green' },
};

//Initializes diagram control
diagram = new ej.diagrams.Diagram(
  {
    width: 900,
    height: 900,
    nodes: [node, node2, node3, group],
  },
  '#element'
);
diagram.select([diagram.nameTable['group']]);
