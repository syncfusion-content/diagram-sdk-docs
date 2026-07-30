import {
  Diagram,
  NodeModel,
  BpmnDiagrams,
  NodeConstraints,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [
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
    constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
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
// initialize diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
});
// render initialized diagram
diagram.appendTo('#element');

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
