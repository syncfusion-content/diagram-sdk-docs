var diagram;

var nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    width:100,
    height:100,
    annotations: [{ content: 'Node interactions restricted within page' }],
  },
];
//Initialize the diagram
diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '645px',
  nodes: nodes,
  pageSettings: {
    // Boundary set as page
    boundaryConstraints: 'Page',
    width: 500,
    height: 500,
    showPageBreaks: true,
    background: { color: 'grey' },
  },
});
diagram.appendTo('#element');
