


import { Diagram, NodeModel,BpmnDiagrams,NodeConstraints } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [
    {
      // Position of the node
      offsetX: 250,
      offsetY: 250,
      constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as Group
      shape: {
        type: 'Bpmn',
        shape: 'Group',
      },
    },
  ];
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: nodes
});
// render initialized diagram
diagram.appendTo('#element');



