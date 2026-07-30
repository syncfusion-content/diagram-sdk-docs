var diagram;

var nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    annotations: [
      {
        content: 'Interaction enabled',
        offset: { x: 0.5, y: 0.1 },
        constraints: ej.diagrams.AnnotationConstraints.Interaction,
      },
      {
        content: 'ReadOnly enabled',
        offset: { x: 0.2, y: 0.5 },
        constraints: ej.diagrams.AnnotationConstraints.ReadOnly,
      },
      {
        content: 'Select and drag enabled',
        offset: { x: 0.8, y: 0.5 },
        constraints:
          ej.diagrams.AnnotationConstraints.Select |
          ej.diagrams.AnnotationConstraints.Drag,
      },
      {
        content: 'Select and rotate enabled',
        offset: { x: 0.5, y: 0.9 },
        constraints:
          ej.diagrams.AnnotationConstraints.Select |
          ej.diagrams.AnnotationConstraints.Rotate,
      },
    ],
  },
];
//Initialize the diagram
diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '645px',
  nodes: nodes,
  //Sets the default values of a nodes
  getNodeDefaults: function (obj) {
    obj.width = 300;
    obj.height = 200;
    return obj;
  },
});
diagram.appendTo('#element');
