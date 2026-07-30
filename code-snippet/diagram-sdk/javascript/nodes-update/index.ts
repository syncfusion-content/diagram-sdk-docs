


import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
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
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized Diagram
diagram.appendTo('#element');

(document.getElementById('color') as HTMLInputElement).onclick = () =>{
    diagram.nodes[0].style.fill = 'orange';
    diagram.dataBind();
}
(document.getElementById('size') as HTMLInputElement).onclick = () =>{
    diagram.nodes[0].width = 200;
    diagram.dataBind();
}

