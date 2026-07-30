var nodes = [
    {
        id:'node1',
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        zIndex:2,
        annotations:[{content:'Node1'}]
    },
    {
        id:'node2',
        // Position of the node
        offsetX: 270,
        offsetY: 270,
        // Size of the node
        width: 100,
        height: 100,
        zIndex:1,
        annotations:[{content:'Node2'}]
    },
    ]
    

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes
    }, '#element');

