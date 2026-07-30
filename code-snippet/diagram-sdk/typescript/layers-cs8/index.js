// A node is created and stored in nodes array.
var nodes = [
  // Layer 1 Nodes
  {
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{ content: 'Layer 1 Object' }],
  },

  {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 130,
    annotations: [{ content: 'Layer 1 Object' }],
  },

  // Layer 2 Nodes

  {
    id: 'node3',
    width: 100,
    height: 100,
    offsetX: 160,
    offsetY: 360,
    annotations: [{ content: 'Layer 2 Object' }],
  },
];
// initialize diagram component
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: nodes,
    layers: [
        {
            id: 'layer1',
            //Layer 1 objects
            objects: ['node1', 'node2'],
          },
          {
            id: 'layer2',
            //Layer 2 objects
            objects: ['node3'],
          },
    ],
  },
  '#element'
);

document.getElementById('cloneLayer').onclick = () => {
   /**
   * To Clone the layer
   * Parameter 1 - A string representing the name of the layer to be cloned.
   */
    diagram.cloneLayer('layer1');
};

