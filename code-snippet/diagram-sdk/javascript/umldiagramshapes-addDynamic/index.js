var diagram;

var nodes = [
  {
    id: 'class',
    style: {
      fill: '#26A0DA',
    },
    //Position of the node
    offsetX: 200,
    offsetY: 200,
    shape: {
      type: 'UmlClassifier',
      //Define class object
      classShape: {
        name: 'Patient',
        //Define class attributes
        attributes: [{ name: 'accepted', type: 'Date' }],
        //Define class methods
        methods: [{ name: 'getHistory', type: 'getHistory' }],
      },
      classifier: 'Class',
    },
  },
  {
    id: 'enumeration',
    style: {
      fill: '#26A0DA',
    },
    //Position of the node
    offsetX: 400,
    offsetY: 200,
    shape: {
      type: 'UmlClassifier',
      //Define enumeration object
      enumerationShape: {
        name: 'AccountType',
        //sets the members of enumeration
        members: [
          {
            name: 'Checking Account',
            style: {},
          },
          {
            name: 'Savings Account',
          },
          {
            name: 'Credit Account',
          },
        ],
      },
      classifier: 'Enumeration',
    },
  },
];
diagram = new ej.diagrams.Diagram(
  {
    width: '650px',
    height: '350px',
    nodes: nodes,
  },
  '#element'
);
document.getElementById('addMethod').onclick = () => {
  let node = diagram.nameTable['class'];
  let method = {
    name: 'getHistory',
    style: { color: 'red' },
    parameters: [{ name: 'Date', style: {} }],
    type: 'History',
  };
  /**
   * parameter 1 — Specifies the existing UmlClass node in the diagram to which you intend to add child elements.
   * parameter 2 — Specify the child elements, such as attributes,  members, or methods, to be added to the UML class.
   * parameter 3 — Specify the enum that you intend to add to the UML class.
   */
  diagram.addChildToUmlNode(node, method, 'Method');
};

document.getElementById('addAttribute').onclick = () => {
  let node = diagram.nameTable['class'];
  let attribute = { name: 'accepted', type: 'Date', style: { color: 'red' } };
  /**
   * parameter 1 — Specifies the existing UmlClass node in the diagram to which you intend to add child elements.
   * parameter 2 — Specify the child elements, such as attributes,  members, or methods, to be added to the UML class.
   * parameter 3 — Specify the enum that you intend to add to the UML class.
   */
  diagram.addChildToUmlNode(node, attribute, 'Attribute');
};

document.getElementById('addMember').onclick = () => {
  let node = diagram.nameTable['enumeration'];
  let member = {
    name: 'Checking new',
    style: { color: 'red' },
    isSeparator: true,
  };
  /**
   * parameter 1 — Specifies the existing UmlClass node in the diagram to which you intend to add child elements.
   * parameter 2 — Specify the child elements, such as attributes,  members, or methods, to be added to the UML class.
   * parameter 3 — Specify the enum that you intend to add to the UML class.
   */
  diagram.addChildToUmlNode(node, member, 'Member');
};
