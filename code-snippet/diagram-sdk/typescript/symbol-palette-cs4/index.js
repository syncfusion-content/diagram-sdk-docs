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
    getSymbolInfo: function(symbol) {
        // Enables to fit the content into the specified palette item size
        return {
            fit: true
        };
        // When it is set as false, the element is rendered with actual node size
    },
});
palette.appendTo('#element');

