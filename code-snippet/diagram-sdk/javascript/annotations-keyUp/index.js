var node = {
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  style: { fill: '#6BA5D7', strokeColor: 'white' },
  annotations: [{ content: 'Center' }],
};
// initialize Diagram component
let color = 'pink';
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: [node],
    keyUp: function (args) {
      //customize
      if (color === 'pink') {
        color = 'yellow';
        diagram.nodes[0].style.fill = 'red';
        diagram.dataBind();
      } else {
        color = 'pink';
        diagram.nodes[0].style.fill = 'pink';
        diagram.dataBind();
      }
    },
  },
  '#element'
);
