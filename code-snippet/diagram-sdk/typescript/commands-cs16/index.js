ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.NodeModel);
//Initializes the node
var nodes = [
  {
    id: 'node1',
    width: 100,
    height: 60,
    offsetX: 140,
    offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node1' }],
  },
  {
    id: 'node2',
    width: 100,
    height: 60,
    offsetX: 200,
    offsetY: 170,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
    annotations: [{ content: 'Node2' }],
  },
  {
    id: 'node3',
    width: 100,
    height: 60,
    offsetX: 400,
    offsetY: 240,
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
let selArray = [];
selArray.push(diagram.nodes[0], diagram.nodes[1], diagram.nodes[2]);
//Selects the nodes
diagram.select(selArray);
//Distributes space between the nodes
diagram.distribute('RightToLeft', diagram.selectedItems.nodes);
