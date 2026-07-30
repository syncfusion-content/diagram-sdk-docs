

import { Diagram, ConnectorModel, AnnotationConstraints } from '@syncfusion/ej2-diagrams';
let connector: ConnectorModel[] = {
    id: 'connector',
   type: 'Orthogonal',
   sourcePoint: { x: 200, y: 200 },
   targetPoint: { x: 300, y: 300 },
    // Sets the multiple annotation for the node
    annotations: [{
        content: 'connector1', offset:0.5,
        constraints:AnnotationConstraints.Interaction | AnnotationConstraints.Drag,
        //Set drag limit for a connector annotation.
        dragLimit:{left:20,right:20,top:20,bottom:20}
    }]
};
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    connectors: [connector]
});
// render initialized diagram
diagram.appendTo('#element');



