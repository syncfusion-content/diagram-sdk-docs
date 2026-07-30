

import {
  Diagram,
  ConnectorModel,
  UmlClassifierShapeModel
} from "@syncfusion/ej2-diagrams";

let connector: ConnectorModel = {
     id: 'connector',
     type: 'Straight',
     //Define connector start and end points
     sourcePoint: { x: 100, y: 100 },
     targetPoint: { x: 200, y: 200 },
     shape: { type: 'UmlActivity', flow: 'Exception' }
};
//Initializes diagram control
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  connectors: [connector]
});
diagram.appendTo("#element");


