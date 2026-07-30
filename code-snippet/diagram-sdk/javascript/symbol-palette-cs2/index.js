/**
 * Symbol description
 */
//Initialize the basicshapes for the symbol palatte
function getBasicShapes() {
    var basicShapes = [
      {
        id: 'Rectangle',
        shape: {
          type: 'Basic',
          shape: 'Rectangle',
        },
      },
      {
        id: 'Ellipse',
        shape: {
          type: 'Basic',
          shape: 'Ellipse',
        },
      },
      {
        id: 'Hexagon',
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
        },
      };
    },
  });
  palette.appendTo('#element');
  