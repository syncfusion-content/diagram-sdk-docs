var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
     style: { fill: '#6BA5D7', strokeColor: 'white' },
     };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node],
    selectedItems : {handleSize : 40}
    }, '#element');

