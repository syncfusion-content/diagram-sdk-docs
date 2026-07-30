
var diagram;

var connector = {
     id: "connector",
    sourcePoint: { x: 100, y: 100 },
    targetPoint: { x: 300, y: 300 },
    type: "Straight",
    shape: {
      type: "UmlClassifier",
      relationship: "Dependency"
    }
};
diagram = new ej.diagrams.Diagram({
    width: '650px',
    height: '350px',
    connectors: [connector],
}, '#element');

