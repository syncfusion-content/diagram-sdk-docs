var diagram;

var nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    annotations: [{ content: 'Node 1' }],
  },
  {
    id: 'Node2',
    offsetX: 400,
    offsetY: 200,
    annotations: [{ content: 'Node 2' }],
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
  //Snap to object and horizontal gridlines disabled
  snapSettings: {
    constraints:
      ej.diagrams.SnapConstraints.All &
      ~(
        ej.diagrams.SnapConstraints.ShowHorizontalLines |
        ej.diagrams.SnapConstraints.SnapToObject
      ),
  },
});
diagram.appendTo('#element');
