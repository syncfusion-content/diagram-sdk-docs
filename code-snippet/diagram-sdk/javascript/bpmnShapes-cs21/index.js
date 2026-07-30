var nodes = [
    {
      id: 'subProcess',
      width: 520,
      height: 250,
      offsetX: 355,
      offsetY: 230,
      constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.AllowDrop,
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
// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes:nodes
    }, '#element');

