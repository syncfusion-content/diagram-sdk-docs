ej.diagrams.Diagram.Inject(ej.diagrams.ConnectorEditing);
var nodes = [{
    id: 'Start',
    offsetX: 250,
    offsetY: 150,
    annotations: [{ content: 'Start' }]
},
{
    id: 'End',
    offsetX: 450,
    offsetY: 200,
    annotations: [{ content: 'End' }]
}];

let connectors = [{
    id: "connector1",
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: { shape: 'None' },
    // ID of the source and target nodes
    sourceID: "Start",
    sourcePortID: "StartPort",
    targetID: "End",
    targetPortID: "EndPort",
    type: 'Bezier',
}];

var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
    connectors: connectors,
    // Defines the default properties for the node
    getNodeDefaults: (node) => {
        node.height = 100;
        node.width = 100;
        node.shape = { type: 'Basic', shape: 'Rectangle' }
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
    getConnectorDefaults: (connector) => {
        connector.constraints = ej.diagrams.ConnectorConstraints.Default | ej.diagrams.ConnectorConstraints.DragSegmentThumb;
        return connector;
    }
});
diagram.appendTo('#element');

