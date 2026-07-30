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

  // Layer 2 Nodes

  {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 100,
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
        objects: ['node1'],
      },
      {
        id: 'layer2',
        //Layer 2 objects
        objects: ['node2'],
      },
    ],
  },
  '#element'
);

document.getElementById('removeLayer').onclick = () => {
  var layerId = 'layer1';
  /**
   * Remove the layer from the existing diagram layer collection
   * layerId - representing the id of the layer to be removed from the diagram.
   */
  diagram.removeLayer(layerId);
};
