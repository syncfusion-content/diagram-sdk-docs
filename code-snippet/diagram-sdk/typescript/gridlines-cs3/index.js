var snapSettings = {
    constraints: (ej.diagrams.SnapConstraints.ShowLines),
    horizontalGridlines: { lineIntervals:[1.25, 14, 0.25, 15, 0.25, 15, 0.25, 15, 0.25, 15],lineColor: 'blue', lineDashArray: '2 2' },
    verticalGridlines: { lineIntervals:[1.25, 14, 0.25, 15, 0.25, 15, 0.25, 15, 0.25, 15],lineColor: 'blue', lineDashArray: '2 2' }
};
var diagram = new ej.diagrams.Diagram({
    width: '800px', height: '500px', 
    snapSettings: snapSettings
},'#element');

