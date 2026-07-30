import {Diagram,ConnectorModel} from '@syncfusion/ej2-diagrams';
//initialize connector collection
var collectorCollection:ConnectorModel = [
    { id: 'connector1', sourcePoint: { x: 100, y: 100 }, targetPoint: { x: 150, y: 150 } },
    {id: 'connector2', type: 'Orthogonal', sourcePoint: { x: 170, y: 170 }, targetPoint: { x: 200, y: 200 }},
    { id: 'connector3', type: 'Bezier', sourcePoint: { x: 220, y: 220 }, targetPoint: { x: 280, y: 280 } }
    
];

let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
});
diagram.appendTo('#element');

//Add collection of connectors
diagram.addElements(collectorCollection);