


import {
    Diagram,
    NodeModel,
    SymbolPalette,
    SymbolInfo
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
    width: '100%', height: '500px'
});
diagram.appendTo('#diagram');
//Initialize the basicshapes for the symbol palette
export function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
        { id: 'Rectangle', shape: { type: 'Basic', shape: 'Rectangle' }, style: { strokeWidth: 2 } },
        { id: 'Ellipse', shape: { type: 'Basic', shape: 'Ellipse' }, style: { strokeWidth: 2 }},
        { id: 'Hexagon', shape: { type: 'Basic', shape: 'Hexagon' }, style: { strokeWidth: 2 }},
    ];
    return basicShapes;
}
//Initialize the flowshapes for the symbol palette
export function getFlowShapes(): NodeModel[] {
    let flowShapes: NodeModel[] = [
        { id: 'Process', shape: { type: 'Flow', shape: 'Process' }, style: { strokeWidth: 2 }},
        { id: 'Document', shape: { type: 'Flow', shape: 'Document' }, style: { strokeWidth: 2 }},
    ];
    return flowShapes;
}
let palette: SymbolPalette = new SymbolPalette({
    expandMode: 'Multiple',
    palettes: [
        { id: 'flow', expanded: true, symbols: getFlowShapes(), title: 'Flow Shapes' },
        { id: 'basic', expanded: true, symbols: getBasicShapes(), title: 'Basic Shapes' },
    ],
    width: '100%', height: '100%', symbolHeight: 80, symbolWidth: 80,
    //Defines the symbol description for the symbols in the palette
    getSymbolInfo: (symbol: NodeModel): SymbolInfo => {
        return { width: 75, height: 40, description: { text: symbol.shape['shape'], color : 'red', bold: true, fontSize: 15, fontFamily : 'Arial', italic : true, textDecoration : 'Underline', margin : {top : 30, left : 0, right : 0, bottom :30}} };
    }
});
palette.appendTo('#element');



