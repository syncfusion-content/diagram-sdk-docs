import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let node: NodeModel = {
  shape: {
    type: 'SwimLane',
    orientation: 'Horizontal',
    //Intialize header to swimlane
    header: {
      annotation: { content: 'ONLINE PURCHASE STATUS' },
      height: 50,
      style: { fontSize: 11 },
    },
    lanes: [
      {
        id: 'stackCanvas1',
        height: 100,
        // customization of lane header
        header: {
          annotation: { content: 'Online Consumer' },
          width: 30,
          style: { fontSize: 11 },
          style: { fill: 'red' },
        },
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

(document.getElementById('updateLane') as HTMLInputElement).onclick = () => {
  let swimlane: NodeModel = diagram.nodes[0];
  swimlane.shape.lanes[0].header.style.fill = 'blue';
  swimlane.shape.lanes[0].header.annotation.style.color = 'white';
  diagram.dataBind();
};
