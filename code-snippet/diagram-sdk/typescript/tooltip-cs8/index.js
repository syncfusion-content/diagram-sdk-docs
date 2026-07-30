/**
 * Tooltip sample
 */
var diagram;

var nodes = [{
  id: 'node1',
  offsetX: 250,
  offsetY: 150,
  width: 100,
  height: 100,
  style: {
      fill: '#6BA5D7',
      strokeColor: 'white'
  },
  annotations: [{
          id: 'label1',
          content: 'Rectangle',
          tooltip: {
              content: 'Rectangle',
              position: 'TopRight',
              relativeMode: 'Object',
          },
          constraints: ej.diagrams.AnnotationConstraints.Tooltip,
      }],
}]

diagram = new ej.diagrams.Diagram(
  {
    width: '650px',
    height: '350px',
    nodes: nodes,
   
  },

  '#element'
);
