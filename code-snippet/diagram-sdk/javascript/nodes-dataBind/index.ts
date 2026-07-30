import { DataManager } from '@syncfusion/ej2-data';
import { DataBinding, Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
Diagram.Inject(DataBinding);
let data = [
  {
    id: 'data1',
    parent: null,
  },
];
// initialize Diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  dataSourceSettings: {
    id: 'id',
    parentId: 'parent',
    dataSource: new DataManager(data),
  },
  getNodeDefaults: function (node: NodeModel) {
    node.height = 100;
    node.width = 100;
    node.offsetX = 300;
    node.offsetY = 200;
    node.style = { fill: 'yellow', strokeColor: 'yellow' };
    return node;
  },
});
// render initialized Diagram
diagram.appendTo('#element');
