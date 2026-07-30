ej.diagrams.Diagram.Inject(
  ej.diagrams.ComplexHierarchicalTree,
  ej.diagrams.DataBinding
);

//Initializes dataSource
var data = [
  {
    Name: 'node11',
    fillColor: '#e7704c',
    border: '#c15433',
    ReportingPerson: null,
  },
  {
    Name: 'node12',
    ReportingPerson: ['node114'],
    fillColor: '#efd46e',
    border: '#d6b123',
  },
  {
    Name: 'node13',
    ReportingPerson: ['node12'],
    fillColor: '#58b087',
    border: '#16955e',
  },
  {
    Name: 'node14',
    ReportingPerson: ['node12'],
    fillColor: '#58b087',
    border: '#16955e',
  },
  {
    Name: 'node15',
    ReportingPerson: ['node12'],
    fillColor: '#58b087',
    border: '#16955e',
  },
  {
    Name: 'node116',
    ReportingPerson: ['node22', 'node12'],
    fillColor: '#58b087',
    border: '#16955e',
  },
  { Name: 'node16', ReportingPerson: [], fillColor: '#14ad85' },
  {
    Name: 'node17',
    ReportingPerson: ['node13', 'node14', 'node15'],
    fillColor: '#659be5',
    border: '#3a6eb5',
  },
  { Name: 'node18', ReportingPerson: [], fillColor: '#14ad85' },
  {
    Name: 'node19',
    ReportingPerson: ['node16', 'node17', 'node18'],
    fillColor: '#8dbe6c',
    border: '#489911',
  },
  {
    Name: 'node110',
    ReportingPerson: ['node16', 'node17', 'node18'],
    fillColor: '#8dbe6c',
    border: '#489911',
  },
  {
    Name: 'node111',
    ReportingPerson: ['node16', 'node17', 'node18', 'node116'],
    fillColor: '#8dbe6c',
    border: '#489911',
  },
  { Name: 'node21', fillColor: '#e7704c', border: '#c15433' },
  {
    Name: 'node22',
    ReportingPerson: ['node114'],
    fillColor: '#efd46e',
    border: '#d6b123',
  },
  {
    Name: 'node23',
    ReportingPerson: ['node22'],
    fillColor: '#58b087',
    border: '#16955e',
  },
  {
    Name: 'node24',
    ReportingPerson: ['node22'],
    fillColor: '#58b087',
    border: '#16955e',
  },
  {
    Name: 'node25',
    ReportingPerson: ['node22'],
    fillColor: '#58b087',
    border: '#16955e',
  },
  { Name: 'node26', ReportingPerson: [], fillColor: '#14ad85' },
  {
    Name: 'node27',
    ReportingPerson: ['node23', 'node24', 'node25'],
    fillColor: '#659be5',
    border: '#3a6eb5',
  },
  { Name: 'node28', ReportingPerson: [], fillColor: '#14ad85' },
  {
    Name: 'node29',
    ReportingPerson: ['node26', 'node27', 'node28', 'node116'],
    fillColor: '#8dbe6c',
    border: '#489911',
  },
  {
    Name: 'node210',
    ReportingPerson: ['node26', 'node27', 'node28'],
    fillColor: '#8dbe6c',
    border: '#489911',
  },
  {
    Name: 'node211',
    ReportingPerson: ['node26', 'node27', 'node28'],
    fillColor: '#8dbe6c',
    border: '#489911',
  },
  { Name: 'node31', fillColor: '#e7704c', border: '#c15433' },
  {
    Name: 'node114',
    ReportingPerson: ['node11', 'node21', 'node31'],
    fillColor: '#f3904a',
    border: '#d3722e',
  },
];

var items = new ej.data.DataManager(data, new ej.data.Query().take(7));
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: 1000,
  dataSourceSettings: {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataSource: items,
  },
  //Uses layout to auto-arrange nodes on the diagram page
  layout: {
    //Sets layout type
    type: 'ComplexHierarchicalTree',
    orientation: 'TopToBottom',
    horizontalAlignment: 'Center',
    verticalAlignment: 'Top',
    horizontalSpacing: 50,
    verticalSpacing: 50,
  },
  //Sets the default properties for nodes and connectors
  getNodeDefaults: (obj) => {
    (obj.width = 70),
      (obj.height = 70),
      (obj.style = {
        fill: '#6BA5D7',
        strokeColor: 'none',
        strokeWidth: 2,
      });
    obj.borderColor = 'white';
    obj.backgroundColor = '#6BA5D7';
    obj.borderWidth = 1;
    obj.shape.margin = {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    };
    return obj;
  },
  getConnectorDefaults: (connector) => {
    connector.style = {
      strokeColor: '#6BA5D7',
      strokeWidth: 2,
    };
    connector.targetDecorator.style.fill = '#6BA5D7';
    connector.targetDecorator.style.strokeColor = '#6BA5D7';
    connector.type = 'Orthogonal';
    return connector;
  },
});
diagram.appendTo('#element');
