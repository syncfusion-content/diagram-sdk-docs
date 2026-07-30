import {
  Diagram,
  NodeModel,
  UmlClassifierShapeModel,
} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
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
    } as UmlClassifierShapeModel,
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
    } as UmlClassifierShapeModel,
  },
];
//Initializes diagram control
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  //Add node
  nodes: nodes,
});
diagram.appendTo('#element');

(document.getElementById('addMethod') as HTMLInputElement).onclick = () => {
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

(document.getElementById('addAttribute') as HTMLInputElement).onclick = () => {
  let node = diagram.nameTable['class'];
  let attribute = { name: 'accepted', type: 'Date', style: { color: 'red' } };
  /**
   * parameter 1 — Specifies the existing UmlClass node in the diagram to which you intend to add child elements.
   * parameter 2 — Specify the child elements, such as attributes,  members, or methods, to be added to the UML class.
   * parameter 3 — Specify the enum that you intend to add to the UML class.
   */
  diagram.addChildToUmlNode(node, attribute, 'Attribute');
};

(document.getElementById('addMember')as HTMLInputElement).onclick = () => {
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
