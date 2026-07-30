import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let node: NodeModel = {
  shape: {
    type: 'SwimLane',
    orientation: 'Horizontal',
    // customize the swimlane header
    header: {
      annotation: { content: 'SALES PROCESS FLOW CHART' },
      height: 70,
      style: { fontSize: 11, fill: 'pink' },
    },
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
  nodes: [node],
});
// render initialized Diagram
diagram.appendTo('#element');

(document.getElementById('updateHeaderStyle') as HTMLInputElement).onclick =
  () => {
    diagram.nodes[0].shape.header.style.fill = 'red';
    diagram.dataBind();
  };
