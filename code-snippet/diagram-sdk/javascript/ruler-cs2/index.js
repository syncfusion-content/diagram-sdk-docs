// To arrange ruler tick.
let arrange = (args) => {
    if (args.tickInterval % 10 == 0) {
      //Sets the tick length to 25
      args.tickLength = 25;
    }
  };
  var diagram = new ej.diagrams.Diagram({
    width: 1000,
    height: 500,
    nodes: [
      {
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
      },
    ],
    rulerSettings: {
      showRulers: true,
      horizontalRuler: {
        segmentWidth: 50,
        orientation: 'Horizontal',
        interval: 10,
        thickness: 50,
        arrangeTick: arrange,
      },
      verticalRuler: {
        segmentWidth: 200,
        interval: 20,
        thickness: 20,
        tickAlignment: 'LeftOrTop',
        markerColor: 'red',
      },
    },
  });
  diagram.appendTo('#element');
  