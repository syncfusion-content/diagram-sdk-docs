var nodes = [
  {
    id: 'node1', width: 100, height: 100, offsetX: 150, offsetY: 200, style: { fill: 'cornflowerblue' },
    constraints: ej.diagrams.NodeConstraints.Default &
      ~(ej.diagrams.NodeConstraints.InConnect | ej.diagrams.NodeConstraints.OutConnect)

  },
  {
    id: 'node2', width: 100, height: 100, offsetX: 400, offsetY: 200, style: { fill: 'cornflowerblue' },
    constraints: ej.diagrams.NodeConstraints.Default &
      ~(ej.diagrams.NodeConstraints.InConnect | ej.diagrams.NodeConstraints.OutConnect)
  },
];

// initialize Diagram component

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%', height: '500px',
    // Enable AutomaticPortCreation
    constraints: ej.diagrams.DiagramConstraints.Default |
                 ej.diagrams.DiagramConstraints.AutomaticPortCreation,
    snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
    nodes: nodes,
  },
  '#element'
);
