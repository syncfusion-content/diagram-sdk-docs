import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

let node: NodeModel = {
    id: 'node1',
    offsetX: 150,
    offsetY: 150,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white',
    },
    annotations: [
        {
            id: 'annotation1',
            width: 100,
            height: 50,
            addInfo: {
                label: 'Start',
                priority: 'High',
            },
        },
    ],
};

// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: [node],
    annotationTemplate: '#annotationTemplate',
});
// render initialized diagram
diagram.appendTo('#element');

// Update the annotation data and refresh the template
(document.getElementById('updateBtn') as HTMLInputElement).onclick = function () {
  // Update the annotation's additional data
  diagram.nodes[0].annotations[0].addInfo.label = 'Process';
  diagram.nodes[0].annotations[0].addInfo.priority = 'Low';
  // Refresh the template to reflect the changes
  diagram.refreshTemplate(diagram.nodes[0].annotations[0], diagram.nodes[0]);
};