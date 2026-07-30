var connector = {
    
    sourcePoint: { x: 100, y: 100 }, targetPoint: { x: 300, y: 100 }, type: 'Orthogonal',
    shape: {
type: 'Bpmn',
flow: 'Association',
association: 'BiDirectional'
}, 
        };
var connector2 = {
    
    sourcePoint: { x: 100, y: 200 }, targetPoint: { x: 300, y: 200 }, type: 'Orthogonal',
    shape: {
type: 'Bpmn',
flow: 'Association',
association: 'Directional'
}, 
        };
var connector3 = {
    
    sourcePoint: { x: 100, y: 300 }, targetPoint: { x: 300, y: 300 }, type: 'Orthogonal',
    shape: {
type: 'Bpmn',
flow: 'Association',
association: 'Default'
}, 
        };
// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', connectors: [connector,connector2,connector3]
    }, '#element');

