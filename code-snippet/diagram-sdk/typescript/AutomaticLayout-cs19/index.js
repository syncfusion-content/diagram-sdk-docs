ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
    var data = [
        { Id: "parent", Role: "Project Management" },
        { Id: 1, Role: "R&D Team", Team: "parent" },
        { Id: 3, Role: "Philosophy", Team: "1" },
        { Id: 4, Role: "Organization", Team: "1" },
        { Id: 5, Role: "Technology", Team: "1" },
        { Id: 7, Role: "Funding", Team: "1" },
        { Id: 8, Role: "Resource Allocation", Team: "1" },
        { Id: 9, Role: "Targeting", Team: "1" },
        { Id: 11, Role: "Evaluation", Team: "1" },
        { Id: 156, Role: "HR Team", Team: "parent" },
        { Id: 13, Role: "Recruitment", Team: "156" },
        { Id: 113, Role: "Training", Team: "12" },
        { Id: 112, Role: "Employee Relation", Team: "156" },
        { Id: 14, Role: "Record Keeping", Team: "12" },
        { Id: 15, Role: "Compensations & Benefits", Team: "12" },
        { Id: 16, Role: "Compliances", Team: "12" },
        { Id: 17, Role: "Production & Sales Team", Team: "parent" },
        { Id: 119, Role: "Design", Team: "17" },
        { Id: 19, Role: "Operation", Team: "17" },
        { Id: 20, Role: "Support", Team: "17" },
        { Id: 21, Role: "Quality Assurance", Team: "17" },
        { Id: 23, Role: "Customer Interaction", Team: "17" },
        { Id: 24, Role: "Support and Maintenance", Team: "17" },
        { Id: 25, Role: "Task Coordination", Team: "17" }
    ];

var items = new ej.data.DataManager(data , new ej.data.Query().take(5));
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '550px',
    layout: { type: 'OrganizationalChart' },
    dataSourceSettings: { id: 'Id', parentId: 'Team', dataManager: items },
    getNodeDefaults: (obj) => {
        obj.shape = { type: 'Text', content: (obj.data).Role };
        obj.style = { fill: 'None', strokeColor: 'none',strokeWidth: 2,bold:true,color:'white' };
        obj.borderColor = 'black';
        obj.backgroundColor = 'darkcyan';
        obj.width = 75;
        obj.height = 40;
        obj.borderWidth = 1;
        (obj.shape).margin = { left: 5, right: 5, top: 5, bottom: 5 };
        return obj;
    }, getConnectorDefaults: (connector, diagram) => {
        connector.type = 'Orthogonal';
        return connector;
    }
});
diagram.appendTo('#element');

