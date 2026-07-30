import {
  NodeModel,
  SymbolPalette,
  Diagram,
  IDropEventArgs,
  NodeConstraints,
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
});
palette.appendTo('#element');
let diagram: Diagram = new Diagram(
  {
    width: 1000,
    height: 500,
    drop: function (args: IDropEventArgs) {
      //Dropped symbol
      args.element.style.fill = 'yellow';
      diagram.dataBind();
      //customize
    },
  },
  '#diagram'
);
