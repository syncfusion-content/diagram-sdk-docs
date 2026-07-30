var diagram;

var node = {
  id: 'node',
  offsetX: 300,
  offsetY: 200,
  style: {
    fill: '#26A0DA',
  },
  shape: {
    type: 'UmlClassifier',
    //Define enumeration object
    enumerationShape: {
      name: 'AccountType',
      //set the members of enumeration
      members: [
        {
          name: 'Checking Account',
        },
        {
          name: 'Savings Account',
        },
        {
          name: 'Credit Account',
        },
      ],
    },
    classifier: 'Enumeration',
  },
};
diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: [node],
  },
  '#element'
);
