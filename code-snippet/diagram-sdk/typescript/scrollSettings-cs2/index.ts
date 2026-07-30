import { Diagram } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
  width: '100%',
  height: 700,
  nodes: [{ offsetX: 300, offsetY: 300 }],
  rulerSettings: { showRulers: true },
  scrollSettings: { scrollLimit: 'Infinity' },
});
diagram.appendTo('#element');

(document.getElementById('updateScrollerOffset') as HTMLInputElement).onclick = () => {
  // Updates scroll settings
  diagram.scrollSettings.horizontalOffset = 200;
  diagram.scrollSettings.verticalOffset = 100;
  diagram.dataBind();
};
