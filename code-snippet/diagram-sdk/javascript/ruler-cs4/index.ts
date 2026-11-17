


import {
    Diagram} from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
        width: '100%', height: '600px', rulerSettings: {
            showRulers: true,
            // Display the ruler values in inches.
            measurementUnit: 'Inch'
        },
    });
    diagram.appendTo('#element');



