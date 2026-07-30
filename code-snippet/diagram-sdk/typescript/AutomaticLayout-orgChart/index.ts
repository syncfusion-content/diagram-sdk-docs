import {
    Diagram,
    ConnectorModel,
    DataBinding,
    HierarchicalTree,
    TextModel,
    NodeModel,
  } from '@syncfusion/ej2-diagrams';
  Diagram.Inject(DataBinding, HierarchicalTree);
  
  //Initializes nodes
  const nodes: NodeModel[] = [
    { id: 'Project Management' },
    { id: 'R&D Team' },
    { id: 'Philosophy' },
    { id: 'Organization' },
    { id: 'Technology' },
    { id: 'Funding' },
    { id: 'Resource Allocation' },
    { id: 'Targeting' },
    { id: 'Evaluation' },
    { id: 'HR Team' },
    { id: 'Recruitment' },
    { id: 'Employee Relation' },
    { id: 'Production & Sales Team' },
    { id: 'Design' },
    { id: 'Operation' },
    { id: 'Support' },
    { id: 'Quality Assurance' },
    { id: 'Customer Interaction' },
    { id: 'Support and Maintenance' },
    { id: 'Task Coordination' },
  ];
  
  //Initializa connectors
  const connectors: ConnectorModel[] = [
    {
      id: 'Project Management-R&D Team',
      sourceID: 'Project Management',
      targetID: 'R&D Team',
    },
    { id: 'R&D Team-Philosophy', sourceID: 'R&D Team', targetID: 'Philosophy' },
    {
      id: 'R&D Team-Organization',
      sourceID: 'R&D Team',
      targetID: 'Organization',
    },
    { id: 'R&D Team-Technology', sourceID: 'R&D Team', targetID: 'Technology' },
    { id: 'R&D Team-Funding', sourceID: 'R&D Team', targetID: 'Funding' },
    {
      id: 'R&D Team-Resource Allocation',
      sourceID: 'R&D Team',
      targetID: 'Resource Allocation',
    },
    { id: 'R&D Team-Targeting', sourceID: 'R&D Team', targetID: 'Targeting' },
    { id: 'R&D Team-Evaluation', sourceID: 'R&D Team', targetID: 'Evaluation' },
    {
      id: 'Project Management-HR Team',
      sourceID: 'Project Management',
      targetID: 'HR Team',
    },
    { id: 'HR Team-Recruitment', sourceID: 'HR Team', targetID: 'Recruitment' },
    {
      id: 'HR Team-Employee Relation',
      sourceID: 'HR Team',
      targetID: 'Employee Relation',
    },
    {
      id: 'Project Management-Production & Sales Team',
      sourceID: 'Project Management',
      targetID: 'Production & Sales Team',
    },
    {
      id: 'Production & Sales Team-Design',
      sourceID: 'Production & Sales Team',
      targetID: 'Design',
    },
    {
      id: 'Production & Sales Team-Operation',
      sourceID: 'Production & Sales Team',
      targetID: 'Operation',
    },
    {
      id: 'Production & Sales Team-Support',
      sourceID: 'Production & Sales Team',
      targetID: 'Support',
    },
    {
      id: 'Production & Sales Team-Quality Assurance',
      sourceID: 'Production & Sales Team',
      targetID: 'Quality Assurance',
    },
    {
      id: 'Production & Sales Team-Customer Interaction',
      sourceID: 'Production & Sales Team',
      targetID: 'Customer Interaction',
    },
    {
      id: 'Production & Sales Team-Support and Maintenance',
      sourceID: 'Production & Sales Team',
      targetID: 'Support and Maintenance',
    },
    {
      id: 'Production & Sales Team-Task Coordination',
      sourceID: 'Production & Sales Team',
      targetID: 'Task Coordination',
    },
  ];
  
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '550px',
    //Uses layout to auto-arrange nodes on the Diagram page
    layout: {
      //set the type as Organizational Chart
      type: 'OrganizationalChart',
    },
    nodes: nodes,
    connectors: connectors,
    //Sets the default properties for nodes and connectors
    getNodeDefaults: (obj: NodeModel) => {
      obj.shape = { type: 'Text', content: obj.id };
      obj.style = {
        fill: 'None',
        strokeColor: 'none',
        strokeWidth: 2,
        bold: true,
        color: 'white',
      };
      obj.borderColor = 'black';
      obj.backgroundColor = 'darkcyan';
      obj.width = 75;
      obj.height = 40;
      obj.borderWidth = 1;
      (obj.shape as TextModel).margin = {
        left: 5,
        right: 5,
        top: 5,
        bottom: 5,
      };
      return obj;
    },
    getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
      connector.type = 'Orthogonal';
      return connector;
    },
  });
  diagram.appendTo('#element');
  