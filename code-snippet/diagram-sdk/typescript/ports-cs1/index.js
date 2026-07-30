var node = {
    id:'node1',
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
      style: { fill: '#6BA5D7', strokeColor: 'white' },
      // Define a port with an ID to connect a connector to it
     ports: [{id:'port1', offset : { x: 0.5, y: 0.5  }, visibility: ej.diagrams.PortVisibility.Visible }]
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

