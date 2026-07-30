ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
var data = [{ Id: "parent", Role: "Board" },
	{ Id: "1", Role: "General Manager", Manager: "parent" },
	{ Id: "2", Role: "Human Resource Manager", Manager: "1" },
	{ Id: "3", Role: "Trainers", Manager: "2" },
	{ Id: "4", Role: "Recruiting Team", Manager: "2" },
	{ Id: "5", Role: "Finance Asst. Manager", Manager: "2" },
	{ Id: "6", Role: "Design Manager", Manager: "1" },
	{ Id: "7", Role: "Design Supervisor", Manager: "6" },
	{ Id: "8", Role: "Development Supervisor", Manager: "6" },
	{ Id: "9", Role: "Drafting Supervisor", Manager: "6" },
	{ Id: "10", Role: "Marketing Manager", Manager: "1" },
	{ Id: "11", Role: "Oversea sales Manager", Manager: "10" },
	{ Id: "12", Role: "Petroleum Manager", Manager: "10" },
	{ Id: "13", Role: "Service Dept. Manager", Manager: "10" },
];

var items = new ej.data.DataManager(data, new ej.data.Query().take(7));

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '530px',
    snapSettings: { constraints: 0 },
    layout: {
        type: 'OrganizationalChar',
        getLayoutInfo: (node, options) => {
            if (node.data['Role'] === 'General Manager') {
                options.assistants.push(options.children[0]);
                options.children.splice(0, 1);
            }
            if (!options.hasSubTree) {
                options.type = 'Right';
                options.orientation = 'Vertical';
            }
        }
    },
    dataSourceSettings: {
        
        id: 'Id', parentId: 'Manager', dataManager: items
    },

    getNodeDefaults: (obj, diagram) => {
        obj.width = 150;
        obj.height = 50;
        obj.style.fill = 'darkcyan';
        obj.annotations = [{ content: obj.data['Role'], style: { color: 'white' } }];
        return obj;
    }, getConnectorDefaults: (connector, diagram) => {
        connector.targetDecorator.shape = 'None';
        connector.type = 'Orthogonal';
        return connector;
    }
});
diagram.appendTo('#element');

