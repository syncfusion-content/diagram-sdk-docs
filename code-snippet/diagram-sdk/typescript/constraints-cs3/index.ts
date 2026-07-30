import {
  Diagram,
  NodeModel,
  PortVisibility,
  PortConstraints,
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram;

function getNodeDefaults(obj: NodeModel): NodeModel {
  obj.width = 300;
  obj.height = 200;
  return obj;
}

let nodes: NodeModel[] = [
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
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Draw,
      },
      {
        id: 'right',
        offset: { x: 1, y: 0.5 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.Drag,
      },
      {
        id: 'top',
        offset: { x: 0.5, y: 0 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default | PortConstraints.ToolTip,
        tooltip: { content: 'Port tooltip' },
      },
      {
        id: 'bottomLeft',
        offset: { x: 0.2, y: 1 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.InConnect,
      },
      {
        id: 'bottomRight',
        offset: { x: 0.8, y: 1 },
        visibility: PortVisibility.Visible,
        constraints: PortConstraints.Default & ~PortConstraints.OutConnect,
      },
    ],
  },
];
//Initializes diagram control
diagram = new Diagram({
  width: '100%',
  height: '645px',
  nodes: nodes,
  getNodeDefaults: getNodeDefaults,
});
diagram.appendTo('#element');
