import {
    Diagram,
    ConnectorModel,
    NodeModel,
    DiagramConstraints,
    HierarchicalTree,
    TextModel,
    DataBinding,
    Rect,
    HorizontalAlignment,
    VerticalAlignment,
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
    },
    {
      Name: 'Peter-Manager',
      ReportingPerson: 'Kevin-Manager',
    },
    {
      Name: 'John- Manager',
      ReportingPerson: 'Peter-Manager',
    },
    {
      Name: 'Mary-CSE ',
      ReportingPerson: 'Peter-Manager',
    },
  ];
  let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '550px',
    //Uses layout to auto-arrange nodes on the Diagram page
    layout: {
      //Sets layout type
      type: 'HierarchicalTree',
      //set layout alignment
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
      obj.shape = {
        type: 'Text',
        content: (
          obj.data as {
            Name: 'string';
          }
        ).Name,
      };
      obj.style = {
        fill: 'None',
        strokeColor: 'none',
        strokeWidth: 2,
        bold: true,
        color: 'white',
      };
      obj.width = 100;
      obj.height = 40;
      obj.borderColor = 'white';
      obj.backgroundColor = '#6BA5D7';
      obj.borderWidth = 1;
      return obj;
    },
    getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
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
  
  let horizontalAlignment = document.getElementById(
    'horizontalAlignment'
  ) as HTMLSelectElement;
  let verticalAlignment = document.getElementById(
    'verticalAlignment'
  ) as HTMLSelectElement;
  
  horizontalAlignment.onchange = (args) => {
    diagram.layout.horizontalAlignment = (args.target as HTMLSelectElement)
      .value as HorizontalAlignment;
    diagram.dataBind();
  };
  
  verticalAlignment.onchange = (args) => {
    diagram.layout.verticalAlignment = (args.target as HTMLSelectElement)
      .value as VerticalAlignment;
    diagram.dataBind();
  };
  