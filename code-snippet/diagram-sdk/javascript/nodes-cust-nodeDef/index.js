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
        annotations:[{content:'Node1'}],
        style:{fill:'white',strokeColor:'black'}

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
        annotations:[{content:'Node2'}],
        style:{fill:'white',strokeColor:'black'}
    },
    ];
    

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes,
    getNodeDefaults:function(obj){
        obj.style = {fill:'yellow',strokeColor:'green',strokeWidth:3}
    },
    }, '#element');

