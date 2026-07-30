import {
  Diagram,
  NodeModel,
  SnapConstraints,
  Snapping,
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram;
Diagram.Inject(Snapping);
function getNodeDefaults(obj: NodeModel): NodeModel {
  obj.width = 100;
  obj.height = 100;
  return obj;
}

let nodes: NodeModel[] = [
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
//Initializes diagram control
diagram = new Diagram({
  width: '100%',
  height: '645px',
  nodes: nodes,
  getNodeDefaults: getNodeDefaults,
  //Snap to object and horizontal gridlines disabled
  snapSettings: {
    constraints:
      SnapConstraints.All &
      ~(SnapConstraints.ShowHorizontalLines | SnapConstraints.SnapToObject),
  },
});
diagram.appendTo('#element');
