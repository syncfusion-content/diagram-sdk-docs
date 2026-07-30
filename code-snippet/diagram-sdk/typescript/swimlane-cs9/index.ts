import { Diagram, NodeModel, SwimLaneModel } from '@syncfusion/ej2-diagrams';
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
        // customization of lane header
        header: {
          annotation: { content: 'Online Consumer' },
          style: { fontSize: 11, fill: 'red' },
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
(document.getElementById('addLane') as HTMLInputElement).onclick = () => {
  let swimlane = diagram.getObject('swim1');
  let lane = [
    {
      height: 100,
      style: { fill: 'lightgrey' },
      header: {
        annotation: {
          content: 'New LANE',
          style: { fill: 'brown', color: 'white', fontSize: 15 },
        },
        style: { fill: 'pink' },
      },
    },
  ];
  /**
   * To add lanes
   * parameter 1 - The swimlane to which lanes will be added.
   * parameter 2 - An array of LaneModel objects representing the lanes to be added.
   * paramter 3 - The index at which the lanes should be inserted (optional).
   */
  diagram.addLanes(swimlane, lane, 1);
};

(document.getElementById('removelane') as HTMLInputElement).onclick = () => {
  let swimlane: NodeModel = diagram.getObject('swim1');
  //To get last lane in lane collection
  let lane = (swimlane.shape as SwimLaneModel).lanes[
    (swimlane.shape as SwimLaneModel).lanes.length - 1
  ];
  /**
   * To remove lane
   * parameter 1 - The swimlane to remove the lane from.
   * parameter 2 - The lane to be removed
   */
  diagram.removeLane(swimlane, lane);
};
