import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let node1: NodeModel = {
  id: 'swimlane1',
  shape: {
    type: 'SwimLane',
    orientation: 'Horizontal',
    //Intialize header to swimlane
    header: {
      annotation: {
        content: 'Horizontal Swimlane',
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
let node2: NodeModel = {
  id: 'swimlane2',
  shape: {
    type: 'SwimLane',
    orientation: 'Vertical',
    //Intialize header to swimlane
    header: {
      annotation: {
        content: 'Vertical Swimlane',
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
  offsetX: 800,
  offsetY: 200,
  height: 200,
  width: 350,
};

// initialize Diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  // Add node
  nodes: [node1, node2],
});
// render initialized Diagram
diagram.appendTo('#element');
