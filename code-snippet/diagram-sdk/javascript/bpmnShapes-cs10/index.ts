


import { Diagram, NodeModel, BpmnShape, BpmnSubProcessModel, BpmnDiagrams, BpmnActivityModel, BpmnFlowModel, BpmnGatewayModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as Activity
    shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as Task
        activity: {
            activity: 'Task',
            //Sets compensation of the task as true
            task: {
                compensation: true
            }
        },
    },
};
let node2: NodeModel = {
    // Position of the node
    offsetX: 300,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type as Bpmn and shape as Activity
    shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as SubProcess
        activity: {
            activity: 'SubProcess',
            //Set the collapsed as true and compensation as true
            subProcess: {
                collapsed: true,
                compensation: true
            }
        },
    },
};
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node, node2]
});
// render initialized diagram
diagram.appendTo('#element');



