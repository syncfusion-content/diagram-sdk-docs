import {
    NodeConstraints,
    NodeModel,
    SymbolPalette,
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
        // Defines the tooltip for the shape
        tooltip: { content: 'Rectangle Basic shape', relativeMode: 'Object' },
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
      },
      {
        id: 'plus',
        shape: {
          type: 'Basic',
          shape: 'Plus',
        },
        // Defines the tooltip for the shape
        tooltip: { content: 'Plus Basic shape', relativeMode: 'Object' },
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
      },
      {
        id: 'triangle',
        shape: {
          type: 'Basic',
          shape: 'RightTriangle',
        },
        // Defines the tooltip for the shape
        tooltip: { content: 'RightTriangle Basic shape', relativeMode: 'Object' },
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
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
  });
  palette.appendTo('#element');
  