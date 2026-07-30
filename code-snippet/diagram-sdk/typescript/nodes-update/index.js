var node =  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: true,
    style: { fill: '#6AA8D7',strokeWidth:1},
    // Text(label) added to the node
};

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');

    document.getElementById('color').onclick = () =>{
        diagram.nodes[0].style.fill = 'orange';
        diagram.dataBind();
    }

    document.getElementById('size').onclick = () =>{
        diagram.nodes[0].width = 200;
        diagram.dataBind();
    }