ej.diagrams.Diagram.Inject(
    ej.diagrams.DataBinding,
    ej.diagrams.HierarchicalTree
  );
  const radialSource = [
    { Id: 'parent', Name: 'Maria Anders', Designation: 'Managing Director' },
    {
      Id: '1',
      Name: 'Ana Trujillo',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '2',
      Name: 'Lino Rodri',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '3',
      Name: 'Philip Cramer',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '4',
      Name: 'Pedro Afonso',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '15',
      Name: 'Paul Henriot',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '18',
      Name: 'Laura Callahan',
      Designation: 'Project Manager',
      ReportingPerson: 'parent',
    },
    {
      Id: '5',
      Name: 'Anto Moreno',
      Designation: 'Project Lead',
      ReportingPerson: '1',
    },
    {
      Id: '6',
      Name: 'Elizabeth Roel',
      Designation: 'Project Lead',
      ReportingPerson: '1',
    },
    {
      Id: '7',
      Name: 'Aria Cruz',
      Designation: 'Project Lead',
      ReportingPerson: '18',
    },
    {
      Id: '8',
      Name: 'Eduardo Roel',
      Designation: 'Project Lead',
      ReportingPerson: '18',
    },
    {
      Id: '9',
      Name: 'Howard Snyd',
      Designation: 'Project Lead',
      ReportingPerson: '2',
    },
    {
      Id: '10',
      Name: 'Daniel Tonini',
      Designation: 'Project Lead',
      ReportingPerson: '2',
    },
    {
      Id: '11',
      Name: 'Nardo Batista',
      Designation: 'Project Lead',
      ReportingPerson: '3',
    },
    {
      Id: '12',
      Name: 'Michael Holz',
      Designation: 'Project Lead',
      ReportingPerson: '3',
    },
    {
      Id: '13',
      Name: 'Kloss Perrier',
      Designation: 'Project Lead',
      ReportingPerson: '4',
    },
    {
      Id: '14',
      Name: 'Liz Nixon',
      Designation: 'Project Lead',
      ReportingPerson: '4',
    },
    {
      Id: '16',
      Name: 'Paula Parente',
      Designation: 'Project Lead',
      ReportingPerson: '15',
    },
    {
      Id: '17',
      Name: 'Matti Kenna',
      Designation: 'Project Lead',
      ReportingPerson: '15',
    },
  ];
  
  var items = new ej.data.DataManager(radialSource, new ej.data.Query().take(5));
  
  var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '590px',
    snapSettings: { constraints: 0 },
    layout: {
      type: 'RadialTree',
      horizontalSpacing: 30,
      verticalSpacing: 30,
      root: 'parent',
    },
    dataSourceSettings: {
      id: 'Id',
      parentId: 'ReportingPerson',
      dataManager: items,
    },
  
    getNodeDefaults: (obj, diagram) => {
      obj.height = 20;
      obj.width = 20;
      obj.backgroundColor = 'lightgrey';
      obj.style = {
        fill: '#6BA5D7',
        strokeWidth: 2,
        strokeColor: '#6BA5D7',
      };
      return obj;
    },
    getConnectorDefaults: (connector, diagram) => {
      connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2,
      };
      connector.targetDecorator.style.fill = '#6BA5D7';
      connector.targetDecorator.style.strokeColor = '#6BA5D7';
      connector.targetDecorator.shape = 'None';
      connector.type = 'Straight';
      return connector;
    },
  });
  diagram.appendTo('#element');
  