import {
    Diagram,
    ConnectorModel,
    NodeModel,
    DiagramConstraints,
    HierarchicalTree,
    TextModel,
    DataBinding,
    Rect,
    StackPanel,
    TextElement,
    ImageElement,
  } from '@syncfusion/ej2-diagrams';
  import { DataManager, Query } from '@syncfusion/ej2-data';
  Diagram.Inject(DataBinding, HierarchicalTree);
  //Initializes data source
  let data: object[] = [
    {
      Name: 'Steve-Ceo',
    },
    {
      Name: 'Kevin-Manager',
      ReportingPerson: 'Steve-Ceo',
      color: 'darkcyan',
    },
    {
      Name: 'Peter-Manager',
      ReportingPerson: 'Steve-Ceo',
      color: 'white',
    },
    {
      Name: 'John- Manager',
      ReportingPerson: 'Peter-Manager',
      color: 'darkcyan',
    },
    {
      Name: 'Mary-CSE ',
      ReportingPerson: 'Peter-Manager',
      color: 'white',
    },
    {
      Name: 'Jim-CSE ',
      ReportingPerson: 'Kevin-Manager',
      color: 'darkcyan',
    },
    {
      Name: 'Martin-CSE',
      ReportingPerson: 'Kevin-Manager',
      color: 'white',
    },
  ];
  
  let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
  // Initializes the diagram
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '550px',
    layout: {
      type: 'HierarchicalTree',
      horizontalSpacing: 25,
      verticalSpacing: 30,
      horizontalAlignment: 'Left',
      verticalAlignment: 'Top',
    },
    dataSourceSettings: {
      id: 'Name',
      parentId: 'ReportingPerson',
      dataManager: items,
    },
    getNodeDefaults: (obj: NodeModel) => {
      obj.width = 200;
      obj.height = 60;
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
      connector.type = 'Orthogonal';
      return connector;
    },
    setNodeTemplate: function (obj: NodeModel) {
      let container = new StackPanel();
      container.width = 200;
      container.height = 60;
      container.cornerRadius=10;
      container.style.fill = 'skyblue';
      container.horizontalAlignment = 'Left';
      container.orientation = 'Horizontal';
      container.id = (obj.data as any).Name + '_StackContainter';
      let innerContent = new ImageElement();
      innerContent.id = (obj.data as any).Name + '_innerContent';
      innerContent.width = 40;
      innerContent.height = 40;
      innerContent.margin.left = 20;
      innerContent.style.fill = 'lightgrey';
      let text = new TextElement();
      text.content = 'Name: ' + (obj.data as any).Name;
      text.margin = { left: 10, top: 5 };
      text.id = (obj.data as any).Name + '_textContent';
      text.style.fill = 'green';
      text.style.color = 'white';
      if ((obj.data as any).Name === 'Steve-Ceo') {
        text.style.fill = 'black';
        text.style.color = 'white';
      }
      container.children = [innerContent, text];
      return container;
    },
  });
  
  diagram.appendTo('#element');
  