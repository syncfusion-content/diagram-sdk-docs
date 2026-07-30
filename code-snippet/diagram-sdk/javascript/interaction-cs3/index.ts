

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
    // Text(label) added to the node
};
let diagram: Diagram = new Diagram({
    width: '100%', height: 900,
    nodes: [node],
    selectedItems : {handleSize : 40},
});
diagram.appendTo('#element');



