var connectors = [
    {
        id: 'connector1',
        sourcePoint: { x: 100, y: 100 },
        targetPoint: { x: 200, y: 200 }
    }
];

var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    connectors:connectors,
}, '#element');

document.getElementById('clone').onclick = function () {
    let selectedConnector = diagram.selectedItems.connectors.length > 0 ? diagram.selectedItems.connectors[0]: diagram.connectors[0];
    diagram.select([selectedConnector]);
    diagram.copy();
    diagram.paste();
}