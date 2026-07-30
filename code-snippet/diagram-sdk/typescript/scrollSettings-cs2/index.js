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
  
  document.getElementById('updateScrollerOffset').onclick = () => {
    // Updates scroll settings
    diagram.scrollSettings.horizontalOffset = 200;
    diagram.scrollSettings.verticalOffset = 100;
    diagram.dataBind();
  };
  