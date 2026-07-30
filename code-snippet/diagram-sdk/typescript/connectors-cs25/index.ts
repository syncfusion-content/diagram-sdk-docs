


import {
  Diagram, SnapConstraints, LineRouting, DiagramConstraints, NodeModel, ConnectorModel
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(LineRouting);


let nodes: NodeModel[] = [
  { id: 'shape1', offsetX: 100, offsetY: 100, width: 120, height: 50 },
  { id: 'shape2', offsetX: 300, offsetY: 300, width: 120, height: 50 },
  { id: 'shape3', offsetX: 150, offsetY: 200, width: 120, height: 50 }
];
let connectors: ConnectorModel[] = [
  { id: 'connector', sourceID: 'shape1', targetID: 'shape2', type: 'Orthogonal' }
];

//initialize the diagram control
let diagram: Diagram = new Diagram({
  width: '100%', height: 900, nodes: nodes, connectors: connectors,
  //Add Line routing constraints to diagram.
  constraints: DiagramConstraints.Default | DiagramConstraints.LineRouting,
  getNodeDefaults: function (node) {
    node = { style: { strokeColor: '#6BA5D7', fill: '#6BA5D7' } }
    return node;
  },
  snapSettings: {
    constraints: SnapConstraints.None,
  }
});
diagram.appendTo('#element');



