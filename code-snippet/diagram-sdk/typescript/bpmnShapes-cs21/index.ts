


import { Diagram, NodeModel,BpmnDiagrams, NodeConstraints } from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams)
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [
    {
      id: 'subProcess',
      width: 520,
      height: 250,
      offsetX: 355,
      offsetY: 230,
      constraints: NodeConstraints.Default | NodeConstraints.AllowDrop,
      shape: {
        shape: 'Activity',
        type: 'Bpmn',
        activity: {
          activity: 'SubProcess',
          subProcess: {
            collapsed: false,
          },
        },
      },
    },
  ];
// initialize diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes:nodes
});
// render initialized diagram
diagram.appendTo('#element');


