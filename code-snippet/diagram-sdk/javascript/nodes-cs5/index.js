var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible:true,
    style: { fill: '#6BA5D7',  strokeDashArray: '5,5',opacity:0.5}, borderWidth: 2, borderColor: 'red',
    // Text(label) added to the node
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

