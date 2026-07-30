ej.diagrams.Diagram.Inject(ej.diagrams.ConnectorEditing);
var connectors = [{
    id: "connector1",
    type:"Orthogonal",
    hitPadding:40,
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
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    constraints: ej.diagrams.ConnectorConstraints.Default | ej.diagrams.ConnectorConstraints.DragSegmentThumb
    }
]

var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
}, '#element');

