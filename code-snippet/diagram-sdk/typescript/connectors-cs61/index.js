//initialize connector collection
var collectorCollection = [
    { id: 'connector1', sourcePoint: { x: 100, y: 100 }, targetPoint: { x: 150, y: 150 } },
    {id: 'connector2', type: 'Orthogonal', sourcePoint: { x: 170, y: 170 }, targetPoint: { x: 200, y: 200 }},
    { id: 'connector3', type: 'Bezier', sourcePoint: { x: 220, y: 220 }, targetPoint: { x: 280, y: 280 } }
];
var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
}, '#element');

diagram.appendTo('#element');
//Add collection of connectors
diagram.addElements(collectorCollection);