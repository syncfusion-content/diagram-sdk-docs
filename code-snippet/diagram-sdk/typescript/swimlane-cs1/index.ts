import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let node1: NodeModel = {
  id: 'swimlane',
  shape: {
    type: 'SwimLane',
    header: {},
    lanes: [
      {
        id: 'stackCanvas1',
        height: 100,
      },
    ],
    phases: [
      {
        id: 'phase1',
        offset: 170,
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
  nodes: [node1],
});
// render initialized Diagram
diagram.appendTo('#element');
