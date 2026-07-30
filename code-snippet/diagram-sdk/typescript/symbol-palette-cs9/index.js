//Initialize the basicshapes for the symbol palette
function getBasicShapes() {
    var basicShapes = [
      {
        id: 'Rectangle',
        shape: { type: 'Basic', shape: 'Rectangle' },
        style: { strokeWidth: 2 },
      },
      {
        id: 'Ellipse',
        shape: { type: 'Basic', shape: 'Ellipse' },
        style: { strokeWidth: 2 },
      },
      {
        id: 'Hexagon',
        shape: { type: 'Basic', shape: 'Hexagon' },
        style: { strokeWidth: 2 },
      },
    ];
    return basicShapes;
  }
  //Initialize the flowshapes for the symbol palette
  function getFlowShapes() {
    var flowShapes = [
      {
        id: 'Process',
        shape: { type: 'Flow', shape: 'Process' },
        style: { strokeWidth: 2 },
      },
      {
        id: 'Document',
        shape: { type: 'Flow', shape: 'Document' },
        style: { strokeWidth: 2 },
      },
    ];
    return flowShapes;
  }
  var palette = new ej.diagrams.SymbolPalette({
    expandMode: 'Multiple',
    palettes: [
      {
        id: 'flow',
        expanded: true,
        symbols: getFlowShapes(),
        title: 'Flow Shapes',
      },
      {
        id: 'basic',
        expanded: true,
        symbols: getBasicShapes(),
        title: 'Basic Shapes',
      },
    ],
    width: '100%',
    height: '100%',
    //Defines the symbol description for the symbols in the palette
    getSymbolInfo: function (symbol) {
      return {
        width: 100,
        height: 50,
        description: {
          // Defines the description text for the symbol
          text: symbol.id,
          // Defines the margin between the symbol and text
          margin: { top: 20, bottom: 10 },
          // Defines the background color of the text
          fill: 'green',
          // Defines the font family of the text
          fontFamily: 'Calibri',
          // Defines the font size of the text
          fontSize: 15,
          // Defines if the text is bold
          bold: true,
          // Defines if the text is italic
          italic: true,
          // Defines the text decoration
          textDecoration: 'Underline',
          // Defines the color of the text
          color: 'white',
        },
      };
    },
  });
  palette.appendTo('#element');
  