/**
 * Default symbol palette sample
 */
//Initialize the basicshapes for the symbol palatte
var basicShapes = [{
        id: 'Rectangle',
        shape: {
            type: 'Basic',
            shape: 'Rectangle'
        }
    },
    {
        id: 'Ellipse',
        shape: {
            type: 'Basic',
            shape: 'Ellipse'
        }
    },
    {
        id: 'Hexagon',
        shape: {
            type: 'Basic',
            shape: 'Hexagon'
        }
    }
];
//Initializes the symbol palette
var palette = new ej.diagrams.SymbolPalette({
    expandMode: 'Multiple',
    palettes: [{
        id: 'basic',
        expanded: true,
        symbols: basicShapes,
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic'
    }],
    symbolHeight: 80,
    symbolWidth: 80,
    symbolMargin: {
        left: 15,
        right: 15,
        top: 15,
        bottom: 15
    }
});
palette.appendTo('#element');

