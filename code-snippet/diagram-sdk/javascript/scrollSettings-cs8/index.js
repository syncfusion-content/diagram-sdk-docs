var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '700px',
    nodes: [{ offsetX: 300, offsetY: 300 }],
    rulerSettings: { showRulers: true },
    scrollSettings: { scrollLimit: 'Infinity' },
  },
  '#element'
);

document.getElementById('zoomIn').onclick = () => {
  // Zoom options to zoom-in
  let zoomOptions = {
    type: 'ZoomIn',
    zoomFactor: 0.2,
    focusPoint: { x: 0.5, y: 0.5 },
  };
  diagram.zoomTo(zoomOptions);
  diagram.dataBind();
};

document.getElementById('zoomOut').onclick = () => {
  // Zoom options to zoom-out
  let zoomOptions = {
    type: 'ZoomOut',
    zoomFactor: 0.2,
    focusPoint: { x: 0.5, y: 0.5 },
  };
  diagram.zoomTo(zoomOptions);
  diagram.dataBind();
};
