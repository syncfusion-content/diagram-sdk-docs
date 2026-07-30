/**
 * Export
 */
ej.diagrams.Diagram.Inject(ej.diagrams.PrintAndExport);
var diagram;
//click event to export the diagram objects.
document.getElementById('export').onclick = () => {
  let exportOptions = {};
  //Sets the multiple page as true for exporting image.
  exportOptions.multiplePage = true;
  exportOptions.region = 'PageSettings';
  diagram.exportDiagram(exportOptions);
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
    offsetX: 500,
    offsetY: 100,
    shape: { type: 'Basic', shape: 'Diamond' },
    style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
    annotations: [{ content: 'Node 2' }],
  },
];

//initialize the diagram control
diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '580px',
  nodes: nodes,
  pageSettings: {
    width: 400,
    height: 300,
    showPageBreaks: true,
    multiplePage: true,
  },
  snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
});

diagram.appendTo('#element');
