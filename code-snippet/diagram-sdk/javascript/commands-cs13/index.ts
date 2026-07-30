import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
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
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
});

diagram.appendTo('#element');
let selectorArray = [diagram.nodes[0], diagram.nodes[1], diagram.nodes[2]];
//Selects the nodes
diagram.select(selectorArray);
// Sets direction as left and alignment mode as 'Selector'
diagram.align('Left', selectorArray, 'Selector');
