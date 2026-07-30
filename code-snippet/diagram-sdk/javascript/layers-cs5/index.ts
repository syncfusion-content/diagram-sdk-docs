import { ConnectorModel, Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [
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
// initialize Diagram component
let diagram: Diagram = new Diagram({
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
});
// render initialized Diagram
diagram.appendTo('#element');

(document.getElementById('removeLayer') as HTMLInputElement).onclick = () => {
    let layerId = 'layer1';
    /**
     * Remove the layer from the existing diagram layer collection
     * layerId - representing the id of the layer to be removed from the diagram.
     */
    diagram.removeLayer(layerId);
};
