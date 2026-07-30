/**
 * Tooltip sample
 */
var diagram;

var node = {
  id: 'node1',
  width: 100,
  height: 100,
  annotations: [
    {
      id: 'label',
      content: 'Rectangle',
      offset: {
        x: 0.5,
        y: 0.5,
      },
      style: {
        color: 'white',
      },
    },
  ],
  offsetX: 200,
  offsetY: 200,
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
  },
  constraints:
    ej.diagrams.NodeConstraints.Default |
    ej.diagrams.NodeConstraints.InheritTooltip,
  //Defines mouse over tooltip
  tooltip: {
    content: 'Node',
    position: 'TopLeft',
  },
};
let connector = {
  id: 'con1',
  sourcePoint: { x: 200, y: 100 },
  targetPoint: { x: 400, y: 250 },
  tooltip: { content: 'connector' },
  constraints:
    ej.diagrams.ConnectorConstraints.Default |
    ej.diagrams.ConnectorConstraints.InheritTooltip,
};
diagram = new ej.diagrams.Diagram(
  {
    width: '650px',
    height: '350px',
    constraints:
      ej.diagrams.DiagramConstraints.Default |
      ej.diagrams.DiagramConstraints.Tooltip,
    nodes: [node],
    connectors: [connector],
    //Defines mouse over tooltip for a node
    tooltip: {
      //Sets the content of the tooltip
      content: 'DiagramToolTip',
      //Sets the position of the tooltip
      position: 'BottomRight',
      //Sets the tooltip position relative to the node
      relativeMode: 'Object',
    },
  },

  '#element'
);
