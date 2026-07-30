


import { Diagram, NodeModel, BpmnShape, BpmnSubProcessModel, BpmnDiagrams, BpmnActivityModel, BpmnFlowModel, BpmnGatewayModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [
    {
      // Position of the node
      offsetX: 100,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [{ content: 'Standard', offset: { x: 0.5, y: 1.2 } }],
      //Sets type as Bpmn and shape as Activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
          activity: 'Task',
          //Sets loop of the task as Standard
          task: {
            loop: 'Standard',
          },
        },
      },
    },
    {
      // Position of the node
      offsetX: 300,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [{ content: 'None', offset: { x: 0.5, y: 1.2 } }],
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets Activity as SubProcess
        activity: {
          activity: 'SubProcess',
          //Sets collapsed as true and loop as None
          subProcess: {
            collapsed: true,
            loop: 'None',
          },
        },
      },
    },
    {
      // Position of the node
      offsetX: 500,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [
        { content: 'ParallelMultiInstance', offset: { x: 0.5, y: 1.2 } },
      ],
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets Activity as SubProcess
        activity: {
          activity: 'SubProcess',
          //Sets collapsed as true and loop as ParallelMultiInstance
          subProcess: {
            collapsed: true,
            loop: 'ParallelMultiInstance',
          },
        },
      },
    },
    {
      // Position of the node
      offsetX: 700,
      offsetY: 100,
      // Size of the node
      width: 100,
      height: 100,
      annotations: [
        { content: 'SequenceMultiInstance', offset: { x: 0.5, y: 1.2 } },
      ],
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets Activity as SubProcess
        activity: {
          activity: 'SubProcess',
          //Sets collapsed as true and loop as SequenceMultiInstance
          subProcess: {
            collapsed: true,
            loop: 'SequenceMultiInstance',
          },
        },
      },
    },
  ];
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: nodes
});
// render initialized diagram
diagram.appendTo('#element');



