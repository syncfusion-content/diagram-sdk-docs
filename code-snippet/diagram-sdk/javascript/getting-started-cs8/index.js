var nodes = [
    {
        id: 'Start', width: 140, height: 50, offsetX: 300, offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
	    shape: { type: 'Flow', shape: 'Terminator'}
    },
    {
        id: 'Init', width: 140, height: 50, offsetX: 300, offsetY: 140,
        shape: { type: 'Flow', shape: 'process' },
        annotations: [{ content: 'var i = 0;' }]
    }
];

var connector = {
	id: "connector1",
	sourceID: "Start",
	targetID: "Init",
    type: 'Orthogonal'
};


var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '350px', nodes: nodes, connectors: [connector]
    }, '#element');

