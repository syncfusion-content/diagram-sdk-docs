let nodes = [
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
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  mouseEnter: function (args) {
    //Customize
    args.actualObject.style.fill = 'red';
    diagram.dataBind();
  },
  mouseOver: function (args) {
    console.log(args.name);
  },
  mouseLeave: function (args) {
    //Customize
    args.element.style.fill = 'green';
    diagram.dataBind();
  },
});
diagram.appendTo('#element');

