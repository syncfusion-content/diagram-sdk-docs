

import {
    Diagram,ConnectorModel,DiagramTools,,NodeModel
} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [{
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 100,
    offsetY: 100,
    annotations: [{
        id: 'label1',
        content: 'Start'
    }],
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    }
},
{
    id: 'Init',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 300,
    annotations: [{
        id: 'label2',
        content: 'End'
    }],
    shape: {
        type: 'Flow',
        shape: 'Process'
    },
}
];
let connectors: ConnectorModel = {
// Name of the connector
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
// ID of the source and target nodes
sourceID: "Start",
targetID: "Init",
type: 'Orthogonal'
};
// Enables multiple tools
let diagram: Diagram = new Diagram({
    // Selects when you click a node and pans when you click the diagram surface
    width: '100%', height: 700,nodes: nodes,
    connectors: [connectors],tool:DiagramTools.DrawOnce | DiagramTools.ZoomPan;
    }
});
diagram.appendTo('#element');



