import {
  Diagram,
  NodeModel,
  ConnectorModel,
  HierarchicalTree,
  ConnectorConstraints,
  ConnectorEditing,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(HierarchicalTree, ConnectorEditing);
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
    expandIcon: {
      shape: 'ArrowDown',
      width: 20,
      height: 15,
    },
    collapseIcon: {
      shape: 'ArrowUp',
      width: 20,
      height: 15,
    },
  },
  {
    id: 'Init',
    width: 140,
    height: 50,
    offsetX: 200,
    offsetY: 240,
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
    // Source and Target node's name to which connector needs to be connected.
    sourceID: 'Start',
    targetID: 'Init',
    type: 'Orthogonal',
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

(document.getElementById('resetSegments') as HTMLInputElement).onclick = () => {
  diagram.resetSegments();
};
