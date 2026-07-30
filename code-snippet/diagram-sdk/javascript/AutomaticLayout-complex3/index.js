ej.diagrams.Diagram.Inject(
  ej.diagrams.DataBinding,
  ej.diagrams.ComplexHierarchicalTree,
  ej.diagrams.LineDistribution
);
var data = [
  { Name: 'node11' },
  { Name: 'node12', ReportingPerson: ['node114'] },
  { Name: 'node13', ReportingPerson: ['node12'] },
  { Name: 'node14', ReportingPerson: ['node12'] },
  { Name: 'node15', ReportingPerson: ['node12'] },
  { Name: 'node116', ReportingPerson: ['node22', 'node12', 'node114'] },
  { Name: 'node21' },
  { Name: 'node22', ReportingPerson: ['node114'] },
  { Name: 'node222', ReportingPerson: ['node114'] },
  { Name: 'node2222', ReportingPerson: ['node114'] },
  { Name: 'node23', ReportingPerson: ['node22'] },
  { Name: 'node31' },
  { Name: 'node114', ReportingPerson: ['node11', 'node21', 'node31'] },
];

var items = new ej.data.DataManager(data, new ej.data.Query().take(7));

var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '590px',
  //Uses layout to auto-arrange nodes on the diagram page
  layout: {
    //Sets layout type
    type: 'ComplexHierarchicalTree',
    connectionPointOrigin: ej.diagrams.ConnectionPointOrigin.DifferentPoint,
    enableRouting: true,
    horizontalSpacing: 40,
    verticalSpacing: 40,
    horizontalAlignment: 'Left',
    verticalAlignment: 'Top',
    margin: { left: 10, right: 10, top: 20, bottom: 10 },
    orientation: 'TopToBottom',
  }, //Configures data source for diagram
  dataSourceSettings: {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items,
  }, //Sets the default properties for nodes
  getNodeDefaults: (obj) => {
    obj.width = 40;
    obj.height = 40;
    obj.shape = { type: 'Basic', shape: 'Rectangle', cornerRadius: 7 };
    obj.style = { fill: '#6BA5D7', strokeColor: 'none', strokeWidth: 2 };
    obj.borderWidth = 1;
    obj.backgroundColor = '#6BA5D7';
    return obj;
  }, //Sets the default properties for and connectors
  getConnectorDefaults: (connector, diagram) => {
    connector.type = 'Orthogonal';
    connector.cornerRadius = 7;
    connector.targetDecorator.height = 7;
    connector.targetDecorator.width = 7;

    return connector;
  },
});
diagram.appendTo('#element');
diagram.fitToPage({ mode: 'Width' });
