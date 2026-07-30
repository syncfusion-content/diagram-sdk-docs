


import {ConnectorModel,NodeModel,BasicShapeModel,Diagram} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [{
        id: 'node',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
    },
    {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
    },
];
let connectors: ConnectorModel = {
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
    sourceID: 'node',
    targetID: 'node1',
    // Set Source Padding value
    sourcePadding:20,
    // Set Target Padding value
    targetPadding:20
}
let diagram: Diagram = new Diagram({
    width: '100%',
    height: 900,
    nodes: nodes,
    connectors: [connectors],
    getNodeDefaults: (node: NodeModel) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
});
diagram.appendTo('#element');



