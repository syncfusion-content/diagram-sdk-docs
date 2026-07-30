import {
  Diagram,
  NodeModel,
  ConnectorModel,
  HierarchicalTree,
  LayoutAnimation,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(HierarchicalTree, LayoutAnimation);
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
  {
    id: 'Init2',
    width: 140,
    height: 50,
    offsetX: 100,
    offsetY: 140,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    annotations: [
      {
        content: 'Node3 ',
      },
    ],
  },
  {
    id: 'Init3',
    width: 140,
    height: 50,
    offsetX: 150,
    offsetY: 140,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
    annotations: [
      {
        content: 'Node4 ',
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
  {
    // Unique name for the connector
    id: 'connector2',
    sourceID: 'Start',
    targetID: 'Init2',
    type: 'Orthogonal',
  },
  {
    // Unique name for the connector
    id: 'connector3',
    sourceID: 'Init2',
    targetID: 'Init3',
    type: 'Orthogonal',
  },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  layout: { type: 'HierarchicalTree' },
  nodes: nodes,
  connectors: connectors,
  animationComplete: function () {
    console.log('Animation complete');
    diagram.nodes[0].style.fill =
      diagram.nodes[0].style.fill === '#6BA5D7' ? 'red' : '#6BA5D7';
    diagram.dataBind();
    //customize
  },
});
diagram.appendTo('#element');
