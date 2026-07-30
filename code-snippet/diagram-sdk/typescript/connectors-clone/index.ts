


import {Diagram,ConnectorModel,DiagramTools} from '@syncfusion/ej2-diagrams';
var connectors:ConnectorModel[] = [
    {
        id: 'connector1',
        sourcePoint: { x: 100, y: 100 },
        targetPoint: { x: 200, y: 200 }
    }
];

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors:connectors
});
diagram.appendTo('#element');


(document.getElementById('clone') as HTMLInputElement).onclick = function () {
    let selectedConnector = diagram.selectedItems.connectors.length > 0 ? diagram.selectedItems.connectors[0]: diagram.connectors[0];
    diagram.select([selectedConnector]);
    diagram.copy();
    diagram.paste();
}
