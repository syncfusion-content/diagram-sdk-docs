import { Diagram, NodeModel, DiagramConstraints, NodeConstraints, SnapConstraints } from '@syncfusion/ej2-diagrams';
const nodes: NodeModel[] = [
  {
    id: 'node1', width: 100, height: 100, offsetX: 150, offsetY: 200, style: { fill: 'cornflowerblue' },
    constraints: NodeConstraints.Default &
      ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)

  },
  {
    id: 'node2', width: 100, height: 100, offsetX: 400, offsetY: 200, style: { fill: 'cornflowerblue' },
    constraints: NodeConstraints.Default &
      ~(NodeConstraints.InConnect | NodeConstraints.OutConnect)
  },
];

// initialize Diagram component
let diagram: Diagram = new Diagram({
  width: '100%', height: '500px',
  // Enable AutomaticPortCreation
  constraints: DiagramConstraints.Default |
               DiagramConstraints.AutomaticPortCreation,
  snapSettings: { constraints: SnapConstraints.None },
  nodes: nodes,
});
// render initialized Diagram
diagram.appendTo('#element');
