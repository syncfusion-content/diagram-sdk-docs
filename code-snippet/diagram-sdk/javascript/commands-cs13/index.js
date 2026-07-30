ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.NodeModel);
//Initializes the node
var nodes = [
  {
    id: 'node1',
    width: 90,
    height: 60,
    offsetX: 140,
    offsetY: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
  },
  {
    id: 'node2',
    width: 100,
    height: 60,
    offsetX: 100,
    offsetY: 170,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
  },
  {
    id: 'node3',
    width: 140,
    height: 60,
    offsetX: 100,
    offsetY: 240,
    style: { fill: '#6BA5D7', strokeColor: 'white', strokeWidth: 1 },
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
let selectorArray = [diagram.nodes[0], diagram.nodes[1], diagram.nodes[2]];
//Selects the nodes
diagram.select(selectorArray);
// Sets direction as left and alignment mode as 'Selector'
diagram.align('Left', selectorArray, 'Selector');
