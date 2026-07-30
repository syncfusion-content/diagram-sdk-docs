


import { Diagram, NodeModel, PointPortModel, PortVisibility } from '@syncfusion/ej2-diagrams';
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
// Initialize port collection
let port: PointPortModel[] = [{
        id: 'port1',
        offset: {
            x: 0,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    },{
        id: 'port2',
        offset: {
            x: 1,
            y: 0.5
        },
        visibility: PortVisibility.Visible
    },
    {
        id: 'port3',
        offset: {
            x: 0.5,
            y: 0
        },
        visibility: PortVisibility.Visible
    },
    {
        id: 'port4',
        offset: {
            x: 0.5,
            y: 1
        },
        visibility: PortVisibility.Visible
    }
];
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: [node]
});
// render initialized diagram
diagram.appendTo('#element');
// Method to add ports through run time


(document.getElementById('addPorts') as HTMLInputElement).onclick = () =>{
    // Method to add ports to a node at runtime
    // Parameters:
    // - node: The node to which the port will be added.
    // - port: The port collection to be added to the node.
    diagram.addPorts(diagram.nodes[0], port);
}