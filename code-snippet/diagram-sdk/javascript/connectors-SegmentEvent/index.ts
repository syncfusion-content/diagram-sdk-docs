import {
  Diagram,
  ConnectorModel,
  OrthogonalSegment,
  ISegmentCollectionChangeEventArgs,
  ConnectorEditing,
  ConnectorConstraints,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(ConnectorEditing);

let connectors: ConnectorModel[] = [
  {
    id: 'connector1',
    type: 'Straight',
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
    constraints:
      ConnectorConstraints.Default | ConnectorConstraints.DragSegmentThumb,
    sourcePoint: {
      x: 100,
      y: 100,
    },
    targetPoint: {
      x: 200,
      y: 200,
    },
  },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  connectors: connectors,
  segmentCollectionChange: function (args: ISegmentCollectionChangeEventArgs) {
    if (args.type === 'Addition') {
      console.log('segmentCollectionChange');
      //Customize
    }
  },
});
diagram.appendTo('#element');
