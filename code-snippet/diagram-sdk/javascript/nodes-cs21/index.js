//initialize node collection 
var nodesCollection = [
    { id: 'node16', offsetX: 35, offsetY: 260 },
    { id: 'node17', offsetX: 140, offsetY: 260 },
    { id: 'node18', offsetX: 240, offsetY: 260 }
];

// initialize Diagram component
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px'
    }, '#element');
//Add collection of nodes
diagram.addElements(nodesCollection);
