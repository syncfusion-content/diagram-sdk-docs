var nodes = [
    {
        id: 'Start', width: 140, height: 50, offsetX: 300, offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
	    shape: { type: 'Flow', shape: 'Terminator'},
         //To define the shape of the node
	    shape: { type: 'Flow', shape: 'Terminator'},
        //To define border style for the node.
        borderColor:'orange',borderWidth:10,
        //To define style for the node.
        style:{fill:'red',strokeColor:'green',strokeWidth:5,strokeDashArray:'2 2'}
    }
];

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes
    }, '#element');

