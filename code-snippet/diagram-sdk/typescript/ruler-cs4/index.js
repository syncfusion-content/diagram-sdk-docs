var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', 
        rulerSettings: {
            showRulers: true,
            // Display the ruler values in inches.
            measurementUnit: 'Inch'
        },
});
diagram.appendTo('#element');

// Change the ruler measurement unit at runtime.
document.getElementById('unit').addEventListener('change', function (args) {
    diagram.rulerSettings.measurementUnit = args.target.value;
    diagram.dataBind();
});
