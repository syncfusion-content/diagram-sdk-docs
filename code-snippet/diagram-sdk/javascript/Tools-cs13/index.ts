

import {
    Diagram, TextModel, NodeModel, DiagramTools
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
    width: '100%', height: 700, created: () => {
        //JSON to create a text
        let node: NodeModel = {
                   shape: {
                type:'Text',
            } as TextModel
        };
        diagram.drawingObject = node;
        //To draw an object once, activate draw once
        diagram.tool = DiagramTools.DrawOnce;
        diagram.dataBind();
    }
});
diagram.appendTo('#element');



