ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding);

var data = [
  {
    id: 'data1',
    parent: null,
  },
];

// initialize Diagram component

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    dataSourceSettings: {
      id: 'id',
      parentId: 'parent',
      dataSource: new ej.data.DataManager(data),
    },
    getNodeDefaults: function (node) {
      node.height = 100;
      node.width = 100;
      node.offsetX = 300;
      node.offsetY = 200;
      node.style = { fill: 'yellow', strokeColor: 'yellow' };
      return node;
    },
  },
  '#element'
);
