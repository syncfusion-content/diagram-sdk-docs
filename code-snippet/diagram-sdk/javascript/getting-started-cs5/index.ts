import {
    Diagram,
    ConnectorModel,
    Node,
    DataBinding,
    HierarchicalTree,
    TreeInfo,
    SnapConstraints,
    NodeModel,
    ImageElement,
    TextElement,
    StackPanel,
  } from '@syncfusion/ej2-diagrams';
  Diagram.Inject(DataBinding, HierarchicalTree);
  import { DataManager, Query } from '@syncfusion/ej2-data';
  export interface EmployeeInfo {
    Name: string;
    Role: string;
  }
  //To represent the roles
  let codes: object[] = {
    Director: 'rgb(0, 139,139)',
    Manager: 'rgb(30, 30,113)',
    Lead: 'rgb(0, 100,0)',
  };
  // Bind custom data with node
  function getNodeTemplate(node) {
    node.annotations[0].content = (node.data as EmployeeInfo).Name;
    node.style.fill = codes[(node.data as EmployeeInfo).Role];
  }
  let data: object[] = [
    { Name: 'Elizabeth', Role: 'Director' },
    { Name: 'Christina', ReportingPerson: 'Elizabeth', Role: 'Manager' },
    { Name: 'Yoshi', ReportingPerson: 'Christina', Role: 'Lead' },
    { Name: 'Philip', ReportingPerson: 'Christina', Role: 'Lead' },
    { Name: 'Yang', ReportingPerson: 'Elizabeth', Role: 'Manager' },
    { Name: 'Roland', ReportingPerson: 'Yang', Role: 'Lead' },
    { Name: 'Yvonne', ReportingPerson: 'Yang', Role: 'Lead' },
  ];
  let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    snapSettings: { constraints: SnapConstraints.None },
    //Use automatic layout to arrange elements on the page
    layout: {
      type: 'OrganizationalChart',
      margin: { left: 10, top: 10 },
      horizontalSpacing: 50,
      verticalSpacing: 50,
      orientation: 'TopToBottom',
      getLayoutInfo: (node: Node, tree: TreeInfo) => {
        if (!tree.hasSubTree) {
          tree.orientation = 'Vertical';
          tree.type = 'Alternate';
        }
      },
    },
    dataSourceSettings: {
      id: 'Name',
      parentId: 'ReportingPerson',
      dataManager: items,
    },
    getNodeDefaults: (obj: Node, diagram: Diagram) => {
      obj.height = 30;
      obj.width = 70;
      obj.shape = { type: 'Basic', shape: 'Rectangle' };
      obj.annotations = [
        {
          id: 'label1',
          style: {
            fontSize: 11,
            bold: true,
            fontFamily: 'Segoe UI',
            color: 'white',
          },
        },
      ];
      return obj;
    },
    getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
      connector.targetDecorator.shape = 'Arrow';
      connector.type = 'Orthogonal';
      return connector;
    },
    setNodeTemplate: (node: NodeModel) => {
      let codes: Object = {
        Director: 'rgb(0, 139,139)',
        Manager: 'rgb(30, 30,113)',
        Lead: 'rgb(0, 100,0)',
      };
      let content = new StackPanel();
      content.id = node.id + '_outerstack';
      content.orientation = 'Horizontal';
      content.style.strokeColor = 'gray';
      content.style.fill = (codes as any)[
        (node.data as EmployeeInfo).Role
      ] as string;
      content.padding = { left: 5, right: 5, top: 5, bottom: 5 };
      let innerContent = new ImageElement();
      innerContent.style.strokeColor = 'blue';
      innerContent.id = node.id + '_innerstack';
      innerContent.style.fill = 'skyblue';
      innerContent.width = 50;
      innerContent.height = 50;
      let text = new TextElement();
      text.id = node.id + '_text';
      text.content = (node.data as EmployeeInfo).Name;
      text.margin = { left: 15, right: 5, top: 5, bottom: 5 };
      text.style.color = 'black';
      content.children = [innerContent, text];
      return content;
    },
  });
  diagram.appendTo('#element');
  