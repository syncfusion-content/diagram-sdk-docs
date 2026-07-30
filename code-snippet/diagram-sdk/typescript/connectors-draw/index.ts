


import {Diagram,ConnectorModel,DiagramTools} from '@syncfusion/ej2-diagrams';
let drawingObject = {type:'Orthogonal'}

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    tool:DiagramTools.ContinuousDraw,
    drawingObject:drawingObject
});
diagram.appendTo('#element');



