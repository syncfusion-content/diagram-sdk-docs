//Initializes the Diagram component
var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '350px',
      tool: ej.diagrams.DiagramTools.ZoomPan,
      scrollSettings: { scrollLimit: 'Infinity' },
      nodes: [
        {
          id: 'node1',
          offsetX: 1000,
          offsetY: 100,
          width: 70,
          height: 40,
          style: { fill: '#64abbb', strokeColor: '#64abbb' },
        },
      ],
    },
    '#element'
  );
  document.getElementById('bringIntoView').onclick = () => {
    let nodeBounds = diagram.nodes[0].wrapper.bounds;
    let bounds = new ej.diagrams.Rect(
      nodeBounds.x,
      nodeBounds.y,
      nodeBounds.width,
      nodeBounds.height
    );
    /**
     * parameter - bounds of region to bring into view
     */
    diagram.bringIntoView(bounds);
  };
  