


import {
    Diagram, ConnectorModel, NodeModel, DiagramConstraints, ComplexHierarchicalTree
} from '@syncfusion/ej2-diagrams';

Diagram.Inject(ComplexHierarchicalTree);
//Initializes nodes
let node: NodeModel = {
    id: 'node1',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node1'
    }]
};
let node1: NodeModel = {
    id: 'node2',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node2'
    }]
};
let node2: NodeModel = {
    id: 'node3',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node3'
    }]
};
let node3: NodeModel = {
    id: 'node4',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node4'
    }]
};
let node4: NodeModel = {
    id: 'node5',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node5'
    }]
};
let node7: NodeModel = {
    id: 'node8',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node8'
    }]
};
let node8: NodeModel = {
    id: 'node9',
    width: 70,
    height: 70,
    annotations: [{
        content: 'node9'
    }]
};
let connector: ConnectorModel = {
    id: 'connectr',
    sourceID: 'node1',
    targetID: 'node4'
};
let connector1: ConnectorModel = {
    id: 'connectr1',
    sourceID: 'node2',
    targetID: 'node4'
};
let connector3: ConnectorModel = {
    id: 'connectr3',
    sourceID: 'node3',
    targetID: 'node4'
};
let connector4: ConnectorModel = {
    id: 'connectr4',
    sourceID: 'node4',
    targetID: 'node5'
};
let diagram: Diagram = new Diagram({
        width: '100%',
        height: 1000,
        nodes: [node, node1, node2, node3, node4, node7, node8],
        connectors: [connector, connector1,
            connector3, connector4
        ],//Uses layout to auto-arrange nodes on the diagram page
        layout: {
        //Sets layout type
            type: 'ComplexHierarchicalTree',
            orientation: 'TopToBottom'
        },
        constraints: DiagramConstraints.Bridging,
        //Sets the default properties for nodes and connectors
    getNodeDefaults: (obj: Node) => {
        obj.shape = {
            type: 'Text',
            style: {
                color: 'white';
            }
        };
        obj.style = {
            fill: '#6BA5D7',
            strokeColor: 'none',
            strokeWidth: 2
        };
        obj.borderColor = 'white';
        obj.backgroundColor = '#6BA5D7';
        obj.borderWidth = 1;
        (obj.shape as TextModel).margin = {
            left: 5,
            right: 5,
            top: 5,
            bottom: 5
        };
        return obj;
    },
    getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
        connector.style = {
            strokeColor: '#6BA5D7',
            strokeWidth: 2
        };
        connector.targetDecorator.style.fill = '#6BA5D7';
        connector.targetDecorator.style.strokeColor = '#6BA5D7';
        connector.type = 'Orthogonal';
        return connector;
    }
});
diagram.appendTo('#element');



