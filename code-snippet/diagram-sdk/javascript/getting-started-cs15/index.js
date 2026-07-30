 ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
 
   var data = [
	{ Name: "Elizabeth", Role: "Director" },
	{ Name: "Christina", ReportingPerson: "Elizabeth", Role: "Manager" },
	{ Name: "Yoshi", ReportingPerson: "Christina", Role: "Lead" },
	{ Name: "Philip", ReportingPerson: "Christina", Role: "Lead" },
	{ Name: "Yang", ReportingPerson: "Elizabeth", Role: "Manager" },
	{ Name: "Roland", ReportingPerson: "Yang", Role: "Lead" },
	{ Name: "Yvonne", ReportingPerson: "Yang", Role: "Lead" }
];

var codes  = {
	Director: "rgb(0, 139,139)",
	Manager: "rgb(30, 30,113)",
	Lead: "rgb(0, 100,0)"
};

function getNodeTemplate(node) {
        node.annotations[0].content = node.data.Name;
        node.style.fill = codes[node.data.Role];
    }
    
var items = new ej.data.DataManager(data, new ej.data.Query().take(7));
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '350px',
    mode: 'SVG', snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
     dataSourceSettings: {
            id: 'Name', parentId: 'ReportingPerson', dataManager: items
        },
       layout: {
            type: 'OrganizationalChart',
            margin: { left: 10, top: 10 },
            horizontalSpacing: 50,
            verticalSpacing: 50,
            orientation: 'TopToBottom',
            getLayoutInfo: function (node, tree) {
                if (!tree.hasSubTree) {
                    tree.orientation = 'Vertical';
                    tree.type = 'Alternate';
                }
            }
        },
            getNodeDefaults: function (obj, diagram) {
            obj.height = 30;
            obj.width = 70;
            obj.shape = { type: 'Basic', shape: 'Rectangle' };
            obj.annotations = [{
                    id: "label1",
                    style: {
                        fontSize: 11,
                        bold: true,
                        fontFamily: "Segoe UI",
                        color: "white"
                    }
                }];
            return obj;
        },
        getConnectorDefaults: function (connector, diagram) {
            connector.targetDecorator.shape = 'Arrow';
            connector.type = 'Orthogonal';
            return connector;
        },
        setNodeTemplate: function (node) {
            return getNodeTemplate(node);
        }
        
});
diagram.appendTo('#element');

