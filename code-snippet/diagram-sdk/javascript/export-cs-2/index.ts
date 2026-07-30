/**
 * Export
 */

import {
  PrintAndExport,
  Diagram,
  NodeModel,
  SnapConstraints,
  IExportOptions,
} from '@syncfusion/ej2-diagrams';

Diagram.Inject(PrintAndExport);

let diagram: Diagram;

//click event to export the diagram objects.
(document.getElementById('print') as HTMLInputElement).onclick = () => {
  let exportOptions: IExportOptions = {};
  //Sets the margin for the exported image
  exportOptions.margin = { left: 100, top: 100, bottom: 100, right: 100 };
  diagram.exportDiagram(exportOptions);
};

let nodes: NodeModel[] = [
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

//initialization of the Diagram.
diagram = new Diagram({
  width: '100%',
  height: '580px',
  nodes: nodes,
  snapSettings: { constraints: SnapConstraints.None },
});
diagram.appendTo('#element');
