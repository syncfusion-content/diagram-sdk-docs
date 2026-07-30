/**
 * hierarchical-model
 */

import {
    Diagram,
    NodeModel,
    ConnectorModel,
    LayoutAnimation,
    DataBinding,
    HierarchicalTree,
    SnapConstraints,
    DiagramTools,
    Overview,
  } from '@syncfusion/ej2-diagrams';
  import { DataManager } from '@syncfusion/ej2-data';
  Diagram.Inject(DataBinding, HierarchicalTree, LayoutAnimation);
  
  export interface EmployeeInfo {
    Name: string;
  }
  let hierarchicalTree: object = [
    {
      Name: 'Diagram',
      fillColor: '#916DAF',
    },
    {
      Name: 'Layout',
      Category: 'Diagram',
    },
    {
      Name: 'Tree Layout',
      Category: 'Layout',
    },
    {
      Name: 'Organizational Chart',
      Category: 'Layout',
    },
    {
      Name: 'Hierarchical Tree',
      Category: 'Tree Layout',
    },
    {
      Name: 'Radial Tree',
      Category: 'Tree Layout',
    },
    {
      Name: 'Mind Map',
      Category: 'Hierarchical Tree',
    },
    {
      Name: 'Family Tree',
      Category: 'Hierarchical Tree',
    },
    {
      Name: 'Management',
      Category: 'Organizational Chart',
    },
    {
      Name: 'Human Resources',
      Category: 'Management',
    },
    {
      Name: 'University',
      Category: 'Management',
    },
    {
      Name: 'Business',
      Category: 'Management',
    },
  ];
  //sets node default value
  function nodeDefaults(obj: NodeModel): NodeModel {
    obj.style = {
      fill: '#659be5',
      strokeColor: 'none',
      color: 'white',
      strokeWidth: 2,
    };
    obj.width = 150;
    obj.height = 50;
    obj.borderColor = '#3a6eb5';
    obj.backgroundColor = '#659be5';
    obj.expandIcon = {
      height: 10,
      width: 10,
      shape: 'None',
      fill: 'lightgray',
      offset: { x: 0.5, y: 1 },
    };
    obj.expandIcon.verticalAlignment = 'Auto';
    obj.expandIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
    obj.collapseIcon.offset = { x: 0.5, y: 1 };
    obj.collapseIcon.verticalAlignment = 'Auto';
    obj.collapseIcon.margin = { left: 0, right: 0, top: 0, bottom: 0 };
    obj.collapseIcon.height = 10;
    obj.collapseIcon.width = 10;
    obj.collapseIcon.padding.top = 5;
    obj.collapseIcon.shape = 'None';
    obj.collapseIcon.fill = 'lightgray';
    return obj;
  }
  
  function connectorDefaults(
    connector: ConnectorModel,
    diagram: Diagram
  ): ConnectorModel {
    connector.targetDecorator.shape = 'None';
    connector.type = 'Orthogonal';
    connector.style.strokeColor = '#6d6d6d';
    connector.cornerRadius = 5;
    return connector;
  }
  
  // tslint:disable-next-line:max-func-body-length
  
  //Initializes the nodes for the diagram
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '499px',
    snapSettings: { constraints: SnapConstraints.None },
    //configures data source settings
    dataSourceSettings: {
      //sets the fields to bind
      id: 'Name',
      parentId: 'Category',
      dataSource: new DataManager(hierarchicalTree),
      //binds the data with the nodes
      doBinding: (nodeModel: NodeModel, data: object, diagram: Diagram) => {
        nodeModel.shape = { type: 'Text', content: (data as EmployeeInfo).Name };
      },
    },
    //Disables all interactions except zoom/pan
    tool: DiagramTools.ZoomPan,
    //Configures automatic layout
    layout: {
      type: 'HierarchicalTree',
      verticalSpacing: 30,
      horizontalSpacing: 40,
      enableAnimation: true,
    },
    //Defines the default node and connector properties
    getNodeDefaults: nodeDefaults,
    getConnectorDefaults: connectorDefaults,
  });
  diagram.appendTo('#element');
  
  // Initializtion of the Overview.
  let overview: Overview = new Overview({
    width: '100%',
    height: '250px',
    sourceID: 'element',
  });
  overview.appendTo('#overview');
  