/**
 * Symbol palette tooltip
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
        // Defines the tooltip for the shape
        tooltip: { content: 'Rectangle Basic shape', relativeMode: 'Object' },
        constraints:
          ej.diagrams.NodeConstraints.Default |
          ej.diagrams.NodeConstraints.Tooltip,
      },
      {
        id: 'plus',
        shape: {
          type: 'Basic',
          shape: 'Plus',
        },
        // Defines the tooltip for the shape
        tooltip: { content: 'Plus Basic shape', relativeMode: 'Object' },
        constraints:
          ej.diagrams.NodeConstraints.Default |
          ej.diagrams.NodeConstraints.Tooltip,
      },
      {
        id: 'triangle',
        shape: {
          type: 'Basic',
          shape: 'RightTriangle',
        },
        // Defines the tooltip for the shape
        tooltip: { content: 'RightTriangle Basic shape', relativeMode: 'Object' },
        constraints:
          ej.diagrams.NodeConstraints.Default |
          ej.diagrams.NodeConstraints.Tooltip,
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
  });
  
  palette.appendTo('#element');
  var diagram = new ej.diagrams.Diagram(
    {
      width: 1000,
      height: 500,
      dragEnter: function (args) {
        let node = args.element;
        node.tooltip.content = 'New ' + node.id + ' tooltip';
        diagram.dataBind();
      },
    },
    '#diagram'
  );
  