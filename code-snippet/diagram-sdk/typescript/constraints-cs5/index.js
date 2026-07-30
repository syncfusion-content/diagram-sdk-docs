var diagram;

var nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    annotations: [
      { content: 'Resize handle disabled in selector constraints' },
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
    obj.width = 100;
    obj.height = 100;
    return obj;
  },
  selectedItems: {
    constraints:
      ej.diagrams.SelectorConstraints.All &
      ~ej.diagrams.SelectorConstraints.ResizeAll,
  },
});
diagram.appendTo('#element');
