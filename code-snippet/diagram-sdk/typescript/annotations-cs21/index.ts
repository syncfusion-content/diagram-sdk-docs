


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
let annotation: ShapeAnnotationModel[] = [{
        id: 'label1',
        content: 'Annotation'
}]
//Method to add labels at runtime
diagram.addLabels(diagram.nodes[0], annotation);
diagram.dataBind();



