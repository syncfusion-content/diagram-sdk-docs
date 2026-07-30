ej.diagrams.Diagram.Inject(ej.diagrams.ConnectorEditing);
var nodes = [
    {
        id: 'node1', width: 100, height: 100, offsetX: 150, offsetY: 150,
    },
    {
        id: 'node2', width: 100, height: 100, offsetX: 350, offsetY: 400,
    },
    {
        id: 'node3', width: 100, height: 100, offsetX: 550, offsetY: 150,
    },
    {
        id: 'node4', width: 100, height: 100, offsetX: 800, offsetY: 400,
    },
];

var connectors = [
    {
        id: 'connector1',
        type: 'Bezier',
        sourceID: 'node1',
        targetID: 'node2',
        segments: [
            {
                type: 'Bezier',
                point: { x: 200, y: 300 },
            },
            {
                type: 'Bezier',
                point: { x: 320, y: 400 }
            }
        ],
        constraints: ej.diagrams.ConnectorConstraints.Default | ej.diagrams.ConnectorConstraints.DragSegmentThumb,
    },
    {
        id: 'connector2',
        type: 'Bezier',
        sourceID: 'node3',
        targetID: 'node4',
        segments: [
            {
                type: 'Bezier',
                point: { x: 600, y: 300 },
            },
            {
                type: 'Bezier',
                point: { x: 320, y: 400 }
            }
        ],
        constraints: ej.diagrams.ConnectorConstraints.Default & ~(ej.diagrams.ConnectorConstraints.InheritSegmentThumbSize) | ej.diagrams.ConnectorConstraints.DragSegmentThumb,
        segmentThumbSize: 20
    },
];

var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
    connectors: connectors,
    segmentThumbSize: 15
}, '#element');
