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
  offsetY: 350,
  annotations: [{ content: 'Node3' }],
};
var node4 = {
  id: 'node4',
  width: 100,
  height: 100,
  offsetX: 500,
  offsetY: 350,
  annotations: [{ content: 'Node4' }],
};
var group1 = {
  id: 'group1',
  children: ['node1', 'node2'],
  padding: { left: 20, right: 20, top: 20, bottom: 20 },
  style: { fill: 'green' },
};
var group2 = {
  id: 'group2',
  children: ['node3', 'node4'],
  padding: { left: 20, right: 20, top: 20, bottom: 20 },
  style: { fill: 'skyblue' },
};
var group3 = {
  id: 'group3',
  children: ['group1', 'group2'],
  padding: { left: 20, right: 20, top: 20, bottom: 20 },
  style: { fill: 'yellow' },
};

//Initializes diagram control
diagram = new ej.diagrams.Diagram(
  {
    width: 900,
    height: 900,
    nodes: [node, node2, node3, node4, group1, group2, group3],
  },
  '#element'
);
diagram.select([diagram.nameTable['group3']]);
