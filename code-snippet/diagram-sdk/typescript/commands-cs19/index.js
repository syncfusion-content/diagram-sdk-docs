//Initializes the Diagram component
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '350px',
    nodes: [
      {
        id: 'node1',
        offsetX: 100,
        offsetY: 100,
        width: 70,
        height: 40,
        style: { fill: '#64abbb' },
        annotations: [{ content: 'Node 1' }],
      },
    ],
  },
  '#element'
);
document.getElementById('rotateClockwise').onclick = () => {
  let node = diagram.nodes[0];
  /**
   * paramter 1 - Rotate item
   * paramter 2 - angle to be rotated
   */
  diagram.rotate(node, 45);
};
document.getElementById('rotateAntiClockwise').onclick = () => {
  let node = diagram.nodes[0];
  /**
   * paramter 1 - Rotate item
   * paramter 2 - angle to be rotated
   */
  diagram.rotate(node, -45);
};
