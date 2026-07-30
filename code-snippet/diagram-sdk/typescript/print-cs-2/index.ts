/**
 * Print
 */

import {
  PrintAndExport,
  Diagram,
  NodeModel,
  SnapConstraints,
  IPrintOptions,
} from '@syncfusion/ej2-diagrams';

Diagram.Inject(PrintAndExport);

let diagram: Diagram;

//click event to perform printing the diagram objects.
(document.getElementById('print') as HTMLInputElement).onclick = () => {
  let printOptions: IPrintOptions = {};
  printOptions.region = 'PageSettings';
  printOptions.multiplePage = true;
  printOptions.margin = { left: 0, top: 0, bottom: 0, right: 0 };
  diagram.print(printOptions);
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

//initialization of the Diagram.
diagram = new Diagram({
  width: '100%',
  height: '580px',
  nodes: nodes,
  snapSettings: { constraints: SnapConstraints.None },
  pageSettings: {
    width: 300,
    height: 500,
    multiplePage: true,
    showPageBreaks: true,
  },
});
diagram.appendTo('#element');
