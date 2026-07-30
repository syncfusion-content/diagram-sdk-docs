import {
  Diagram,
  NodeModel,
  AnnotationConstraints,
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
      {
        content: 'Interaction enabled',
        offset: { x: 0.5, y: 0.1 },
        constraints: AnnotationConstraints.Interaction,
      },
      {
        content: 'ReadOnly enabled',
        offset: { x: 0.2, y: 0.5 },
        constraints: AnnotationConstraints.ReadOnly,
      },
      {
        content: 'Select and drag enabled',
        offset: { x: 0.8, y: 0.5 },
        constraints: AnnotationConstraints.Select | AnnotationConstraints.Drag,
      },
      {
        content: 'Select and rotate enabled',
        offset: { x: 0.5, y: 0.9 },
        constraints:
          AnnotationConstraints.Select | AnnotationConstraints.Rotate,
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
