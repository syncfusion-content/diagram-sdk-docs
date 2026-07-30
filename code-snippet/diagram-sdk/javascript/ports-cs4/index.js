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
    width: '100%', height: '600px'
    }, '#element');

diagram.add(node);


document.getElementById('updatePortOffset').onclick = () =>{
    let port1 = diagram.nodes[0].ports[0];
    port1.offset = {x:1,y:1};
    diagram.dataBind();
}
