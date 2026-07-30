var diagram;
//Initialize nodes
var nodes = [
  {
    id: 'node1',
    width: 70,
    height: 70,
    offsetX: 100,
    offsetY: 100,
    //Sets the flip as Vertical
    flip: ej.diagrams.FlipDirection.Vertical,
    shape: {
      type: 'Basic',
      shape: 'RightTriangle',
    },
    style: {
      fill: '#6BA5D7',
    },
  },
  {
    id: 'node2',
    width: 70,
    height: 70,
    offsetX: 180,
    offsetY: 180,
    shape: {
      type: 'Basic',
      shape: 'RightTriangle',
    },
    style: {
      fill: '#6BA5D7',
    },

  },
  {
    id: 'group',
    children: ['node1', 'node2',],
    padding: { left: 20, right: 20, top: 20, bottom: 20 },
    //Sets the flip as Horizontal
    flip: ej.diagrams.FlipDirection.Horizontal,
  }
];

//Initializes diagram control
diagram = new ej.diagrams.Diagram(
  {
    width: 900,
    height: 900,
    nodes: nodes,
  },
  '#element'
);
