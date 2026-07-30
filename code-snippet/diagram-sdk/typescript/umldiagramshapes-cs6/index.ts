

import {
  Diagram,
  ConnectorModel
} from "@syncfusion/ej2-diagrams";
let connector: ConnectorModel = {
    id: "connector",
    //Define connector start and end points
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    type: "Straight",
    shape: {
      type: "UmlClassifier",
      //Set an relationship for connector
      relationship: "Composition"
    }
};
//Initializes diagram control
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  //Add connector
  connectors: [connector]
});
diagram.appendTo("#element");


