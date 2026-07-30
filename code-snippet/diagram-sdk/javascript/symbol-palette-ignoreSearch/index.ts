import { NodeModel, SymbolPalette } from '@syncfusion/ej2-diagrams';

//Initialize the basic shapes for the symbol palette
function getBasicShapes(): NodeModel[] {
  let nodes: NodeModel[] = [
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
//Initializes the symbol palette
let palette: SymbolPalette = new SymbolPalette({
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
