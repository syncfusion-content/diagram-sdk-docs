import {
  NodeModel,
  SymbolPalette,
  SymbolInfo,
  Node,
  Connector,
} from '@syncfusion/ej2-diagrams';
//Initialize the basicshapes for the symbol palette
function getBasicShapes(): NodeModel[] {
  let basicShapes: NodeModel[] = [
    {
      id: 'Rectangle-symbol',
      shape: {
        type: 'Basic',
        shape: 'Rectangle',
      },
    },
    {
      id: 'Ellipse-symbol',
      shape: {
        type: 'Basic',
        shape: 'Ellipse',
      },
    },
    {
      id: 'Hexagon-symbol',
      shape: {
        type: 'Basic',
        shape: 'Hexagon',
      },
    },
  ];
  return basicShapes;
}
//Initializes the symbol palette
let palette: SymbolPalette = new SymbolPalette({
  palettes: [
    {
      id: 'basic',
      symbols: getBasicShapes(),
      title: 'Basic Shapes',
    },
  ],
  //Sets the description of a symbol
  getSymbolInfo: (symbol: Node | Connector): SymbolInfo => {
    return {
      width: 50,
      height: 50,
      description: {
        //Defines the description text for the symbol
        text: symbol.id,
        //Defines the text wrapping based on symbol id
        wrap:
          symbol.id === 'Rectangle-symbol' || symbol.id === 'Ellipse-symbol'
            ? 'NoWrap'
            : 'WrapWithOverflow',
        //Defines the text overflow based on symbol id
        overflow:
          symbol.id === 'Rectangle-symbol'
            ? 'Ellipsis'
            : symbol.id === 'Ellipse-symbol'
            ? 'Clip'
            : 'Clip',
      },
    };
  },
});
palette.appendTo('#element');
