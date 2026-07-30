


import { Diagram, NodeModel, BpmnShape, BpmnSubProcessModel, BpmnDiagrams, BpmnActivityModel, BpmnFlowModel, BpmnGatewayModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [
    {
      // Position of the node
      offsetX: 250,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as SubProcess
        activity: {
          activity: 'SubProcess',
          //Sets the collapsed as true and type as Event
          subProcess: {
            collapsed: false,
            type: 'Event',
            //Sets event as Start and trigger as Message
            events: [
              {
                id: 'event',
                event: 'Start',
                trigger: 'Message',
                offset: { x: 0.5, y: 0 },
              },
            ],
          },
        },
      },
    },
]
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: nodes
});
// render initialized diagram
diagram.appendTo('#element');



