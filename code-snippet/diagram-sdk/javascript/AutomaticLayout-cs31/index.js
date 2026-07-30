ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
var data = [
        {
            'Id': 'parent1', 'Name': 'Maria ', 'Designation': 'Managing Director',
            'ImageUrl': '../content/images/orgchart/Clayton.png', 'IsExpand': 'true', 'RatingColor': '#C34444'
        },
        {
            'Id': 'parent', 'Name': ' sam', 'Designation': 'Managing Director', 'ReportingPerson': 'parent1',
            'ImageUrl': '../content/images/orgchart/Clayton.png', 'IsExpand': 'true', 'RatingColor': '#C34444'
        },
        {
            'Id': 'parent3', 'Name': ' sam geo', 'Designation': 'Managing Director', 'ReportingPerson': 'parent1',
            'ImageUrl': '../content/images/orgchart/Clayton.png', 'IsExpand': 'true', 'RatingColor': '#C34444'
        },
        {
            'Id': '80', 'Name': ' david', 'Designation': 'Managing Director', 'ReportingPerson': 'parent3',
            'ImageUrl': '../content/images/orgchart/Clayton.png', 'IsExpand': 'true', 'RatingColor': '#C34444'
        },
        {
            'Id': '82', 'Name': ' pirlo', 'Designation': 'Managing Director', 'ReportingPerson': 'parent',
            'ImageUrl': '../content/images/orgchart/Clayton.png', 'IsExpand': 'true', 'RatingColor': '#C34444'
        }
];

var items = new ej.data.DataManager(data, new ej.data.Query().take(7));

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '590px', selectedItems: { constraints: ~ej.diagrams.SelectorConstraints.ResizeAll },
    snapSettings: { constraints: 0 },
    layout: {
        enableAnimation: true,
        type: 'OrganizationalChart', margin: { top: 20 },
        getLayoutInfo: (node, tree) => {
            if (!tree.hasSubTree) {
                tree.orientation = 'vertical';
                tree.type = 'alternate';
            }
        }
    },
    dataSourceSettings: {
        id: 'Id', parentId: 'ReportingPerson', dataManager: items
    },

    getNodeDefaults: (obj, diagram) => {
        obj.expandIcon = { height: 15, width: 15, shape: "Plus", fill: 'lightgray', offset: { x: .5, y: .85 } }
        obj.collapseIcon.offset = { x: .5, y: .85 }
        obj.collapseIcon.height = 15;
        obj.collapseIcon.width = 15;
        obj.collapseIcon.shape = "Minus";
        obj.collapseIcon.fill = 'lightgray';
        obj.height = 50;
        obj.backgroundColor = 'lightgrey';
        obj.style = { fill: 'transparent', strokeWidth: 2 };
        return obj;
    }, getConnectorDefaults: (connector, diagram) => {
        connector.style = { strokeColor: '#6BA5D7', strokeWidth: 2 };
        connector.targetDecorator.style.fill = '#6BA5D7';
        connector.targetDecorator.style.strokeColor = 'white';
        connector.targetDecorator.shape = 'None';
        connector.type = 'Orthogonal';
        return connector;
    },
});
diagram.appendTo('#element');


