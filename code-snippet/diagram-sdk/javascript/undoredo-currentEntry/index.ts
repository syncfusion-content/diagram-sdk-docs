import { Diagram, NodeModel, UndoRedo } from '@syncfusion/ej2-diagrams';

Diagram.Inject(UndoRedo);
var nodes: NodeModel[] = [
  {
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [
      {
        id: 'label1',
        content: 'Perform interaction with node to get current entry',
      },
    ],
    shape: {
      type: 'Flow',
      shape: 'Terminator',
    },
  },
];

let diagram = new Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: nodes,
    getNodeDefaults: (node) => {
      node.height = 100;
      node.width = 100;
      node.style.fill = '#6BA5D7';
      node.style.strokeColor = 'white';
      return node;
    },
    historyChange: function (args) {
      //To get current entry
      console.log(diagram.historyManager.currentEntry);
    },
  },
  '#element'
);
