import {
  Diagram,
  DiagramRegions,
  IPrintOptions,
  NodeModel,
  PrintAndExport,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(PrintAndExport);
// A node is created and stored in nodes array.
let nodes: NodeModel[] = [
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
// initialize Diagram component
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  pageSettings: { width: 200, height: 200 },
});
// render initialized Diagram
diagram.appendTo('#element');

(document.getElementById('print') as HTMLInputElement).onclick = () => {
  let region = (document.getElementById('region') as HTMLInputElement).value;
  //Print options to customize the print region
  let options: IPrintOptions = {};
  options.region = region as DiagramRegions;
  diagram.print(options);
};
