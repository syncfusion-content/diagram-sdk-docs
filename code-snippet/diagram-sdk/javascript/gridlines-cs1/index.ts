


import {Diagram, SnapConstraints,SnapSettingsModel,Snapping} from '@syncfusion/ej2-diagrams';
Diagram.Inject(Snapping);
let snapSettings: SnapSettingsModel = {
    // Display both Horizontal and Vertical gridlines
    constraints:  SnapConstraints.ShowLines  };
let diagram: Diagram = new Diagram({
    width: '100%', height: '500px',
    snapSettings: snapSettings
});
diagram.appendTo('#element');



