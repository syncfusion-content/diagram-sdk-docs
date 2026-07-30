import {
  NodeModel,
  SymbolPalette,
  Diagram,
  IPaletteExpandArgs,
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
  paletteExpanding: function (args: IPaletteExpandArgs) {
    if (args.isExpanded) {
      alert('Palette expanded');
    } else {
      alert('Palette collapsed');
    }
  },
});
palette.appendTo('#element');
