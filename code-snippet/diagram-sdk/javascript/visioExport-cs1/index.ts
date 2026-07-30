import { Diagram, ImportAndExportVisio, VisioExportOptions, IExportingEventArgs, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';

Diagram.Inject(ImportAndExportVisio);

function diagramExporting(args: IExportingEventArgs): void {
  if (args.status === 'started') {
    // Export has started: show loader / disable UI
  }
  else if (args.status === 'completed') {
    // Export completed: hide loader / enable UI
  }
  else if (args.status === 'failed') {
    // Export failed: show error message
    console.error('Visio export failed.', args);
  }
};

let nodes: NodeModel[] = [
  {
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 200,
    annotations: [
      {
        content: 'Start',
      }
    ],
    ports: [{
      id: 'port1',
      offset: {
        x: 1,
        y: 0.5
      }
    }],
    style: { fill: '#2AA8D9', strokeColor: 'grey' }
  },
  {
    id: 'End',
    width: 100,
    height: 100,
    offsetX: 600,
    offsetY: 200,
    annotations: [
      {
        content: 'End',

      }
    ],
    style: { fill: '#2AA8D9', strokeColor: 'grey' }
  }
];

let connectors: ConnectorModel[] = [
  {
    id: 'connector1',
    sourceID: 'Start',
    sourcePortID: 'port1',
    targetID: 'End',
    annotations: [
      {
        content: 'Connect',
        alignment: 'Before',
        displacement: { y: 10 },
      }
    ]
  }
];

const diagram: Diagram = new Diagram({
  width: '100%',
  height: '700px',
  nodes: nodes,
  connectors: connectors,
  diagramExporting: diagramExporting
});


// render initialized diagram
diagram.appendTo('#element');

const exportBtn = document.getElementById('export');
if (exportBtn) {
  exportBtn.addEventListener('click', function (e) {
    let exportOptions: VisioExportOptions = {};
    exportOptions.fileName = 'diagram1.vsdx';
    exportOptions.pageName = 'page1';
    diagram.exportToVisio(exportOptions);
  });
};
