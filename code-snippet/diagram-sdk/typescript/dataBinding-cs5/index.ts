


import { Diagram, NodeModel, ConnectorModel, NodeConstraints, LayoutAnimation, DataBinding, HierarchicalTree, Node, ShapeStyleModel, Connector } from '@syncfusion/ej2-diagrams';

// Injecting necessary modules for data binding and hierarchical tree layout
Diagram.Inject(DataBinding, HierarchicalTree, LayoutAnimation);

// Sample Data to be used for diagram
const dataModify = [
    { id: "288192", IsAssistant: false, ParentId: "288200", shapeType: "Electrical Analytical Bus", load: "2600000 VA", current: "3127 A", voltage: "480 V", Name: "SWGREM4-B" },
    { id: "288193", IsAssistant: false, ParentId: "288192", shapeType: "Electrical Analytical Transformer", load: "800000 VA", current: "962 A", voltage: "480 V", Name: "ATS-EQ-1" },
    { id: "288198", IsAssistant: false, ParentId: "288192", shapeType: "Electrical Analytical Transfer Switch", load: "800000 VA", current: "962 A", voltage: "480 V", Name: "ATS-EQ-2" },
];

// Placeholder for connectors, which will be generated dynamically
let connectors: ConnectorModel[] = [];

// Method to check if any child exists for a node
function checkIfAnyChildExists(id: string): any[] {
    return dataModify.filter(data => data.ParentId === id);
}

// Method to generate connectors based on data
function designConnectors(): ConnectorModel[] {
    connectors = [];
    let count = 1;

    dataModify.forEach(node => {
        const childNodes = checkIfAnyChildExists(node.id);
        childNodes.forEach(child => {
            connectors.push({
                id: `connector-${count}`,
                sourceID: node.id,
                srcPortID: `portOut-${child.id}`,
                targetID: child.id,
                targetPortID: `portIn-${child.id}`,
            });
            count++;
        });
    });

    return connectors;
}

// Diagram Layout configuration
const layout: any = {
    type: 'OrganizationalChart',
    verticalSpacing: 100,
    getLayoutInfo: (node: Node, options: TreeInfo) => {
        if (!options.hasSubTree) {
            options.orientation = 'Horizontal';
        }
    }
};

// Default Node properties
function getNodeDefaults(node: NodeModel): NodeModel {
    node.width = 60;
    node.height = 100;
    node.constraints = NodeConstraints.Default & ~NodeConstraints.Rotate & ~NodeConstraints.Resize;
    node.shape = { type: 'Basic', shape: 'Rectangle' };
    (node.style as ShapeStyleModel).fill = "#6BA5D7";
    (node.style as ShapeStyleModel).strokeColor = "White";
    return node;
}

// Default Connector properties
function getConnectorDefaults(connector: Connector, diagram: Diagram): ConnectorModel {
    connector.style = {
        strokeColor: 'black',
        strokeWidth: 2
    };
    (connector.targetDecorator as DecoratorModel).style = {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7'
    };
    connector.targetDecorator.shape = 'None';
    connector.type = 'Orthogonal';
    connector.segmentThumbShape = 'Circle';
    connector.sourcePortID = connector.srcPortID;
    connector.targetPortID = connector.targetPortID;
    return connector;
}

// Initializing the Diagram
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '700px',
    layout: layout,
    dataSourceSettings: {
        id: 'id',
        parentId: 'ParentId',
        dataSource: dataModify,
        connectionDataSource: {
            id: 'id',
            sourceID: 'sourceID',
            targetID: 'targetID',
            dataManager: designConnectors()
        }
    },
    tool: 'ZoomPan',  // You can add more tools as needed
    getNodeDefaults: getNodeDefaults,
    getConnectorDefaults: getConnectorDefaults
});

// Appending the diagram to the DOM element
diagram.appendTo('#element');



