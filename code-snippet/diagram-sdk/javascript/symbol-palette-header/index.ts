import { NodeModel, SymbolPalette } from '@syncfusion/ej2-diagrams';
//Initialize the basicshapes for the symbol palette
function getBasicShapes(): NodeModel[] {
  let basicShapes: NodeModel[] = [
    {
      id: 'Rectangle',
      height: 50,
      width: 60,
      shape: {
        type: 'Basic',
        shape: 'Rectangle',
      },
    },
    {
      id: 'Ellipse',
      height: 50,
      width: 60,
      shape: {
        type: 'Basic',
        shape: 'Ellipse',
      },
    },
    {
      id: 'Hexagon',
      height: 50,
      width: 60,
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
  expandMode: 'Multiple',
  palettes: [
    {
      id: 'basic',
      // Defines the height of the palette
      height: 150,
      // Defines whether the palette is expanded or not
      expanded: true,
      symbols: getBasicShapes(),
      // Defines the title of the palette
      title: 'Basic Shapes',
      // Defines the icon for the palette title
      iconCss: 'e-ddb-icons e-basic',
    },
  ],
});
palette.appendTo('#element');
