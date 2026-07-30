

import {
  Diagram,
  NodeModel,
  UmlClassifierShapeModel
} from "@syncfusion/ej2-diagrams";
let node: NodeModel = {
    id: "Patient",
    offsetX: 200,
    offsetY: 200,
    style: {
      fill: '#26A0DA',
    },
    shape: {
      type: "UmlClassifier",
      //Define enumeration object
      enumerationShape: {
        name: "AccountType",
        //set the members of enumeration
        members: [
          {
            name: "Checking Account",
          },
          {
            name: "Savings Account"
          },
          {
            name: "Credit Account"
          }
        ]
      },
      classifier: "Enumeration"
    } as UmlClassifierShapeModel
};
//Initializes diagram control
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  //Add node
  nodes: [node]
});
diagram.appendTo("#element");


