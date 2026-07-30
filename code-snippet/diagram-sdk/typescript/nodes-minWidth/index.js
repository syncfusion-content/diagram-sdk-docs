var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: true,
    minWidth:50,
    minHeight:50,
    maxWidth:200,
    maxHeight:200,
    style: { fill: '#6AA8D7'},
    // Text(label) added to the node
        };
    

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

