var node = {
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  style: { fill: '#6BA5D7', strokeColor: 'white' },
  annotations: [{ content: 'Center' }],
};
// initialize Diagram component

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: [node],
  },
  '#element'
);
document.getElementById('startTextEdit').onclick = () => {
  //Pass the node which you want to edit
  diagram.startTextEdit(diagram.nodes[0]);
};
