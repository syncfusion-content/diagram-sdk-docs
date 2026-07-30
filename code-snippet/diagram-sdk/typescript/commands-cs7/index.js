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
          style: { fill: '#64abbb', strokeColor: '#64abbb' },
        },
      ],
    },
    '#element'
  );
  diagram.select(diagram.nodes);
  document.getElementById('right').onclick = () => {
    //Nudges to right
    diagram.nudge('Right');
  };
  document.getElementById('left').onclick = () => {
    //Nudges to right
    diagram.nudge('Left');
  };
  document.getElementById('up').onclick = () => {
    //Nudges to right
    diagram.nudge('Up');
  };
  document.getElementById('down').onclick = () => {
    //Nudges to right
    diagram.nudge('Down');
  };
  