

import {
    Diagram,BasicShapeModel,NodeModel,DiagramTools
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
    width: '100%', height: 700, created: () => {
        //JSON to create a rectangle
        let drawingshape: BasicShapeModel = { type: 'Basic', shape: 'Rectangle' };
        let node: NodeModel = {
            shape: drawingshape
        };
        diagram.drawingObject = node;
        //To draw an object once, activate draw once
        diagram.tool = DiagramTools.DrawOnce;
        diagram.dataBind();
    },//customize the appearance of the shape
        getNodeDefaults: (obj: Node, diagram: Diagram) => {
        obj.height = 15;
        obj.width = 15;
        obj.borderWidth = 1;
        obj.style = {
            fill: '#6BA5D7',
            strokeWidth: 2,
            strokeColor: '#6BA5D7'
        };
        return obj;
    },
});
diagram.appendTo('#element');



