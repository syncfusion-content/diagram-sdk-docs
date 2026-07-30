import {
  Diagram,
  SnapConstraints,
  SnapSettingsModel,
  Snapping,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(Snapping);
let snapSettings: SnapSettingsModel = {
  // Define the Constraints for gridlines and snapping
  constraints: SnapConstraints.ShowLines,
  gridType: 'Dots',
  // Defines the horizontalGridlines for SnapSettings
  horizontalGridlines: {
    // Sets the line color of gridlines
    lineColor: 'blue',
    // Defines the dot intervals of gridlines
    dotIntervals: [3, 20, 1, 20, 1, 20, 1, 20, 1, 20],
  },
  // Defines the verticalGridlines for SnapSettings
  verticalGridlines: {
    // Defines the dot intervals of gridlines
    dotIntervals: [3, 20, 1, 20, 1, 20],
    // Sets the line color of gridlines
    lineColor: 'blue',
  },
};
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '700px',
  // Define the snap setting for the diagram
  snapSettings: snapSettings,
});
diagram.appendTo('#element');
