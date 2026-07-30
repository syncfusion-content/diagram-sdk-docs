import {
  Diagram,
  NodeModel,
  IPropertyChangeEventArgs,
} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
  {
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [
      {
        content: 'Node 1',
      },
    ],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
  },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  propertyChange: function (args: IPropertyChangeEventArgs) {
    console.log(args.newValue);
    //customize
  },
});
diagram.appendTo('#element');
