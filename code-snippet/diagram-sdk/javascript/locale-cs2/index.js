/**
 * Locale symbol palette sample
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

// Set the default culture to German
ej.base.setCulture('de')

// Load locale text for the SearchShapes
 ej.base.L10n.load({
        'de-DE': {
            SymbolPalette: {
                'SearchShapes':'Formen suchen',
            }
        }
    });

//Initializes the symbol palette
var palette = new ej.diagrams.SymbolPalette({
    expandMode: 'Multiple',
    locale:'de-DE',
    enableSearch: true,
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

