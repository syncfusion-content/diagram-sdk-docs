


import {
    Diagram,BasicShapeModel,NodeModel,DiagramTools
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
    width: '100%', height: 700, created: () => {
        let drawingshape: BasicShapeModel = { type: 'Basic', shape: 'Polygon' };
        //JSON to create a polygon
        let node: NodeModel = {
            shape: drawingshape
        };
        diagram.drawingObject = node;
        //To draw an object once, activate draw once
        diagram.tool = DiagramTools.DrawOnce;
        diagram.dataBind();
    }
});
diagram.appendTo('#element');



