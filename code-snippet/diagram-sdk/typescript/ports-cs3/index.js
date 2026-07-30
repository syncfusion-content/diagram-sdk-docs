var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
 style: { fill: '#6BA5D7', strokeColor: 'white' },
    ports: [{ id: 'port1', offset : { x: 0, y: 0.5  }, visibility: ej.diagrams.PortVisibility.Visible},
    { id: 'port2', offset : { x: 1, y: 0.5  }, visibility: ej.diagrams.PortVisibility.Visible},
    { id: 'port3', offset : { x: 0.5, y: 0  }, visibility: ej.diagrams.PortVisibility.Visible},
    { id: 'port4', offset : { x: 0.5, y: 1  }, visibility: ej.diagrams.PortVisibility.Visible}]
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px',
    nodes: [node],
    }, '#element');


document.getElementById('removePorts').onclick = () =>{
    // Method to remove ports from a node at runtime
    // Parameters:
    // - node: The node from which the ports will be removed.
    // - ports: The collection of ports to be removed from the node.
    diagram.removePorts(diagram.nodes[0], diagram.nodes[0].ports);
}

