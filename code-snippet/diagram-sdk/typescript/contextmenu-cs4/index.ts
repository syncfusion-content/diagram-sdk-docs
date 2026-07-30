


import {
    Diagram,
    DiagramContextMenu,
    DiagramBeforeMenuOpenEventArgs,
    MenuEventArgs,
    ConnectorModel,
    NodeModel
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(DiagramContextMenu);
//Initializes the connector
let connector: ConnectorModel = {
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
    style: {
        strokeColor : '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth :  2,
    },
    targetDecorator: {
        style: {
            fill : '#6BA5D7',
            strokeColor :   '#6BA5D7'
        }
    }
};
//Initializes the nodes
let node: NodeModel = {
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
    annotations: [{
        id: 'label1',
        content: 'Rectangle1',
        offset: {
            x: 0.5,
            y: 0.5
        },
        style: {
            color: 'white'
        }
    }]
};
let node2: NodeModel = {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
    annotations: [{
        id: 'label2',
        content: 'Rectangle2',
        offset: {
            x: 0.5,
            y: 0.5
        },
        style: {
            color: 'white'
        }
    }]
};
//Initializes the Diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '350px',
    nodes: [node, node2],
    connectors: [connector],
    contextMenuSettings: {
        //Enables the context menu
        show: true,
        items: [{
            text: 'delete',
            id: 'delete'
        }],
        // Hides the default context menu items
        showCustomMenuOnly: false,
    },
    contextMenuOpen: function(args: DiagramBeforeMenuOpenEventArgs) {
        //do your custom action here.
        for (let item of args.items) {
            if (item.text === 'delete') {
                if (!diagram.selectedItems.nodes.length && !diagram.selectedItems.connectors.length) {
                    args.hiddenItems.push(item.text);
                }
            }
        }
    },
    contextMenuClick: function(args: MenuEventArgs) {
        //do your custom action here.
        if (args.item.id === 'delete') {
            if ((diagram.selectedItems.nodes.length + diagram.selectedItems.connectors.length) > 0) {
                diagram.cut();
            }
        }
    }
}, '#element');



