ej.diagrams.Diagram.Inject(ej.diagrams.ConnectorEditing);
var nodes = [{
    id: 'Start',
    offsetX: 250,
    offsetY: 150,
    annotations: [{ content: 'Start' }],
    ports: [{
        id: 'StartPort',
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'Circle',
        offset: { x: 1, y: 0.5 },
        style: { strokeColor: '#366F8C', fill: '#366F8C' }
    }]
},
{
    id: 'End',
    offsetX: 450,
    offsetY: 200,
    annotations: [{ content: 'End' }],
    ports: [{
        id: 'EndPort',
        visibility: ej.diagrams.PortVisibility.Visible,
        shape: 'Circle',
        offset: { x: 0, y: 0.5 },
        style: { strokeColor: '#366F8C', fill: '#366F8C' }
    }]
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
    
    // Configuring settings for bezier interactions
    bezierSettings : { smoothness: ej.diagrams.BezierSmoothness.SymmetricAngle }
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

