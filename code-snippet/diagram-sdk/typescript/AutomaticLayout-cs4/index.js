ej.diagrams.Diagram.Inject(
    ej.diagrams.DataBinding,
    ej.diagrams.HierarchicalTree
  );
  var data = [
    {
      Id: 1,
      Role: 'General Manager',
    },
    {
      Id: 2,
      Role: 'Assistant Manager',
      Team: 1,
    },
    {
      Id: 3,
      Role: 'Human Resource Manager',
      Team: 1,
    },
    {
      Id: 4,
      Role: 'Design Manager',
      Team: 1,
    },
    {
      Id: 5,
      Role: 'Operation Manager',
      Team: 1,
    },
    {
      Id: 6,
      Role: 'Marketing Manager',
      Team: 1,
    },
  ];
  
  var items = new ej.data.DataManager(data, new ej.data.Query().take(7));
  
  diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '530px',
    snapSettings: { constraints: 0 },
    layout: {
      type: 'OrganizationalChart',
      margin: { top: 20 },
      getLayoutInfo: (node, option) => {
        if (!option.hasSubTree) {
          option.orientation = 'Horizontal';
          option.type = 'Center';
        }
      },
    },
    dataSourceSettings: {
      id: 'Id',
      parentId: 'Team',
      dataManager: items,
    },
    //Sets the default properties for nodes and connectors
    getNodeDefaults: (obj) => {
      obj.width = 150;
      obj.height = 50;
      obj.style.fill = '#6BA5D7';
      obj.annotations = [
        {
          content: obj.data['Role'],
          style: {
            color: 'white',
          },
        },
      ];
      return obj;
    },
    getConnectorDefaults: (connector) => {
      connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2,
      };
      connector.targetDecorator.style.fill = '#6BA5D7';
      connector.targetDecorator.style.strokeColor = '#6BA5D7';
      connector.targetDecorator.shape = 'None';
      connector.targetDecorator.shape = 'None';
      connector.type = 'Orthogonal';
      return connector;
    },
  });
  diagram.appendTo('#element');
  
  let alignment = document.getElementById('alignment');
  alignment.onchange = (args) => {
    diagram.layout.getLayoutInfo = (node, options) => {
      if (!options.hasSubTree) {
        options.type = args.target.value;
        options.orientation = 'Horizontal';
      }
    };
  };
  