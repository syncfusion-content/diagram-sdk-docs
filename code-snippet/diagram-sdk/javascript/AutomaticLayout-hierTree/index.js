ej.diagrams.Diagram.Inject(ej.diagrams.HierarchicalTree);
//Initializes nodes for diagram

var nodes = [
  {
    id: 'Steve-Ceo',
  },
  {
    id: 'Kevin-Manager',
  },
  {
    id: 'Peter-Manager',
  },
  {
    id: 'John-Manager',
  },
  {
    id: 'Mary-CSE',
  },
  {
    id: 'Jim-CSE',
  },
  {
    id: 'Martin-CSE',
  },
];
//Initializes connectors for diagram
var connectors = [
  {
    id: 'Steve-Ceo_Kevin-Manager',
    sourceID: 'Steve-Ceo',
    targetID: 'Kevin-Manager',
  },
  {
    id: 'Steve-Ceo_Peter-Manager',
    sourceID: 'Steve-Ceo',
    targetID: 'Peter-Manager',
  },
  {
    id: 'Peter-Manager_John-Manager',
    sourceID: 'Peter-Manager',
    targetID: 'John-Manager',
  },
  {
    id: 'Peter-Manager_Mary-CSE',
    sourceID: 'Peter-Manager',
    targetID: 'Mary-CSE',
  },
  {
    id: 'Kevin-Manager_Jim-CSE',
    sourceID: 'Kevin-Manager',
    targetID: 'Jim-CSE',
  },
  {
    id: 'Kevin-Manager_Martin-CSE',
    sourceID: 'Kevin-Manager',
    targetID: 'Martin-CSE',
  },
];

var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '650px',
  //Uses layout to auto-arrange nodes on the diagram page
  layout: {
    //Sets layout type
    type: 'HierarchicalTree',
  },
  nodes: nodes,
  connectors: connectors,
  //Sets the default properties for nodes
  getNodeDefaults: (obj) => {
    obj.shape = {
      type: 'Text',
      content: obj.id,
    };
    obj.style = {
      fill: 'None',
      strokeColor: 'none',
      strokeWidth: 2,
      bold: true,
      color: 'white',
    };
    obj.borderColor = 'white';
    obj.width = 100;
    obj.height = 40;
    obj.backgroundColor = '#6BA5D7';
    obj.borderWidth = 1;
    obj.shape.margin = {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    };
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
});
diagram.appendTo('#element');
