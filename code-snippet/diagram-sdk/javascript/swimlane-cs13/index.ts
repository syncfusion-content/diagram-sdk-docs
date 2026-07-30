import { Diagram, NodeModel, SwimlaneModel } from '@syncfusion/ej2-diagrams';
let node: NodeModel = {
  id: 'swim1',
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
        offset: 120,
        header: { annotation: { content: 'Phase' } },
      },
      {
        id: 'phase2',
        offset: 200,
        header: { annotation: { content: 'Phase' } },
      },
    ],
    phaseSize: 20,
  },
  offsetX: 300,
  offsetY: 200,
  height: 200,
  width: 350,
};
// initialize Diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  // Add node
  nodes: [node],
});
// render initialized Diagram
diagram.appendTo('#element');
(document.getElementById('addPhase') as HTMLInputElement).onclick = () => {
  let swimlane = diagram.getObject('swim1');
  var phase = [
    {
      id: 'phase3',
      offset: 250,
      header: { annotation: { content: 'New Phase' } },
    },
  ];
  /**
   * To add phases
   * parameter 1 - object representing the swimlane to which phases will be added.
   * parameter 2 - objects representing the phases to be added.
   */
  diagram.addPhases(swimlane, phase);
};

(document.getElementById('removePhase') as HTMLInputElement).onclick = () => {
  let swimlane = diagram.getObject('swim1');
  let phase = (swimlane.shape as SwimlaneModel).phases[
    (swimlane.shape as SwimlaneModel).phases.length - 1
  ];
  /**
   * To remove phase
   * parameter 1 - representing the swimlane to remove the phase from.
   * paramter 2 - representing the phase to be removed.
   */
  diagram.removePhase(swimlane, phase);
};
