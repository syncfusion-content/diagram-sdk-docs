ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.FlowchartLayout);
var data = [
    {
      "id": "1",
      "name": "Start",
      "shape": "Terminator",
      "width": 80,
      "height": 35,
      "color": "#6CA0DC"
    },
    {
      "id": "2",
      "name": "Input",
      "parentId": ["1"],
      "shape": "Parallelogram",
      "width": 90,
      "height": 35,
      "color": "#6CA0DC"
    },
    {
      "id": "3",
      "name": "Decision?",
      "parentId": ["2"],
      "shape": "Decision",
      "width": 80,
      "height": 60,
      "color": "#6CA0DC"
    },
    {
      "id": "4",
      "label": ["No"],
      "name": "Process1",
      "parentId": ["3"],
      "shape": "Process",
      "width": 80,
      "height": 40,
      "color": "#6CA0DC"
    },
    {
      "id": "5",
      "label": ["Yes"],
      "name": "Process2",
      "parentId": ["3"],
      "shape": "Process",
      "width": 80,
      "height": 40,
      "color": "#6CA0DC"
    },
    {
      "id": "6",
      "name": "Output",
      "parentId": ["5"],
      "shape": "Parallelogram",
      "width": 90,
      "height": 35,
      "color": "#6CA0DC"
    },
    {
      "id": "7",
      "name": "Output",
      "parentId": ["4"],
      "shape": "Parallelogram",
      "width": 90,
      "height": 35,
      "color": "#6CA0DC"
    },
    {
      "id": "8",
      "name": "End",
      "parentId": ["6", "7"],
      "shape": "Terminator",
      "width": 80,
      "height": 35,
      "color": "#6CA0DC"
    }
  ];

var items = new ej.data.DataManager(data, new ej.data.Query().take(7));

var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '650px',
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
    getNodeDefaults: function (obj) {
        obj.width = 120;
        obj.height = 50;
        if (obj.shape.shape === 'Decision') {
            obj.height = 80;
        }
        return obj;
    }, //Sets the default properties for connectors
    getConnectorDefaults: function (connector) {
        connector.type = 'Orthogonal';
        connector.style.strokeColor = '#6CA0DC';
        connector.targetDecorator.style = {fill: '#6CA0DC', strokeColor: '#6CA0DC'};
        return connector;
    }
});
diagram.appendTo('#element');

