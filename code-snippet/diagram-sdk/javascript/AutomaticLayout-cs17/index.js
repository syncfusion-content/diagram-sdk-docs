ej.diagrams.Diagram.Inject(
    ej.diagrams.DataBinding,
    ej.diagrams.HierarchicalTree
  );
  var data = [
    {
      Name: 'Steve-Ceo',
    },
    {
      Name: 'Kevin-Manager',
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
  
  var items = new ej.data.DataManager(data, new ej.data.Query().take(7));
  
  var diagram = new ej.diagrams.Diagram({
    width: '70%',
    height: '650px',
    //Uses layout to auto-arrange nodes on the diagram page
    layout: {
      //Sets layout type
      type: 'HierarchicalTree',
    }, //Configures data source for diagram
    dataSourceSettings: {
      id: 'Name',
      parentId: 'ReportingPerson',
      dataManager: items,
    }, //Sets the default properties for nodes
    getNodeDefaults: (obj) => {
      obj.style = {
        fill: 'None',
        strokeColor: 'none',
        strokeWidth: 2,
        bold: true,
        color: 'white',
      };
      obj.constraints =
        ej.diagrams.NodeConstraints.Default |
        ej.diagrams.NodeConstraints.AllowDrop;
      obj.borderColor = 'white';
      obj.width = 100;
      obj.height = 40;
      obj.backgroundColor = '#6BA5D7';
      obj.borderWidth = 1;
      return obj;
    }, //Sets the default properties for and connectors
    getConnectorDefaults: (connector, diagram) => {
      connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2,
      };
      connector.targetDecorator.style.fill = '#6BA5D7';
      connector.targetDecorator.style.strokeColor = '#6BA5D7';
      connector.type = 'Orthogonal';
      return connector;
    },
    drop: function (args) {
      setTimeout(() => {
        //Argument element is used to get the dropped node.
        let node = args.element;
        let bottomNode = args.target;
        //Gets the connector that connected to dropped node
        let edges = diagram.getEdges(node);
        if (edges && edges.length > 0) {
          let connector = diagram.getObject(edges[0]);
          //Argument target is used to get the hovered node
          connector.sourceID = args.target.id;
          diagram.dataBind();
        } else {
          let newCon = {
            id: 'newcon' + ej.diagrams.randomId(),
            sourceID: args.target.id,
            targetID: args.element.id,
          };
          diagram.dataBind();
          diagram.add(newCon);
        }
        diagram.doLayout();
      }, 100);
    },
  });
  diagram.appendTo('#element');
  
  let symbolPalette = new ej.diagrams.SymbolPalette({
    width: 300,
    height: 600,
    palettes: [
      {
        title: 'Basic shapes',
        id: 'basicShapes',
        symbols: [
          {
            id: 'node',
            width: 100,
            height: 50,
            data: { Name: 'New Node' },
            style: { fill: '#6BA5D7' },
          },
        ],
      },
    ],
    expandMode: 'Multiple',
    symbolHeight: 50,
    symbolWidth: 100,
  });
  symbolPalette.appendTo('#symbolpalette');
  