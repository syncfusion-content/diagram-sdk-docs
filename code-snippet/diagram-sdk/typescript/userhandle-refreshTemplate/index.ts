import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';

var nodes: NodeModel[] = [
    {
        id: 'node1',
        offsetX: 150,
        offsetY: 150,
        height: 100,
        width: 100,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
    },
];

let userHandles = [
    {
        name: 'handle1',
        offset: 1,
        side: 'Right'
    },
];

function userHandleTemplate(obj: any, name: string) {
    return `<div style="width:50px;height:100%;display:flex;align-items:center;justify-content:center;background:${name === "Delete" ? "red" : "#4CAF50"};border-radius:4px;color:white;font-size:12px;font-weight:bold;">
            ${name}
          </div>`;
}


// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
    selectedItems: {
        userHandles: userHandles,
    },
    userHandleTemplate: userHandleTemplate(this, "Edit"),
    created: function () {
        setTimeout(function () {
            diagram.select([diagram.nodes[0]]);
        }, 100);
    },
});
// render initialized diagram
diagram.appendTo('#element');


// Update the node data and refresh the user handle template
(document.getElementById('updateBtn') as HTMLInputElement).onclick = function () {
    diagram.userHandleTemplate = userHandleTemplate(this, "Delete")
    diagram.refreshTemplate();
    diagram.select([diagram.nodes[0]]);
};
