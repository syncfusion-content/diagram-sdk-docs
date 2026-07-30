

import {
    Diagram,PathModel,NodeModel,DiagramTools
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
    width: '100%', height: 700, created: () => {
        //JSON to create a path
        let node: NodeModel = {
            id: "Path",
            style: { fill: "#fbe172" },
            annotations: [{
                content: "Path"
            }],
            shape: {
                type:'Path',
                data: 'M13.560 67.524 L 21.941 41.731 L 0.000 25.790 L 27.120 25.790 L 35.501 0.000 L 43.882 25.790 L 71.000 25.790 L 49.061 41.731 L 57.441 67.524 L 35.501 51.583 z'
            } as PathModel
        };
        diagram.drawingObject = node;
        //To draw an object once, activate draw once
        diagram.tool = DiagramTools.DrawOnce;
        diagram.dataBind();
    }
});
diagram.appendTo('#element');



