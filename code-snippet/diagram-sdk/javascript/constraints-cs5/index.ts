import {
  Diagram,
  NodeModel,
  SelectorConstraints,
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram;

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
    annotations: [
      { content: 'Resize handle disabled in selector constraints' },
    ],
  },
];
//Initializes diagram control
diagram = new Diagram({
  width: '100%',
  height: '645px',
  nodes: nodes,
  getNodeDefaults: getNodeDefaults,
  //Resize handles disabled
  selectedItems: {
    constraints: SelectorConstraints.All & ~SelectorConstraints.ResizeAll,
  },
});
diagram.appendTo('#element');
