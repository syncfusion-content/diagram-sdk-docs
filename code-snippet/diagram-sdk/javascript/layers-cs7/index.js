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
    offsetX: 130,
    offsetY: 130,
    annotations: [{ content: 'Layer 2 Object' }],
  },

  // Layer 2 Nodes

  {
    id: 'node3',
    width: 100,
    height: 100,
    offsetX: 160,
    offsetY: 160,
    annotations: [{ content: 'Layer 3 Object' }],
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
        objects: ['node1'],
      },
      {
        id: 'layer2',
        //Layer 2 objects
        objects: ['node2'],
      },
      {
        id: 'layer3',
        //Layer 2 objects
        objects: ['node3'],
      },
    ],
  },
  '#element'
);

document.getElementById('bringLayerForward').onclick = () => {
  /**
   * Move the layer forward
   * Parameter 1 -A string representing the id of the layer to be moved forward.
   */
  diagram.bringLayerForward('layer1');
};

document.getElementById('sendLayerBackward').onclick = () => {
  /**
   * Move the layer Backward
   * Parameter 1 - A string representing the id of the layer to be  moved backward.
   */
  diagram.sendLayerBackward('layer1');
};
