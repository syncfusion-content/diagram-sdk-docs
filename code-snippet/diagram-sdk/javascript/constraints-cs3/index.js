var diagram;

var nodes = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    annotations: [
      { content: 'tooltip enabled', offset: { x: 0.5, y: 0.1 } },
      { content: 'draw enabled', offset: { x: 0.2, y: 0.5 } },
      { content: 'drg enabled', offset: { x: 0.8, y: 0.5 } },
      { content: 'InConnect disabled', offset: { x: 0.2, y: 0.9 } },
      { content: 'OutConnect disabled', offset: { x: 0.8, y: 0.9 } },
    ],
    ports: [
      {
        id: 'left',
        offset: { x: 0, y: 0.5 },
        visibility: ej.diagrams.PortVisibility.Visible,
        constraints:
          ej.diagrams.PortConstraints.Default |
          ej.diagrams.PortConstraints.Draw,
      },
      {
        id: 'right',
        offset: { x: 1, y: 0.5 },
        visibility: ej.diagrams.PortVisibility.Visible,
        constraints:
          ej.diagrams.PortConstraints.Default |
          ej.diagrams.PortConstraints.Drag,
      },
      {
        id: 'top',
        offset: { x: 0.5, y: 0 },
        visibility: ej.diagrams.PortVisibility.Visible,
        constraints:
          ej.diagrams.PortConstraints.Default |
          ej.diagrams.PortConstraints.ToolTip,
        tooltip: { content: 'Port tooltip' },
      },
      {
        id: 'bottomLeft',
        offset: { x: 0.2, y: 1 },
        visibility: ej.diagrams.PortVisibility.Visible,
        constraints:
          ej.diagrams.PortConstraints.Default &
          ~ej.diagrams.PortConstraints.InConnect,
      },
      {
        id: 'bottomRight',
        offset: { x: 0.8, y: 1 },
        visibility: ej.diagrams.PortVisibility.Visible,
        constraints:
          ej.diagrams.PortConstraints.Default &
          ~ej.diagrams.PortConstraints.OutConnect,
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
