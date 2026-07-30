var nodes = [
  {
    id: 'start',
    height: 50,
    width: 50,
    margin: { left: 50, top: 50 },
    shape: { type: 'Bpmn', shape: 'Event' },
  },
  {
    id: 'event2',
    height: 50,
    width: 50,
    margin: { left: 150, top: 50 },
    shape: { type: 'Bpmn', shape: 'Event', event: { type: '' } },
  },
  {
    id: 'subProcess',
    width: 520,
    height: 250,
    offsetX: 355,
    offsetY: 230,
    constraints:
      ej.diagrams.NodeConstraints.Default |
      ej.diagrams.NodeConstraints.AllowDrop,
    shape: {
      shape: 'Activity',
      type: 'Bpmn',
      activity: {
        activity: 'SubProcess',
        subProcess: {
          collapsed: false,
          processes: ['start'],
        },
      },
    },
  },
];
// initialize Diagram component

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: nodes,
  },
  '#element'
);

document.getElementById('addProcess').onclick = () => {
  let event = diagram.nameTable['event2'];
  /**
   * parameter 1 - A process to be added
   * parameter 2 - A string representing the parent ID where the process will be added.
   */
  diagram.addProcess(event, 'subProcess');
};

document.getElementById('removeProcess').onclick = () => {
  /**
   * parameter 1 -  The ID of the process to be removed.
   */
  diagram.removeProcess('event2');
};
