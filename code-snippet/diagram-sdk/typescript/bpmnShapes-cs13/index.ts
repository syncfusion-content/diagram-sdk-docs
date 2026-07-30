


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
        //Sets type as Bpmn and shape as Activity
        shape: {
            type: 'Bpmn',
            shape: 'Activity',
            //Sets activity as SubProcess
            activity: {
                activity: 'SubProcess',
                //Sets collapsed as true and boundary as Call
                subProcess: {
                    collapsed: true,
                    boundary: 'Call'
                }
            },
        },
    },
    {
        // Position of the node
        offsetX: 450,
        offsetY: 250,
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
                //Sets collapsed as true and boundary as Event
                subProcess: {
                    collapsed: true,
                    boundary: 'Event'
                }
            },
        },
    },
    {
        // Position of the node
        offsetX: 650,
        offsetY: 250,
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
                //Sets collapsed as true and boundary as Default
                subProcess: {
                    collapsed: false,
                    boundary: 'Default'
                }
            },
        },
    }
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



