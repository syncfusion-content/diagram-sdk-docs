var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: true,
    style: { fill: '#6AA8D7', strokeColor: 'white',strokeWidth:5 , strokeDashArray:'3',opacity:0.7},
    // Text(label) added to the node
        };
    
        var node2 = {
            // Position of the node
            offsetX: 450,
            offsetY: 250,
            // Size of the node
            width: 100,
            height: 100,
            visible: false,
            style: { fill: '#6AA8D7', strokeColor: 'white',strokeWidth:5 , strokeDashArray:'3',opacity:0.7},
            // Text(label) added to the node
                };
// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node,node2]
    }, '#element');

