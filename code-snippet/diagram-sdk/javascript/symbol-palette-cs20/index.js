/**
 * Symbol palette
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

var diagram = new ej.diagrams.Diagram(
  {
    width: 1000,
    height: 500,
    dragLeave: function (args) {
      //Dragged symbol
      console.log(args.element.id);
      //customize
    },
  },
  '#diagram'
);
