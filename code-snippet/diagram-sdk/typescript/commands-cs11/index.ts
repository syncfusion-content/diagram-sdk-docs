

import {
    Diagram,
    NodeModel
} from '@syncfusion/ej2-diagrams';
let node: NodeModel = {
    id: 'node1',
    width: 90,
    height: 60,
    offsetX: 100,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
};
let node2: NodeModel = {
    id: 'node2',
    width: 90,
    height: 60,
    offsetX: 180,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
};
//Initializes the diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '350px',
    nodes: [node, node2]
});
let selArray: (NodeModel)[] = [];
diagram.appendTo('#element');
selArray.push(diagram.nodes[1]);
//Selects the nodes
diagram.select(selArray);
//Moves forward
diagram.moveForward();


