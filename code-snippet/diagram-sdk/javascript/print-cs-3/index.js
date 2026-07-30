/**
 * Print
 */
ej.diagrams.Diagram.Inject(ej.diagrams.PrintAndExport);
var diagram;
//click event to perform printing the diagram objects.
document.getElementById('print').onclick = () => {
  let printOptions = {};
  //pageWidth and pageHeight
  printOptions.pageHeight = 700;
  printOptions.pageWidth = 1000;
  diagram.print(printOptions);
};

var nodes = [
  {
    id: 'node1',
    width: 100,
    height: 50,
    offsetX: 100,
    offsetY: 100,
    style: { strokeColor: '#868686', fill: '#d5f5d5' },
    annotations: [{ content: 'Node 1' }],
  },

  {
    id: 'node2',
    width: 100,
    height: 75,
    offsetX: 100,
    offsetY: 225,
    shape: { type: 'Basic', shape: 'Diamond' },
    style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
    annotations: [{ content: 'Node 2' }],
  },
  {
    id: 'node3',
    width: 135,
    height: 50,
    offsetX: 400,
    offsetY: 425,
    style: { strokeColor: '#a8a8a8', fill: '#faebee' },
    annotations: [{ content: 'Node 3' }],
  },
  {
    id: 'node4',
    width: 125,
    height: 50,
    offsetX: 400,
    offsetY: 525,
    shape: { type: 'Basic', shape: 'Ellipse' },
    style: { strokeColor: '#a8a8a8', fill: '#fef0db' },
    annotations: [{ content: 'Node 4' }],
  },
];

//initialize the diagram control
diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '580px',
  nodes: nodes,
  snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
});

diagram.appendTo('#element');
