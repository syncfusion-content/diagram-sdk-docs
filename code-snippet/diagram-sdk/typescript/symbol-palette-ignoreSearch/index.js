/**
 * Default symbol palette sample
 */

//Initialize the basic shapes for the symbol palette
function getBasicShapes() {
  let nodes = [
    {
      id: 'rectangle',
      shape: {
        type: 'Basic',
        shape: 'Rectangle',
      },
    },
    {
      id: 'plus',
      shape: {
        type: 'Basic',
        shape: 'Plus',
      },
    },
    {
      id: 'triangle',
      shape: {
        type: 'Basic',
        shape: 'RightTriangle',
      },
    },
  ];
  return nodes;
}

var palette = new ej.diagrams.SymbolPalette({
  enableSearch: true,
  //The plus symbol will be ignored while searching shapes
  ignoreSymbolsOnSearch: ['plus'],
  palettes: [
    {
      id: 'basic',
      symbols: getBasicShapes(),
      title: 'Basic Shapes',
    },
  ],
});

palette.appendTo('#element');
