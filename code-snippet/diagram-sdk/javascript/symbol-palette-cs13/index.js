/**
 * Symbol palette Filter search
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
  //Initialize the flow shapes for the symbol palette
  function getFlowShapes() {
    let nodes = [
      {
        id: 'process',
        shape: {
          type: 'Flow',
          shape: 'Process',
        },
      },
      {
        id: 'terminator',
        shape: {
          type: 'Flow',
          shape: 'Terminator',
        },
      },
      {
        id: 'decision',
        shape: {
          type: 'Flow',
          shape: 'Decision',
        },
      },
      {
        id: 'document',
        shape: {
          type: 'Flow',
          shape: 'Document',
        },
      },
      {
        id: 'data',
        shape: {
          type: 'Flow',
          shape: 'Data',
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
      {
        id: 'flow',
        symbols: getFlowShapes(),
        title: 'Flow Shapes',
      },
    ],
    symbolHeight: 50,
    symbolWidth: 70,
    enableSearch: true,
    filterSymbols: function (symbols) {
      let symbolGroup = [];
      for (let i = 0; i < symbols.length; i++) {
        let symbol = symbols[i];
        //Filters symbol based on type
        if (symbol.shape.type === 'Flow') {
          symbolGroup.push(symbol);
        }
      }
      return symbolGroup;
    },
  });
  
  palette.appendTo('#element');
  