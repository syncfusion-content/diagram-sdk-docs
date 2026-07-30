


import {
    Diagram, ConnectorModel, NodeModel, DiagramTools
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
    width: '100%', height: 700, created: () => {
        //JSON to create a Connector
        let connectors: ConnectorModel = {
            id: 'connector1',
            type: 'Straight',
           segments: [{ type: "polyline" }]
        }
        diagram.drawingObject = connectors;
        //To draw an object once, activate draw once
        diagram.tool = DiagramTools.DrawOnce;
        diagram.dataBind();
    }
});
diagram.appendTo('#element');



