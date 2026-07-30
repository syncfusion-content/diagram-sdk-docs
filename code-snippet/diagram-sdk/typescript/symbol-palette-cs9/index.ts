import {
    NodeModel,
    SymbolPalette,
    SymbolInfo,
    Node,
    Connector,
  } from '@syncfusion/ej2-diagrams';
  //Initialize the flow shapes for the symbol palette
  function getFlowShapes(): NodeModel[] {
    let flowShapes: NodeModel[] = [
      {
        id: 'Process',
        shape: { type: 'Flow', shape: 'Process' },
        style: { strokeWidth: 2 },
      },
      {
        id: 'Document',
        shape: { type: 'Flow', shape: 'Document' },
        style: { strokeWidth: 2 },
      },
    ];
    return flowShapes;
  }
  //Initialize the basic shapes for the symbol palette
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
      {
        id: 'flow',
        symbols: getFlowShapes(),
        title: 'Flow Shapes',
      },
    ],
    //Description appearance customization of a symbol
    getSymbolInfo: (symbol: Node | Connector): SymbolInfo => {
      return {
        width: 100,
        height: 50,
        description: {
          // Defines the description text for the symbol
          text: symbol.id,
          // Defines the margin between the symbol and text
          margin: { top: 20, bottom: 10 },
          // Defines the background color of the text
          fill: 'green',
          // Defines the font family of the text
          fontFamily: 'Calibri',
          // Defines the font size of the text
          fontSize: 15,
          // Defines if the text is bold
          bold: true,
          // Defines if the text is italic
          italic: true,
          // Defines the text decoration
          textDecoration: 'Underline',
          // Defines the color of the text
          color: 'white',
        },
      };
    },
  });
  palette.appendTo('#element');
  