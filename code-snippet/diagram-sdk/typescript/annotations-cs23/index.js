var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    sstyle: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [{ content: 'Annotation' }]
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

diagram.nodes[0].annotations[0].content = 'Updated Annotation';
diagram.dataBind();

