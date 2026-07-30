ej.diagrams.Diagram.Inject(
  ej.diagrams.DataBinding,
  ej.diagrams.HierarchicalTree
);
var data = [
  {
    Name: 'Steve-Ceo',
  },
  {
    Name: 'Kevin-Manager',
    ReportingPerson: 'Steve-Ceo',
  },
  {
    Name: 'Robert',
    ReportingPerson: 'Steve-Ceo',
  },
  {
    Name: 'Peter-Manager',
    ReportingPerson: 'Steve-Ceo',
  },
  {
    Name: 'John- Manager',
    ReportingPerson: 'Peter-Manager',
  },
  {
    Name: 'Mary-CSE ',
    ReportingPerson: 'Peter-Manager',
  },
  {
    Name: 'Jim-CSE ',
    ReportingPerson: 'Kevin-Manager',
  },
  {
    Name: 'Martin-CSE',
    ReportingPerson: 'Kevin-Manager',
  },
];

var items = new ej.data.DataManager(data, new ej.data.Query().take(7));

var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '550px',
  //Uses layout to auto-arrange nodes on the Diagram page
  layout: {
    //Sets layout type
    type: 'HierarchicalTree',
  },
  dataSourceSettings: {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items,
  },
  getNodeDefaults: (obj) => {
    obj.shape = {
      type: 'Text',
      content: obj.data.Name,
    };
    if (obj.data.Name === 'Robert') {
      //Excludes node from layout
      obj.excludeFromLayout = true;
      obj.offsetX = 150;
      obj.offsetY = 75;
    }
    obj.width = 100;
    obj.height = 50;
    obj.style = {
      fill: '#6BA5D7',
      strokeColor: '#6BA5D7',
      strokeWidth: 2,
      bold: true,
      color: 'white',
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
