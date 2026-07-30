var snapSettings = {
    // Define the Constraints for gridlines and snapping
    constraints: ej.diagrams.SnapConstraints.ShowLines,
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
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '700px',
      snapSettings: snapSettings,
    },
    '#element'
  );
  