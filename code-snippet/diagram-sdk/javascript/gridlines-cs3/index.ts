import {
  Diagram,
  SnapConstraints,
  SnapSettingsModel,
  Snapping,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(Snapping);
let snapSettings: SnapSettingsModel = {
  constraints: SnapConstraints.ShowLines,
  horizontalGridlines: {
    // Sets the lineIntervals of Gridlines
    lineIntervals: [1.25, 10, 0.25, 10, 0.25, 10, 0.25, 10, 0.25, 10],
    lineColor: 'black',
  },
  verticalGridlines: {
    // Sets the lineIntervals of Gridlines
    lineIntervals: [1.25, 10, 0.25, 10, 0.25, 10, 0.25, 10, 0.25, 10],
    lineColor: 'black',
  },
};
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '500px',
  snapSettings: snapSettings,
});
diagram.appendTo('#element');
