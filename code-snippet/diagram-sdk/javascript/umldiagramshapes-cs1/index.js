
var diagram;

var nodes = [
  {
    id: 'Patient',
    style: {
      fill: '#26A0DA',
    },
    shape: {
      type: 'UmlClassifier',
      //Define class object
      classShape: {
        name: 'Patient',
        //Define class attributes
        attributes: [{ name: 'accepted', type: 'Date' }],
        //Define class methods
        methods: [{ name: 'getHistory', type: 'getHistory' }],
      },
      classifier: 'Class',
    },
    offsetX: 200,
    offsetY: 250,
  },
];
function createProperty(name, type) {
  return { name: name, type: type };
}
function createMethods(name, type) {
  return { name: name, type: type };
}
diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: nodes,
  },
  '#element'
);
