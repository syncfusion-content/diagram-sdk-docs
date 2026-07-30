var node = {
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
   style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [{ content: 'Annotation Text Wrapping',style: { textWrapping:'Wrap' } }]
        };


var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

