import {
  Diagram,
  NodeModel,
  FixedUserHandleClickEventArgs,
} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
  {
    id: 'node1',
    offsetX: 300,
    offsetY: 300,
    height: 100,
    width: 100,
    style: { fill: '#64A6', strokeColor: '#64Abbb' },
    fixedUserHandles: [
      {
        id: 'color',
        pathData:
          'M31.5,13.5 C31.5,20.95,24.44,27,15.75,27 C7.059999999999999,27,0,20.95,0,13.5 C0,6.050000000000001,7.06,0,15.75,0 C24.44,0,31.5,6.05,31.5,13.5 Z M13.12,4.5 L13.12,11.25 L5.25,11.25 L5.25,15.75 L13.12,15.75 L13.12,22.5 L18.38,22.5 L18.38,15.75 L26.25,15.75 L26.25,11.25 L18.38,11.25 L18.38,4.5 Z ',
        width: 20,
        height: 20,
      },
    ],
  },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  fixedUserHandleClick: function (args: FixedUserHandleClickEventArgs) {
    let node = args.element;
    node.style.fill = node.style.fill === '#64A6' ? '#64Abbb' : '#64A6';
    diagram.dataBind();
  },
});

diagram.appendTo('#element');
