var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: true,
    borderColor:'green',
    borderWidth:5,
    backgroundColor:'yellow',
    style:{fill:'transparent',strokeColor:'transparent'}
    // Text(label) added to the node
        };
    

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

