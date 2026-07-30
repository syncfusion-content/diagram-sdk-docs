/**
 * Symbol description wrapping
 */
//Initialize the basicshapes for the symbol palatte
function getBasicShapes() {
  var basicShapes = [
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
var palette = new ej.diagrams.SymbolPalette({
  expandMode: 'Multiple',
  palettes: [
    {
      id: 'basic',
      symbols: getBasicShapes(),
      title: 'Basic Shapes',
    },
  ],
  //Sets the description of a symbol
  getSymbolInfo: (symbol) => {
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
