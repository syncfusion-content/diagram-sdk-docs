ej.diagrams.Diagram.Inject(
  ej.diagrams.DataBinding,
  ej.diagrams.HierarchicalTree
);

var data = [
  {
    id: 1,
    Label: 'StackPanel',
  },
  {
    id: 2,
    Label: 'Label',
    parentId: 1,
  },
  {
    id: 3,
    Label: 'ListBox',
    parentId: 1,
  },
  {
    id: 4,
    Label: 'StackPanel',
    parentId: 2,
  },
  {
    id: 5,
    Label: 'Border',
    parentId: 2,
  },
  {
    id: 6,
    Label: 'Border',
    parentId: 4,
  },
  {
    id: 7,
    Label: 'Button',
    parentId: 4,
  },
  {
    id: 8,
    Label: 'ContentPresenter',
    parentId: 5,
  },
  {
    id: 9,
    Label: 'Text Block',
    parentId: 5,
  },
];
var items = new ej.data.DataManager(data, new ej.data.Query().take(7));

var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '550px',
  snapSettings: { constraints: 0 },
  //Uses layout to auto-arrange nodes on the diagram page
  layout: {
    //Sets layout type
    type: 'MindMap',
    orientation: 'Horizontal',
    getBranch: (node) => {
      if (node.data.id === 1) {
        return 'Root';
      }
      return 'Right';
    },
  }, //Configures data source for diagram
  dataSourceSettings: {
    id: 'id',
    parentId: 'parentId',
    dataManager: items,
    root: String(1),
  }, //Sets the default properties for nodes and connectors
  getNodeDefaults: (obj) => {
    obj.shape = {
      type: 'Text',
      content: obj.data.Label,
    };
    obj.style = {
      fill: '#6BA5D7',
      strokeColor: 'none',
      strokeWidth: 2,
    };
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
