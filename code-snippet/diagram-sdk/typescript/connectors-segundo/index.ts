import {
  Diagram,
  NodeModel,
  ConnectorModel,
  HierarchicalTree,
  ConnectorConstraints,
  ConnectorEditing, UndoRedo
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(HierarchicalTree, ConnectorEditing, UndoRedo);
let nodes: NodeModel[] = [
 {
    id: 'sourcenode',
    width: 150,
    height: 50,
    offsetX: 350,
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
    id: 'targetnode',
    width: 150,
    height: 50,
    offsetX: 200,
    offsetY: 250,
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
    id: 'connector1',
    sourceID: 'sourcenode',
    targetID: 'targetnode',
    type: 'Orthogonal',
    segments: [
      {
        type: 'Orthogonal',
        direction: 'Left',
        length: 100,
      },
      {
        type: 'Orthogonal',
        direction: 'Bottom',
        length: 100
      },
      {
        type: 'Orthogonal',
        direction: 'Right',
        length: 100
      },
      {
        type: 'Orthogonal',
        direction: 'Bottom',
        length: 50
      }
    ],
    constraints:
      ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
  },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  connectors: connectors,
});
diagram.appendTo('#element');

(document.getElementById('undo') as HTMLInputElement).onclick = () => {
  diagram.undo();
};

(document.getElementById('redo') as HTMLInputElement).onclick = () => {
  diagram.redo();
};