


import {Diagram,NodeModel,ConnectorModel} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
    },
    {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 350,
    },
]
let connectors: ConnectorModel[] = [{
    id: "connector1",
    type: 'Orthogonal',
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
    // Sets the radius for the rounded corner
    cornerRadius: 10,
    sourceID: 'node1',
    targetID: 'node2',
    segments: [{
        type: 'Orthogonal',
        direction: 'Right',
        length: 50
    }],
}]
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
    nodes: nodes,
    getNodeDefaults: (node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
});

diagram.appendTo('#element');



