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

    document.getElementById('clone').onclick = () =>{
        let selectedNode = diagram.selectedItems.nodes.length > 0 ? diagram.selectedItems.nodes[0]: diagram.nodes[0];
        diagram.select([selectedNode]);
        diagram.copy();
        diagram.paste();
    }
