/**
 * Symbol palette Animation
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
    //Enables/Disables animation
    enableAnimation: true,
  });
  
  palette.appendTo('#element');
  
  document.getElementById('enableAnimation').onclick = (args) => {
    if (args.target.checked) {
      palette.enableAnimation = true;
    } else {
      palette.enableAnimation = false;
    }
    palette.refresh();
  };
  