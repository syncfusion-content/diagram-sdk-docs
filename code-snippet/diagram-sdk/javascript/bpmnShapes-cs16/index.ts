


import { Diagram, NodeModel, BpmnShape, BpmnSubProcessModel, BpmnShapeModel,BpmnDiagrams, BpmnActivityModel, BpmnFlowModel, BpmnGatewayModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [ {
    id: 'event1', style: { strokeWidth: 2 },
    height:70,width:70,offsetX:400,offsetY:200,
    shape: { type: 'Bpmn', shape: 'Event',
        event: { event: 'Start', trigger: 'None' },
     } as BpmnShapeModel
},
//node with target
{
    id: 'textNode1', width: 70, height: 70,
    offsetX:400,offsetY:400,
    annotations:[{content:'textNode1'}],
        shape: {
            type: 'Bpmn', shape: 'TextAnnotation',
            textAnnotation:{ textAnnotationDirection:'Auto',textAnnotationTarget:'event1'}
        } as BpmnShapeModel
},
//Node without target
{
    id: 'textNode2', width: 70, height: 70,
    offsetX:600,offsetY:400,
    annotations:[{content:'textNode2'}],
        shape: {
            type: 'Bpmn', shape: 'TextAnnotation',
            textAnnotation:{ textAnnotationDirection:'Auto',textAnnotationTarget:''}
        } as BpmnShapeModel
},]
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: nodes
});
// render initialized diagram
diagram.appendTo('#element');



