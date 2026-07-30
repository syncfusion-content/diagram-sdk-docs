import {
  Diagram,
  NodeModel,
  ConnectorModel,
  UndoRedo,
  IHistoryChangeArgs,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(UndoRedo);
let nodes: NodeModel[] = [
  {
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [
      {
        content: 'Node1',
      },
    ],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
  },
  {
    id: 'Init',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 140,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    annotations: [
      {
        content: 'Node2',
      },
    ],
  },
];
let connectors: ConnectorModel[] = [
  {
    // Unique name for the connector
    id: 'connector1',
    sourceID: 'Start',
    targetID: 'Init',
    type: 'Orthogonal',
  },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  connectors: connectors,
  historyChange: function (args: IHistoryChangeArgs) {
    //Triggers while interacting with diagram and performing undo-redo
    console.log(args);
  },
});
diagram.appendTo('#element');
