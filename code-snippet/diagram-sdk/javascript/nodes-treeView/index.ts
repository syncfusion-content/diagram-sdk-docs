


import { Diagram, NodeModel,IDragEnterEventArgs } from '@syncfusion/ej2-diagrams';
import { TreeView } from '@syncfusion/ej2-navigations';

let diagram: Diagram;

let nodes: NodeModel[] = [
  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: true,
    style: { fill: '#6AA8D7', strokeWidth: 1 },
    // Text(label) added to the node
  },
];

//Initializes diagram control
diagram = new Diagram({
  width: '70%',
  height: '645px',
  nodes: nodes,
  getNodeDefaults: function (obj: NodeModel) {
    obj.style = { fill: 'skyblue' };
    obj.width = 75;
    obj.height = 50;
    return obj;
  },
  dragEnter: dragEnter,
  created: created,
});
diagram.appendTo('#element');
function created(): void {
  diagram.fitToPage({ mode: 'Width' });
}
let productTeam1 = [
  {
    id: 't1',
    name: 'ASP.NET MVC Team',
    expanded: true,
    child: [
      { id: 't2', pid: 't1', name: 'Smith' },
      { id: 't3', pid: 't1', name: 'Johnson' },
      { id: 't4', pid: 't1', name: 'Anderson' },
    ],
  },
  {
    id: 't5',
    name: 'Windows Team',
    expanded: true,
    child: [
      { id: 't6', pid: 't5', name: 'Clark' },
      { id: 't7', pid: 't5', name: 'Wright' },
      { id: 't8', pid: 't5', name: 'Lopez' },
    ],
  },
];
let fields: Object = {
  dataSource: productTeam1,
  id: 'id',
  text: 'name',
  child: 'child',
};

//Initialize ListView component
let treeObj: TreeView = new TreeView({
  allowDragAndDrop: true,
  //Set defined data to dataSource property
  fields: fields,
});

//Render initialized ListView component
treeObj.appendTo('#treeView');

function dragEnter(args: IDragEnterEventArgs): void {
  let lable = '';
  if (args.dragData) {
    lable = (args.dragData as any).text;
  }
  let node: NodeModel = {
    width: 70,
    height: 50,
    offsetX: 100,
    offsetY: 100,
    data: { branch: 'Left' },

    annotations: [{ content: lable }],
  };
  args.dragItem = node;
}




