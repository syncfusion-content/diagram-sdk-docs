import { Diagram, DiagramTools, Rect } from '@syncfusion/ej2-diagrams';
let diagram: Diagram = new Diagram(
  {
    width: '700px',
    height: '350px',
    tool: DiagramTools.ZoomPan,
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
(document.getElementById('bringToCenter') as HTMLInputElement).onclick = () => {
  let nodeBounds = diagram.nodes[0].wrapper.bounds;
  let bounds = new Rect(
    nodeBounds.x,
    nodeBounds.y,
    nodeBounds.width,
    nodeBounds.height
  );
  /**
   * parameter - bounds of region to bring them to center
   */
  diagram.bringToCenter(bounds);
};
