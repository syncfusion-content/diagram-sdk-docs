var connectors = {
    id: "connector1",
    constraints: ej.diagrams.ConnectorConstraints.Default & ~ej.diagrams.ConnectorConstraints.Select,
    type: 'Straight',
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
};



var diagram = new ej.diagrams.Diagram({
    width: 1500,
    height: 1500,
    connectors: [connectors]
}, '#element');

