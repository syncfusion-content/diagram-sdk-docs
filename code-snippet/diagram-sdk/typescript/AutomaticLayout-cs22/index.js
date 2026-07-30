ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
var data = [{ Id: 1, Role: "General Manager" },
	{ Id: 2, Role: "Assistant Manager", Team: 1 },
	{ Id: 3, Role: "Human Resource Manager", Team: 1 },
	{ Id: 4, Role: "Design Manager", Team: 1 },
	{ Id: 5, Role: "Operation Manager", Team: 1 },
	{ Id: 6, Role: "Marketing Manager", Team: 1 }
];

var items= new ej.data.DataManager(data, new ej.data.Query().take(7));

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '530px',
    snapSettings: { constraints: 0 },
    layout: {
        type: 'OrganizationalChart',
        getLayoutInfo: (node, options) => {
            if (node.data['Role'] === 'General Manager') {
                options.assistants.push(options.children[0]);
                options.children.splice(0, 1);
            }
            if (!options.hasSubTree) {
                options.type = 'Center';
                options.orientation = 'Horizontal';
            }
        }
    },
    dataSourceSettings: {
        id: 'Id', parentId: 'Team', dataManager: items
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

