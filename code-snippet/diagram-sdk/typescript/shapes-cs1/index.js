var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    //Sets type of the node
    shape: { type: 'Text', content: 'Text Element' },
    //Customizes the appearances such as text, font, fill, and stroke.
    style: { strokeColor: 'none', fill: 'none', color: 'black', textAlign: 'Center' }
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

