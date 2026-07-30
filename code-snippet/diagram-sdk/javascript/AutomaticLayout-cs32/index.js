ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
 var data = [
	{Name: "Steve-Ceo"},
	{Name: "Kevin-Manager", ReportingPerson: "Steve-Ceo",color:'darkcyan'},
	{Name: "Peter-Manager", ReportingPerson: "Steve-Ceo",color:'white'},
	{Name: "John- Manager", ReportingPerson: "Peter-Manager",color:'darkcyan'},
	{Name: "Mary-CSE ", ReportingPerson: "Peter-Manager",color:'white'},
	{Name: "Jim-CSE ", ReportingPerson: "Kevin-Manager",color:'darkcyan'},
	{Name: "Martin-CSE", ReportingPerson: "Kevin-Manager",color:'white'}];

var items = new ej.data.DataManager(data, new ej.data.Query().take(7));

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '550px',
     layout: { type: 'HierarchicalTree',bounds:new ej.diagrams.Rect(0,0,500,500),horizontalSpacing:25,verticalSpacing:30,horizontalAlignment:'Left',verticalAlignment:'Top'},
    dataSourceSettings: { id: 'Name', parentId: 'ReportingPerson', dataManager: items },
    getNodeDefaults: (obj) => {
        obj.shape = { type: 'Text', content: (obj.data ).Name };
        obj.style = { fill:'None', strokeColor: 'none',strokeWidth: 2, bold: true, color: 'white'};
        obj.borderColor = 'black';
        obj.width=100;
        obj.height=40;
        obj.backgroundColor = 'darkcyan';
        obj.borderWidth = 1;
        (obj.shape ).margin = { left: 25, right: 25, top: 25, bottom: 25 };
        return obj;
    }, setNodeTemplate: function (obj, diagram) {
        obj.style.color=(obj.data).color;
    }
});
diagram.appendTo('#element');

