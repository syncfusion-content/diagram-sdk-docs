


import {
    Diagram, ConnectorModel, NodeModel, FlowchartLayout, DataBinding
} from '@syncfusion/ej2-diagrams';
import {
    DataManager,
    Query
} from '@syncfusion/ej2-data';
Diagram.Inject(DataBinding, FlowchartLayout);
//Initializes data source
let data: object[] = [
    {
      "id": "1",
      "name": "Start",
      "shape": "Terminator",
      "color": "#6CA0DC"
    },
    {
      "id": "2",
      "name": "Input",
      "parentId": ["1"],
      "shape": "Parallelogram",
      "color": "#6CA0DC"
    },
    {
      "id": "3",
      "name": "Decision?",
      "parentId": ["2"],
      "shape": "Decision",
      "color": "#6CA0DC"
    },
    {
      "id": "4",
      "label": ["No"],
      "name": "Process1",
      "parentId": ["3"],
      "shape": "Process",
      "color": "#6CA0DC"
    },
    {
      "id": "5",
      "label": ["Yes"],
      "name": "Process2",
      "parentId": ["3"],
      "shape": "Process",
      "color": "#6CA0DC"
    },
    {
      "id": "6",
      "name": "Output",
      "parentId": ["5"],
      "shape": "Parallelogram",
      "color": "#6CA0DC"
    },
    {
      "id": "7",
      "name": "Output",
      "parentId": ["4"],
      "shape": "Parallelogram",
      "color": "#6CA0DC"
    },
    {
      "id": "8",
      "name": "End",
      "parentId": ["6", "7"],
      "shape": "Terminator",
      "color": "#6CA0DC"
    }
  ];
let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '550px',
    //Uses layout to auto-arrange nodes on the diagram page
    layout: {
        //Sets layout type
        type: 'Flowchart'
    },//Configures data source for diagram
    dataSourceSettings: {
        id: 'id',
        parentId: 'parentId',
        dataManager: items
    },//Sets the default properties for nodes
    getNodeDefaults: function (obj: NodeModel) {
        obj.width = 120;
        obj.height = 50;
        if (obj.shape.shape === 'Decision') {
            obj.height = 80;
        }
        return obj;
    }, //Sets the default properties for connectors
    getConnectorDefaults: function (connector: ConnectorModel) {
        connector.type = 'Orthogonal';
        connector.style.strokeColor = '#6CA0DC';
        connector.targetDecorator.style = {fill: '#6CA0DC', strokeColor: '#6CA0DC'};
        return connector;
    }
});
diagram.appendTo('#element');



