var snapSettings = {
    constraints: (ej.diagrams.SnapConstraints.ShowLines),
    horizontalGridlines: {
        lineColor: 'blue',
        lineDashArray: '2 2'
    },
    verticalGridlines: {
        lineColor: 'blue',
        lineDashArray: '2 2'
    }
};
var diagram = new ej.diagrams.Diagram({
    width: '800px',
    height: '500px',
    snapSettings: snapSettings
}, '#element');

