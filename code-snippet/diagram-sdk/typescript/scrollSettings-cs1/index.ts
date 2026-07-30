import { Diagram } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
  width: '1500',
  height: 700,
  nodes: [{ offsetX: 200, offsetY: 200 }],
  rulerSettings: { showRulers: true },
  scrollSettings: {
    //To scroll the diagram infinitely
    scrollLimit: 'Infinity',
  },
  //Sets scroll status
  created: function () {
    diagram.scrollSettings.horizontalOffset = 100;
    diagram.scrollSettings.verticalOffset = 100;
    diagram.dataBind();
  },
});
diagram.appendTo('#element');
