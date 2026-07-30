


import { Diagram, NodeModel, BpmnShape, BpmnSubProcessModel, BpmnDiagrams, BpmnActivityModel, BpmnFlowModel, BpmnGatewayModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [
    {
      // Position of the node
      offsetX: 150,
      offsetY: 150,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as Gateway
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as None
        gateway: {
          type: 'None',
        },
      },
    },
    {
      // Position of the node
      offsetX: 350,
      offsetY: 150,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as Inclusive
        gateway: {
          type: 'Inclusive',
        },
      },
    },
    {
      // Position of the node
      offsetX: 550,
      offsetY: 150,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as Exclusive
        gateway: {
          type: 'Exclusive',
        },
      },
    },
    {
      // Position of the node
      offsetX: 150,
      offsetY: 350,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as Parallel
        gateway: {
          type: 'Parallel',
        },
      },
    },
    {
      // Position of the node
      offsetX: 350,
      offsetY: 350,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as ParallelEventBased
        gateway: {
          type: 'ParallelEventBased',
        },
      },
    },
    {
      // Position of the node
      offsetX: 550,
      offsetY: 350,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as EventBased
        gateway: {
          type: 'EventBased',
        },
      },
    },
    {
      // Position of the node
      offsetX: 150,
      offsetY: 550,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as ExclusiveEventBased
        gateway: {
          type: 'ExclusiveEventBased',
        },
      },
    },
    {
      // Position of the node
      offsetX: 350,
      offsetY: 550,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as event
      shape: {
        type: 'Bpmn',
        shape: 'Gateway',
        //Sets type of the gateway as Complex
        gateway: {
          type: 'Complex',
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



