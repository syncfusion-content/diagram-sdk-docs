var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    shape: {
         type: 'Bpmn', shape: 'Event',
         event: { event: 'End' }
    },
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px'
    }, '#element');

diagram.add(node);

