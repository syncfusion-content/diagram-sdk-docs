var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
     annotations: [{ content: 'Left', offset: { x: 0.12, y: 0.1 }},
    { content: 'Center', offset: { x: 0.5, y: 0.5 } },
    { content: 'Right', offset: { x: 0.82, y: 0.9 } }]
};

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

