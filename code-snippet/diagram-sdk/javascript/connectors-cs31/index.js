var connectors = {
    // Unique name for the connector
    id: "connector1",
     style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}

var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
}, '#element');

diagram.appendTo('#element');
diagram.add(connectors)

