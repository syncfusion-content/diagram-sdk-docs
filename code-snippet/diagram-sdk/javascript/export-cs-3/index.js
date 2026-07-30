/**
 * Export
 */
ej.diagrams.Diagram.Inject(ej.diagrams.PrintAndExport);
var diagram;
//click event to export the diagram objects.
document.getElementById('export').onclick = () => {
  let region = document.getElementById('region').value;
  let exportOptions = {};
  //Sets the region for the exported image.
  exportOptions.region = region;
  if (region === 'CustomBounds') {
    exportOptions.bounds = new ej.diagrams.Rect(0, 0, 300, 300);
  } else if (region === 'Content') {
    diagram.pageSettings = {};
  } else {
    diagram.pageSettings = { width: 500, height: 500 };
  }
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
