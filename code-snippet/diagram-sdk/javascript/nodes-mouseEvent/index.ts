import { Diagram, NodeModel, MouseEventArgs } from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
  {
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [
      {
        content: 'Hover node',
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
  mouseEnter: function (args: MouseEventArgs) {
    //Customize
    (args.actualObject as NodeModel).style.fill = 'red';
    diagram.dataBind();
  },
  mouseOver: function (args: MouseEventArgs) {
    //Customize
  },
  mouseLeave: function (args: MouseEventArgs) {
    //Customize
    ((args as any).element as NodeModel).style.fill = '#6BA5D7';
    diagram.dataBind();
  },
});
diagram.appendTo('#element');
