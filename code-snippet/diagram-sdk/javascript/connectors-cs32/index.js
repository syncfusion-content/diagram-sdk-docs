var connectors = [{
    // Unique name for the connector
    id: "connector1",
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}];

var diagram = new ej.diagrams.Diagram({
    width: 1500,
    height: 1500,
    connectors: connectors
}, '#element');

diagram.appendTo('#element');
diagram.connectors[0].style.strokeColor = '#6BA5D7';
diagram.connectors[0].style.fill = '#6BA5D7';
diagram.connectors[0].style.strokeWidth = 2;
diagram.connectors[0].targetDecorator.style.fill = '#6BA5D7';
diagram.connectors[0].targetDecorator.style.strokeColor = '#6BA5D7';
diagram.connectors[0].sourcePoint.x = 150;
diagram.connectors[0].targetPoint.x = 150;
diagram.dataBind();

