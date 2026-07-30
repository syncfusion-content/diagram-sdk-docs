var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  scrollSettings: { scrollLimit: 'Infinity' },
  nodes: [
    {
      id: 'node1',
      offsetX: 300,
      offsetY: 200,
      width: 200,
      height: 100,
      style: { fill: '#64Abbd' },
    },
  ],
  mouseWheel: function (args) {
    //Prevents scrolling and zooming in diagram.
    args.cancel = true;
  },
});
diagram.appendTo('#element');
