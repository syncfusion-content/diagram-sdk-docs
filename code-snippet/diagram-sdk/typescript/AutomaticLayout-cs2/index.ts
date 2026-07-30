import {
    Diagram,
    ConnectorModel,
    Node,
    Container,
    TextElement,
    StackPanel,
    ImageElement,
    DataBinding,
    RadialTree,
    TreeInfo,
    DiagramTools,
  } from '@syncfusion/ej2-diagrams';
  import { DataManager, Query } from '@syncfusion/ej2-data';
  Diagram.Inject(DataBinding, RadialTree);
  //Initializes data source
  const radialSource: object = [
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
  
  let items: DataManager = new DataManager(
    radialSource as JSON[],
    new Query().take(5)
  );
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '590px',
    snapSettings: {
      constraints: 0,
    }, //Uses layout to auto-arrange nodes on the diagram page
    layout: {
      //set the type as Radial Tree
      type: 'RadialTree',
      root: 'parent',
    }, //Configures data source for diagram
    dataSourceSettings: {
      id: 'Id',
      parentId: 'ReportingPerson',
      dataManager: items,
    }, //Sets the default properties for nodes and connectors
    getNodeDefaults: (obj: Node, diagram: Diagram) => {
      obj.height = 20;
      obj.width = 20;
      obj.borderWidth = 1;
      obj.style = {
        fill: '#6BA5D7',
        strokeWidth: 2,
        strokeColor: '#6BA5D7',
      };
      return obj;
    },
    getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
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
  