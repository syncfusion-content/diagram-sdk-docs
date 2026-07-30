//Initialize the uml shapes for the symbol palette
function getUmlShapes() {
    var flowShapes = [
      {
        id: 'class',
        style: {
          fill: '#26A0DA',
        },
        borderColor: 'white',
        shape: {
          type: 'UmlClassifier',
          classShape: {
            attributes: [
              {
                name: 'accepted',
                type: 'Date',
                style: {
                  color: 'red',
                  fontFamily: 'Arial',
                  textDecoration: 'Underline',
                  italic: true,
                },
                isSeparator: true,
              },
            ],
            methods: [
              {
                name: 'getHistory',
                style: {},
                parameters: [{ name: 'Date', style: {} }],
                type: 'History',
              },
            ],
            name: 'Patient',
          },
          classifier: 'Class',
        },
      },
      {
        id: 'Interface',
        style: {
          fill: '#26A0DA',
        },
        borderColor: 'white',
        shape: {
          type: 'UmlClassifier',
          interfaceShape: {
            name: 'Bank Account',
          },
          classifier: 'Interface',
        },
      },
      {
        id: 'Enumeration',
        style: {
          fill: '#26A0DA',
        },
        borderColor: 'white',
        shape: {
          type: 'UmlClassifier',
          enumerationShape: {
            name: 'AccountType',
            members: [
              {
                name: 'Checking Account',
                style: {},
              },
            ],
          },
          classifier: 'Enumeration',
        },
      },
    ];
    return flowShapes;
  }
  function setPaletteNodeDefaults(node) {
    node.width = 100;
    node.height = 100;
  }
  var palette = new ej.diagrams.SymbolPalette({
    palettes: [
      {
        id: 'UML',
        expanded: true,
        symbols: getUmlShapes(),
        title: 'UMLClass Nodes',
      },
    ],
    width: '100%',
    height: '100%',
    symbolHeight: 90,
    symbolWidth: 90,
    getNodeDefaults: setPaletteNodeDefaults,
    //Defines the symbol description for the symbols in the palette
    getSymbolInfo: function (symbol) {
      return { fit: true, description: { text: symbol.id } };
    },
  });
  palette.appendTo('#element');
  
  var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '500px',
  });
  diagram.appendTo('#diagram');
  