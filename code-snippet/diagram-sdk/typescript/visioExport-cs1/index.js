ej.diagrams.Diagram.Inject(ej.diagrams.ImportAndExportVisio);

function diagramExporting(args) {
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

var nodes = [
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

var connectors = [
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
// initialize diagram component
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: nodes,
    connectors: connectors,
    diagramExporting: diagramExporting
  },

  '#element'
);

document.getElementById('export').onclick = () => {
    let exportOptions = {};
    exportOptions.fileName = 'diagram1.vsdx';
    exportOptions.pageName = 'page1';
    diagram.exportToVisio(exportOptions);
};
