// A node is created and stored in nodes array.
var nodes = [
  {
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    annotations: [{ content: 'Node 1' }],
  },

  {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 130,
    annotations: [{ content: 'Node 2' }],
  },
];
// initialize diagram component
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: nodes,
    pageSettings: { width: 200, height: 200 },
  },

  '#element'
);

document.getElementById('print').onclick = () => {
  let region = document.getElementById('region').value;
  //Print options to customize the print region
  var printOptions = {
    region: region,
  };
  diagram.print(printOptions);
};
