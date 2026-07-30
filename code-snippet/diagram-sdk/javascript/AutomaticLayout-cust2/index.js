ej.diagrams.Diagram.Inject(
  ej.diagrams.UndoRedo,
  ej.diagrams.HierarchicalTree,
  ej.diagrams.DataBinding
);
//Initializes data source
let data = [
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
var nodes = [
  {
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [
      {
        id: 'label1',
        content: 'Start',
      },
    ],
    shape: { type: 'Flow', shape: 'Terminator' },
  },
];
let items = new ej.data.DataManager(data, new ej.data.Query().take(7));
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '550px',
  //Uses layout to auto-arrange nodes on the Diagram page
  layout: {
    //Sets layout type
    type: 'HierarchicalTree',
    //set layout alignment
    bounds: new ej.diagrams.Rect(0, 0, 500, 500),
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
  getNodeDefaults: (obj) => {
    obj.shape = {
      type: 'Text',
      content: obj.data.Name,
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

// canLog decide whether the entry add or not in history List
diagram.historyManager.canLog = function (entry) {
  //Prevents history entry
  entry.cancel = true;
  console.log(entry);
  return entry;
};
