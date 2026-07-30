


import {
    Diagram,
    NodeModel,
    SymbolPalette,
    SymbolInfo,
    ConnectorModel,
    Connector,
    Node
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
    }],
    //Specifies the size of the symbol
    symbolHeight: 80,
    symbolWidth: 80,
    enableAnimation: false,
    //Sets the space to be left around a symbol
    symbolMargin: {
        left: 15,
        right: 15,
        top: 15,
        bottom: 15
    }
});
palette.appendTo('#element');


