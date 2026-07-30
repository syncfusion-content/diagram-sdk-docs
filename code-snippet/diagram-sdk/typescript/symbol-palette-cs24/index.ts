import {
  NodeModel,
  SymbolPalette,
  Diagram,
  IPaletteSelectionChangeArgs,
} from '@syncfusion/ej2-diagrams';

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
  palettes: [
    {
      id: 'basic',
      symbols: getBasicShapes(),
      title: 'Basic Shapes',
    },
  ],
  symbolHeight: 50,
  symbolWidth: 70,
  paletteSelectionChange: function (args: IPaletteSelectionChangeArgs) {
    //The selected symbol
    console.log(args.newValue);
  },
});
palette.appendTo('#element');
