 
ej.diagrams.Diagram.Inject(ej.diagrams.LineRouting);
var diagram;
var nodes = [
  { id: 'shape1', offsetX: 100, offsetY: 100, width: 120, height: 50 },
  { id: 'shape2', offsetX: 350, offsetY: 300, width: 120, height: 50 },
  { id: 'shape3', offsetX: 150, offsetY: 200, width: 120, height: 50 },
    { id: 'shape4', offsetX: 300, offsetY: 200, width: 120, height: 50 }
];
var connectors = [
  { id: 'connector', sourceID: 'shape1', targetID: 'shape2', type: 'Orthogonal',annotations:[{offset:.7,content:' Routing \n enabled',style:{fill:"white"}}]},
  { id: 'connector2', sourceID: 'shape1', targetID: 'shape2',annotations:[{offset:.6,content:' Routing \n disabled',style:{fill:"white"}}], type: 'Orthogonal', constraints: ej.diagrams.ConnectorConstraints.Default &~ej.diagrams.ConnectorConstraints.InheritLineRouting }
];
/**
 *  Initialize the Diagram 
 */
var diagram = new ej.diagrams.Diagram({
  width: '100%', height: 900, nodes: nodes, connectors: connectors,
  //Add Line routing constraints to diagram.
  constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.LineRouting,
  getNodeDefaults: function (node) {
    node = { style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' } }
    return node;
  },
  snapSettings: {
    constraints: ej.diagrams.SnapConstraints.None,
  }
});

diagram.appendTo('#element'); 

