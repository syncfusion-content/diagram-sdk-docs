var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: true,
     //Sets the rotation angle of the node
     rotateAngle:45,
     //Sets the corner radius of the node
     shape:{cornerRadius:15}
    // Text(label) added to the node
        };
    

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

