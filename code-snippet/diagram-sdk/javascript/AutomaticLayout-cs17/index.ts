import {
    Diagram,
    ConnectorModel,
    NodeModel,
    HierarchicalTree,
    DataBinding,
    SymbolPalette,
    NodeConstraints,
    IDropEventArgs,
    randomId,
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
      ReportingPerson: 'Steve-Ceo',
    },
    {
      Name: 'John-Manager',
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
    width: '70%',
    height: '550px',
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
    getNodeDefaults: (obj: NodeModel) => {
      obj.style = {
        fill: 'None',
        strokeColor: 'none',
        strokeWidth: 2,
        bold: true,
        color: 'white',
      };
      obj.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
      obj.borderColor = 'white';
      obj.width = 100;
      obj.height = 40;
      obj.backgroundColor = '#6BA5D7';
      obj.borderWidth = 1;
      return obj;
    }, //Sets the default properties for and connectors
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
    drop: function (args: IDropEventArgs) {
      setTimeout(() => {
        //Argument element is used to get the dropped node.
        let node: NodeModel = args.element as NodeModel;
        let bottomNode: NodeModel = args.target as NodeModel;
        //Gets the connector that connected to dropped node
        let edges: string[] = diagram.getEdges(node);
        if (edges && edges.length > 0) {
          let connector: ConnectorModel = diagram.getObject(edges[0]);
          //Argument target is used to get the hovered node
          connector.sourceID = (args.target as NodeModel).id;
          diagram.dataBind();
        } else {
          let newCon: ConnectorModel = {
            id: 'newcon' + randomId(),
            sourceID: (args.target as NodeModel).id,
            targetID: (args.element as NodeModel).id,
          };
          diagram.dataBind();
          diagram.add(newCon);
        }
        diagram.doLayout();
      }, 100);
    },
  });
  diagram.appendTo('#element');
  
  let symbolPalette = new SymbolPalette({
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
  