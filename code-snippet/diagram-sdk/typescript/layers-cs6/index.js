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
    offsetX: 100,
    offsetY: 300,
    annotations: [{ content: 'Layer 1 Object' }],
  },

  // Layer 2 Nodes

  {
    id: 'node3',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 300,
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

document.getElementById('moveObjects').onclick = () => {
  /**
   * Move objects from one layer to another layern
   * Parameter 1 - An array of object IDs represented as strings to be moved
   * parameter 2 -  The ID of the target layer to which the objects should be moved.
   */
  diagram.moveObjects(['node1'], 'layer2');
};
