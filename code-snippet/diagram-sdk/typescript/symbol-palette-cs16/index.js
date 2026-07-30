/**
 * Default symbol palette sample
 */
//Initialize the flowshapes for the symbol palatte
var flowshapes = [{
        id: 'process',
        shape: {
            type: 'Flow',
            shape: 'Process'
        }
    },
    {
        id: 'document',
        shape: {
            type: 'Flow',
            shape: 'Document'
        }
    },
    {
        id: 'predefinedprocess',
        shape: {
            type: 'Flow',
            shape: 'PreDefinedProcess'
        }
    }
];
function setPaletteNodeDefaults(node) {
    node.width = 100;
    node.height = 100;
    node.style.strokeColor = '#3A3A3A';
}
var palette = new ej.diagrams.SymbolPalette({
    expandMode: 'Multiple',
    palettes: [{
        id: 'flow',
        expanded: true,
        symbols: flowshapes,
        title: 'Flow Shapes'
    }, ],
    symbolPreview: {
        height: 100,
        width: 100,
        offset: {
            x: 0.5,
            y: 0.5
        }
    },
    symbolMargin: {
        left: 12,
        right: 12,
        top: 12,
        bottom: 12
    },
    enableSearch: true,
    getNodeDefaults: setPaletteNodeDefaults,
    getSymbolInfo: (symbol) => {
        return {
            fit: true
        };
    }
});

palette.appendTo('#element');

