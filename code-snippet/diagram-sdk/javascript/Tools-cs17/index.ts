

import {
    Diagram, ConnectorModel, NodeModel, DiagramTools, IElementDrawEventArgs
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
    width: '100%', height: 700, created: () => {
        //JSON to create a Connector
        let connectors: ConnectorModel = {
            id: 'connector1',
            type: 'Straight',
           segments: [{ type: "Straight" }]
        }
        diagram.drawingObject = connectors;
        //To draw an object once, activate draw once
        diagram.tool = DiagramTools.ContinuousDraw;
        diagram.dataBind();
    },
    elementDraw : elementDraw
});

diagram.appendTo('#element');
function elementDraw(args:IElementDrawEventArgs)
{
    alert("Event Triggered");
}



