


import {Diagram,SnapConstraints,SnapSettingsModel,Snapping} from '@syncfusion/ej2-diagrams';
Diagram.Inject(Snapping);
let snapSettings: SnapSettingsModel = {
    // Define the Constraints for gridlines and snapping
    constraints: SnapConstraints.ShowLines,
    // Defines the horizontalGridlines for SnapSettings
    horizontalGridlines: {
        // Sets the line color of gridlines
        lineColor: 'blue',
        // Defines the lineDashArray of gridlines
        lineDashArray: '2 2'
    },
    // Defines the verticalGridlines for SnapSettings
    verticalGridlines: {
        lineColor: 'blue',
        lineDashArray: '2 2'
    }
};
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '500px',
    // Define the snap setting for the diagram
    snapSettings: snapSettings
});
diagram.appendTo('#element');



