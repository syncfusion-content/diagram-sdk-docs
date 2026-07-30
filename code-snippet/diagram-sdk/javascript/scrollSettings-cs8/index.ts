import { Diagram, ZoomOptions } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram({
  width: '100%',
  height: 700,
  nodes: [{ offsetX: 300, offsetY: 300 }],
  rulerSettings: { showRulers: true },
  scrollSettings: { scrollLimit: 'Infinity' },
});
diagram.appendTo('#element');

(document.getElementById('zoomIn') as HTMLInputElement).onclick = () => {
  // Zoom options to zoom-in
  let zoomOptions: ZoomOptions = {
    type: 'ZoomIn',
    zoomFactor: 0.2,
    focusPoint: { x: 0.5, y: 0.5 },
  };
  diagram.zoomTo(zoomOptions);
  diagram.dataBind();
};

(document.getElementById('zoomOut') as HTMLInputElement).onclick = () => {
  // Zoom options to zoom-out
  let zoomOptions: ZoomOptions = {
    type: 'ZoomOut',
    zoomFactor: 0.2,
    focusPoint: { x: 0.5, y: 0.5 },
  };
  diagram.zoomTo(zoomOptions);
  diagram.dataBind();
};
