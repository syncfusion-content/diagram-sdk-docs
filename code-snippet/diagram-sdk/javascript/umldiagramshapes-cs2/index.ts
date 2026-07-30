

import {
  Diagram,
  NodeModel,
  UmlClassifierShapeModel
} from "@syncfusion/ej2-diagrams";
let node: NodeModel = {
    id: "Patient",
    //Position of the node
    offsetX: 200,
    offsetY: 200,
    style: {
      fill: '#26A0DA',
    },
    shape: {
      type: "UmlClassifier",
      //Define interface object
      interfaceShape: {
        name: "Patient",
        //Define interface attributes
        attributes: [{ name: "owner", type: "String[*]" }],
        //Define interface methods
        methods: [
          {
            name: "deposit",
            parameters: [
              {
                name: "amount",
                type: "Dollars"
              }
            ]
          }
        ]
      },
      classifier: "Interface"
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


