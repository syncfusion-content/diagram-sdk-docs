import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
var node:NodeModel = [
    { id: "rectangle1", offsetX: 100, offsetY: 100, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: "rectangle2", offsetX: 200, offsetY: 200, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'group', children: ['rectangle1', 'rectangle2'] },
    { id: "rectangle3", offsetX: 400, offsetY: 400, width: 100, height: 100, annotations: [{ content: 'node1' }] },
    { id: "rectangle4", offsetX: 500, offsetY: 500, width: 100, height: 100, annotations: [{ content: 'node2' }] },
    { id: 'group2', children: ['rectangle3', 'rectangle4'], padding: { left: 10, right: 10, top: 10, bottom: 10 } },
];
let diagram: Diagram = new Diagram({
    width: '100%',
    height: 900,
});
diagram.appendTo('#element');
//Add collection of group nodes
diagram.addElements(node);