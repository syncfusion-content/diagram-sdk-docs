


import { Diagram, NodeModel, ShapeAnnotationModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    // Sets the annotation for the node
    annotations: [{
        id: 'label1',
        // Sets the text to be displayed
        content: 'Annotation'
    }]
};
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');
let annotation: shapeAnnotationModel[] = [
    {
       id: 'label1', content: 'Annotation'
    }
];
diagram.removeLabels(diagram.nodes[0], annotation);



