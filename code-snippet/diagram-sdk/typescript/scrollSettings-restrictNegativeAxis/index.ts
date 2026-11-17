import {
  Diagram,
  NodeModel,
  ConnectorModel,
  DiagramTools,
} from '@syncfusion/ej2-diagrams';
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';

// Initialize negative and positive region nodes
let nodes: NodeModel[] = [
  {
    id: 'negativeNode',
    offsetX: -150,
    offsetY: -100,
    width: 140,
    height: 60,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [
      {
        content: 'Negative Region Node',
      },
    ],
  },
  {
    id: 'positiveNode',
    offsetX: 250,
    offsetY: 150,
    width: 140,
    height: 60,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [
      {
        content: 'Positive Region Node',
      },
    ],
  },
];

// Add connector between the nodes
let connectors: ConnectorModel[] = [
  {
    id: 'connector1',
    sourceID: 'negativeNode',
    targetID: 'positiveNode',
  },
];

// Initialize Diagram
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  connectors: connectors,
  tool: DiagramTools.ZoomPan,
  rulerSettings: { showRulers: true },
  scrollSettings: {
    restrictNegativeAxis: false,
  },
});

diagram.appendTo('#element');

// Initialize CheckBox to dynamically toggle restrictNegativeAxis at runtime
let checkBox: CheckBox = new CheckBox({
  label: 'Restrict Negative Axis',
  checked: false,
  change: (args: ChangeEventArgs) => {
    diagram.scrollSettings.restrictNegativeAxis = args.checked;
    diagram.dataBind();
  },
});

checkBox.appendTo('#restrictNegativeAxis');
