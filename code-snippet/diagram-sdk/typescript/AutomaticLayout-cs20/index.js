ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
var data = [
    {
        'Id': 'parent', 'Name': 'Maria Anders', 'Designation': 'Managing Director',
        'IsExpand': 'true', 'RatingColor': '#C34444'
    },
    {
        'Id': 1, 'Name': 'Ana Trujillo', 'Designation': 'Project Manager',
        'IsExpand': 'false',
        'RatingColor': '#68C2DE', 'ReportingPerson': 'parent'
    },
    {
        'Id': 2, 'Name': 'Anto Moreno', 'Designation': 'Project Lead',
        'IsExpand': 'false',
        'RatingColor': '#93B85A', 'ReportingPerson': 'parent'
    }
];

var items = new ej.data.DataManager(data , new ej.data.Query().take(7));

diagram = new ej.diagrams.Diagram({
    snapSettings: { constraints: 0 },
    layout: {
        type: 'OrganizationalChart', margin: { top: 20 },
        getLayoutInfo: (node, option) => {
            if (!option.hasSubTree) {
                option.orientation = 'Vertical';
                option.type = 'Alternate';
            }
        }
    },
    dataSourceSettings: {
        id: 'Id', parentId: 'ReportingPerson', dataManager: items
    },
});
diagram.appendTo('#element');


