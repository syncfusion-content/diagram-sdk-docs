import {
  NodeModel,
  SymbolPalette,
  Diagram,
  IDragOverEventArgs,
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
    getNodeDefaults: function (node: NodeModel) {
      node.constraints = NodeConstraints.Default | NodeConstraints.AllowDrop;
    },
    dragOver: function (args: IDragOverEventArgs) {

      if (args.target) {
        //Target shape id
        console.log(args.target.id);
      }
      //Dragged symbol
      console.log(args.element.id);
      //customize
    },
  },
  '#diagram'
);
