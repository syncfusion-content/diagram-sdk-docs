import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
};
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px'
});
// render initialized diagram
diagram.appendTo('#element');

(document.getElementById('addNode') as HTMLInputElement).onclick = function() {
    diagram.add(node);
};
(document.getElementById('deleteNode') as HTMLInputElement).onclick = function() {
    diagram.remove(diagram.nodes[0]);
};



