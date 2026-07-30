import { Diagram } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram(
  {
    width: '700px',
    height: '350px',
    scrollSettings: { scrollLimit: 'Infinity' },
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

(document.getElementById('rotateClockwise') as HTMLInputElement).onclick = () => {
  let node = diagram.nodes[0];
  /**
   * paramter 1 - Rotate item
   * paramter 2 - angle to be rotated
   */
  diagram.rotate(node, 45);
};
(document.getElementById('rotateAntiClockwise') as HTMLInputElement).onclick = () => {
  let node = diagram.nodes[0];
  /**
   * paramter 1 - Rotate item
   * paramter 2 - angle to be rotated
   */
  diagram.rotate(node, -45);
};
