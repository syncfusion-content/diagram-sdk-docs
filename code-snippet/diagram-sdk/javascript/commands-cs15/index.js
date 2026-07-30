ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.NodeModel);
//Initializes the node
var nodes = [
  {
    id: 'node1',
    width: 100,
    height: 80,
    offsetX: 140,
    offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node1' }],
  },
  {
    id: 'node2',
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 200,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node2' }],
  },
  {
    id: 'node3',
    width: 200,
    height: 30,
    offsetX: 140,
    offsetY: 300,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node3' }],
  },
];
//Initializes the Diagram Component
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '350px',
    nodes: nodes,
  },
  '#element'
);
document.getElementById('size').onchange = (args) => {
  var objects = diagram.nodes;
  /**
   * parameter 1 - The size option
   * parameter 2 - The collection of objects to be scaled.
   */
  diagram.sameSize(args.target.value, objects);
};
