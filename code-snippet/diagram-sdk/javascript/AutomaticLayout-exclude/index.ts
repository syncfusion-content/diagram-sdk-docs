import {
  Diagram,
  ConnectorModel,
  NodeModel,
  HierarchicalTree,
  TextModel,
  DataBinding,
  Rect,
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

let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

let diagram: Diagram = new Diagram({
  width: '100%',
  height: '550px',
  //Uses layout to auto-arrange nodes on the diagram page
  layout: {
    //Sets layout type
    type: 'HierarchicalTree',
  },
  dataSourceSettings: {
    id: 'Name',
    parentId: 'ReportingPerson',
    dataManager: items,
  }, //Sets the default properties for nodes and connectors
  getNodeDefaults: (obj: NodeModel) => {
    obj.shape = {
      type: 'Text',
      content: (
        obj.data as {
          Name: 'string';
        }
      ).Name,
    };
    if ((obj.data as any).Name === 'Robert') {
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
