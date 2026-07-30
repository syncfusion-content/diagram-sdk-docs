/**
 * Default symbol palette sample
 */
//Initialize the basicshapes for the symbol palatte
var basicShapes = [
    {
      id: 'Rectangle',
      shape: {
        type: 'Basic',
        shape: 'Rectangle',
      },
      tooltip: {
        content: 'Rectangle Tooltip',
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
  //Initializes the symbol palette
  var palette = new ej.diagrams.SymbolPalette({
    expandMode: 'Multiple',
    palettes: [
      {
        id: 'basic',
        symbols: basicShapes,
        title: 'Basic Shapes',
      },
    ],
    symbolHeight: 40,
    symbolWidth: 40,
    symbolPreview: {
      height: 100,
      width: 100,
      offset: {
        x: 0.5,
        y: 0.5,
      },
    },
  });
  palette.appendTo('#element');
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: 1000,
      height: 500,
    },
    '#diagram'
  );
  