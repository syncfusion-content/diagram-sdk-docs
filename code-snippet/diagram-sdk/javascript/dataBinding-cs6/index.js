ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
var dataModify = [
    {
        id: "288192",
        IsAssistant: false,
        ParentId: "288200",
        shapeType: "Electrical Analytical Bus",
        load: "2600000 VA",
        current: "3127 A",
        voltage: "480 V",
        Name: "SWGREM4-B"
    },
    {
        id: "288193",
        IsAssistant: false,
        ParentId: "288192",
        shapeType: "Electrical Analytical Transformer",
        load: "800000 VA",
        current: "962 A",
        voltage: "480 V",
        Name: "ATS-EQ-1"
    },
    {
        id: "288198",
        IsAssistant: false,
        ParentId: "288192",
        shapeType: "Electrical Analytical Transfer Switch",
        load: "800000 VA",
        current: "962 A",
        voltage: "480 V",
        Name: "ATS-EQ-2"
    }
];

function designConnectors() {
    var connectors = [];
    var count = 1;

    dataModify.forEach(function (node) {
        var childNodes = checkIfAnyChildExists(node.id);
        childNodes.forEach(function (child) {
            connectors.push({
                id: `connector-${count}`,
                sourceID: node.id,
                srcPortID: `portOut-${child.id}`,
                targetID: child.id,
                targetPortID: `portIn-${child.id}`
            });
            count++;
        });
    });

    return connectors;
}

function checkIfAnyChildExists(id) {
    var childNotes = [];
    dataModify.forEach(function (data) {
        if (data.ParentId === id) {
            childNotes.push(data);
        }
    });
    return childNotes;
}

var diagram = new ej.diagrams.Diagram({
    width: "100%",
    height: "700px",
    snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
    layout: {
        type: "OrganizationalChart",
        verticalSpacing: 100,
        getLayoutInfo: function (node, options) {
            if (!options.hasSubTree) {
                options.orientation = "Horizontal";
            }
        }
    },
    dataSourceSettings: {
        id: "id",
        parentId: "ParentId",
        dataSource: dataModify,
        crudAction: {
            customFields: ["Id", "Description", "Color"]
        },
        connectionDataSource: {
            id: "id",
            sourceID: "sourceID",
            targetID: "targetID",
            crudAction: {
                customFields: ["srcPortID", "targetPortID"]
            },
            dataManager: designConnectors()
        }
    },
    getNodeDefaults: function (node) {
        node.width = 60;
        node.height = 100;
        node.constraints =
            ej.diagrams.NodeConstraints.Default &
            ~ej.diagrams.NodeConstraints.Rotate &
            ~ej.diagrams.NodeConstraints.Resize;
        node.shape = { type: "Basic", shape: "Rectangle" };
        node.style = { fill: "#6BA5D7", strokeColor: "White" };
        return node;
    },
    getConnectorDefaults: function (connector) {
        connector.style = { strokeColor: "black", strokeWidth: 2 };
        connector.targetDecorator = {
            shape: "None",
            style: { fill: "#6BA5D7", strokeColor: "#6BA5D7" }
        };
        connector.type = "Orthogonal";
        connector.segmentThumbShape = "Circle";
        connector.sourcePortID = connector.srcPortID;
        connector.targetPortID = connector.targetPortID;
        return connector;
    }
});

diagram.appendTo("#diagram");


