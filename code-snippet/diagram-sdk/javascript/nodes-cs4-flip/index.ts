


import { Diagram, NodeModel ,BasicShapeModel, FlipDirection} from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Flip the node in Horizontal Direction
    flip: FlipDirection.Horizontal,
    shape: {
        type: 'Basic',
        shape: 'RightTriangle',
    },
    style: {
        fill: '#6BA5D7',
        strokeDashArray: '5,5'
    },
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

(document.getElementById('flipHorizontal') as HTMLElement).onclick = () => {
    // Flips the node horizontally.
    diagram.nodes[0].flip ^= FlipDirection.Horizontal;
    diagram.dataBind();
}
(document.getElementById('flipVertical') as HTMLElement).onclick = () => {
    // Flips the node vertically.
    diagram.nodes[0].flip ^= FlipDirection.Vertical;
    diagram.dataBind();
}

(document.getElementById('flipBoth') as HTMLElement).onclick = () => {
    // Flips the node horizontally and vertically.
    diagram.nodes[0].flip ^= FlipDirection.Both;
    diagram.dataBind();
}
(document.getElementById('flipNone') as HTMLElement).onclick = () => {
    // No flip applied to the node.
    diagram.nodes[0].flip = FlipDirection.None;
    diagram.dataBind();
}



