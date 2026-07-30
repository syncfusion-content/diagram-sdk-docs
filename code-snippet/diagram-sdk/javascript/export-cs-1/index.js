/**
 * Export
 */
ej.diagrams.Diagram.Inject(ej.diagrams.PrintAndExport);
var diagram;
//Dropdown to export the diagram objects.
document.getElementById('format').onchange = (args) => {
  let exportOptions = {};
  //Sets the export format
  exportOptions.format = args.target.value;
  exportOptions.fileName = 'Export';
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
    offsetX: 100,
    offsetY: 225,
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
  snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
});

diagram.appendTo('#element');
