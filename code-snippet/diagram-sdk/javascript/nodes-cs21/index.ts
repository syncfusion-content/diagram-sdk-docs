import { Diagram, NodeModel,ConnectorModel } from '@syncfusion/ej2-diagrams';
//initialize node collection 
var nodesCollection:NodeModel = [
    { id: 'node16', offsetX: 35, offsetY: 260 },
    { id: 'node17', offsetX: 140, offsetY: 260 },
    { id: 'node18', offsetX: 240, offsetY: 260 }
];
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px'
});
// render initialized diagram
diagram.appendTo('#element');
//Add collection of nodes
diagram.addElements(nodesCollection);
