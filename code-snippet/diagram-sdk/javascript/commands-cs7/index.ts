import { Diagram } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram(
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
        style: { fill: '#64abbb', strokeColor: '#64abbb' },
      },
    ],
  },
  '#element'
);
diagram.select(diagram.nodes);
(document.getElementById('right') as HTMLInputElement).onclick = () => {
  //Nudges to right
  diagram.nudge('Right');
};
(document.getElementById('left') as HTMLInputElement).onclick = () => {
  //Nudges to right
  diagram.nudge('Left');
};
(document.getElementById('up') as HTMLInputElement).onclick = () => {
  //Nudges to right
  diagram.nudge('Up');
};
(document.getElementById('down') as HTMLInputElement).onclick = () => {
  //Nudges to right
  diagram.nudge('Down');
};
