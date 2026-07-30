import { Diagram, NodeModel, SymbolPalette } from '@syncfusion/ej2-diagrams';

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
  // Defines the size of the shape while dragging it from the palette to the diagram canvas
  symbolDragSize: { height: 30, width: 40 },
  palettes: [
    {
      id: 'basic',
      symbols: getBasicShapes(),
      title: 'Basic Shapes',
    },
  ],
});
palette.appendTo('#element');

let diagram = new Diagram(
  {
    width: 1000,
    height: 500,
  },
  '#diagram'
);
