var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
 style: { fill: '#6BA5D7', strokeColor: 'white' },
    constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Shadow,
    shadow: {angle: 50, opacity: 0.8, distance: 9}
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

