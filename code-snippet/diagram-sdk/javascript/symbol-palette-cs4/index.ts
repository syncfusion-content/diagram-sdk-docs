


import {
    Diagram,
    NodeModel,
    SymbolPalette,
    SymbolInfo
} from '@syncfusion/ej2-diagrams';
//Initialize the basicshapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [{
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
        },
    ];
    return basicShapes;
}
//Initializes the symbol palette
let palette: SymbolPalette = new SymbolPalette({
    expandMode: 'Multiple',
    palettes: [{
        id: 'basic',
        expanded: true,
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
        iconCss: 'e-ddb-icons e-basic'
    }, ],
    symbolHeight: 80,
    symbolWidth: 80,
    enableAnimation: false,
    //Sets the size, appearance, and description of a symbol
    getSymbolInfo: function(symbol) {
        // Enables to fit the content into the specified palette item size
        return {
            fit: true
        };
        // When it is set as false, the element is rendered with actual node size
    },
});
palette.appendTo('#element');


