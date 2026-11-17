


import {
    Diagram, MeasurementUnit} from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
        width: '100%', height: '600px', rulerSettings: {
            showRulers: true,
            // Display the ruler values in inches.
            measurementUnit: 'Inch'
        },
    });
    diagram.appendTo('#element');

// Change the ruler measurement unit at runtime.
(document.getElementById('unit') as HTMLSelectElement).addEventListener('change', (args: Event) => {
    diagram.rulerSettings.measurementUnit = (args.target as HTMLSelectElement).value as MeasurementUnit;
    diagram.dataBind();
});
