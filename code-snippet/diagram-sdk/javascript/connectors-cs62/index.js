ej.diagrams.Diagram.Inject(ej.diagrams.ConnectorEditing);
var nodes = [
    {
        id: 'node1', width: 100, height: 100, offsetX: 200, offsetY: 200,
    },
    {
        id: 'node2', width: 100, height: 100, offsetX: 400, offsetY: 400,
    },
    {
        id: 'node3', width: 100, height: 100, offsetX: 600, offsetY: 200,
    },
    {
        id: 'node4', width: 100, height: 100, offsetX: 800, offsetY: 400,
    },
];

var connectors = [
    {
        id: 'connector1',
        type: 'Orthogonal',
        sourceID: 'node1',
        targetID: 'node2',
        segments: [
            {
                type: 'Orthogonal',
                direction: "Right",
                length: 70
            },
            {
                type: 'Orthogonal',
                direction: "Bottom",
                length: 50
            }
        ],
        constraints: ej.diagrams.ConnectorConstraints.Default | ej.diagrams.ConnectorConstraints.DragSegmentThumb,
    },
    {
        id: 'connector2',
        type: 'Orthogonal',
        sourceID: 'node3',
        targetID: 'node4',
        segments: [
            {
                type: 'Orthogonal',
                direction: "Right",
                length: 70
            },
            {
                type: 'Orthogonal',
                direction: "Bottom",
                length: 50
            }
        ],
        constraints:ej.diagrams.ConnectorConstraints.Default & ~(ej.diagrams.ConnectorConstraints.InheritSegmentThumbSize) | ej.diagrams.ConnectorConstraints.DragSegmentThumb,
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
