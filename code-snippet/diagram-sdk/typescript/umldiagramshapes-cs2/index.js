/**
 * Tooltip sample
 */

var node = {
    id: 'node',
    offsetX: 400,
    offsetY: 300,
    style: {
      fill: '#26A0DA',
    },
    shape: {
      type: 'UmlClassifier',
      //Define interface object
      interfaceShape: {
        name: 'Patient',
        //Define interface attributes
        attributes: [{ name: 'owner', type: 'String[*]' }],
        //Define interface methods
        methods: [
          {
            name: 'deposit',
            parameters: [
              {
                name: 'amount',
                type: 'Dollars',
              },
            ],
          },
        ],
      },
      classifier: 'Interface',
    },
  };
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: [node],
    },
    '#element'
  );
  