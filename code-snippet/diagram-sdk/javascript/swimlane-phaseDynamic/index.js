var node = {
  id: 'swimlane',
  shape: {
    type: 'SwimLane',
    orientation: 'Horizontal',
    //Intialize header to swimlane
    header: {
      annotation: {
        content: 'ONLINE PURCHASE STATUS',
        style: { fill: '#111111' },
      },
      height: 50,
      style: { fontSize: 11 },
    },
    lanes: [
      {
        id: 'stackCanvas1',
        height: 100,
        header: {
          annotation: { content: 'CUSTOMER' },
          width: 50,
          style: { fontSize: 11 },
        },
      },
    ],
    phases: [
      {
        id: 'phase1',
        offset: 150,
        addInfo: { name: 'phase1' },
        header: {
          annotation: {
            content: 'First phase',
            style: { fill: 'yellow', color: 'red' },
          },
        },
      },
      {
        id: 'phase2',
        offset: 200,
        header: { annotation: { content: 'Second phase' } },
        style: { fill: 'violet' },
      },
    ],
    phaseSize: 40,
  },
  offsetX: 300,
  offsetY: 200,
  height: 200,
  width: 350,
};

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: [node],
});
diagram.appendTo('#element');

document.getElementById('updatePhase').onclick = () => {
  let swimlane = diagram.nameTable['swimlane'];
  let phase = swimlane.shape.phases[0];
  phase.header.style.fill = 'orange';
  phase.header.annotation.content = 'phase updated';
  diagram.dataBind();
};
