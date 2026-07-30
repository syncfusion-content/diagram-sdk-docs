import {
    NodeModel,
    SymbolPalette,
    SymbolInfo,
    Node,
    Connector,
  } from '@syncfusion/ej2-diagrams';
  //Initialize the basicshapes for the symbol palette
  function getBasicShapes(): NodeModel[] {
    let basicShapes: NodeModel[] = [
      {
        id: 'Rectangle',
        shape: {
          type: 'Basic',
          shape: 'Rectangle',
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
    //Sets the description of a symbol
    getSymbolInfo: (symbol: Node | Connector): SymbolInfo => {
      return {
        width: 50,
        height: 50,
        description: {
          //Defines the description text for the symbol
          text: symbol.id,
        },
      };
    },
  });
  palette.appendTo('#element');
  