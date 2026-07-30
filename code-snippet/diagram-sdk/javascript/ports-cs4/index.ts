import { Diagram, NodeModel, PortVisibility } from '@syncfusion/ej2-diagrams';
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
    strokeColor: 'white',
  },
  // Initialize port collection
  ports: [
    {
      id: 'port1',
      offset: { x: 0, y: 0.5 },
      visibility: PortVisibility.Visible,
    },
    {
      id: 'port2',
      offset: { x: 1, y: 0.5 },
      visibility: PortVisibility.Visible,
    },
    {
      id: 'port3',
      offset: { x: 0.5, y: 0 },
      visibility: PortVisibility.Visible,
    },
    {
      id: 'port4',
      offset: { x: 0.5, y: 1 },
      visibility: PortVisibility.Visible,
    },
  ],
};
// initialize Diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  // Add node
  nodes: [node],
});
// render initialized Diagram
diagram.appendTo('#element');

//Update ports at runtime
(document.getElementById('updatePortOffset') as HTMLInputElement).onclick =
  () => {
    let port1 = diagram.nodes[0].ports[0];
    port1.offset = { x: 1, y: 1 };
    diagram.dataBind();
  };
