import { Diagram, NodeModel, SymbolPalette } from '@syncfusion/ej2-diagrams';
//Initialize the basicshapes for the symbol palette
function getBasicShapes(): NodeModel[] {
  let basicShapes: NodeModel[] = [
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
  symbolHeight: 40,
  symbolWidth: 40,
  //Specifies the preview size and position to symbol palette items.
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
//Initialize diagram
let diagram = new Diagram(
  {
    width: 1000,
    height: 500,
  },
  '#diagram'
);
