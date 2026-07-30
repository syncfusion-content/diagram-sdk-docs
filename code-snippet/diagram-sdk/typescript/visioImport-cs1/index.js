ej.diagrams.Diagram.Inject(ej.diagrams.ImportAndExportVisio);

var uploadObject = new ej.inputs.Uploader({
    asyncSettings: {
        saveUrl:
            'https://services.syncfusion.com/js/production/api/FileUploader/Save',
        removeUrl:
            'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
    },
    success: onUploadSuccess,
});

// render initialized Uploader
uploadObject.appendTo('#fileupload');

async function onUploadSuccess(args) {
    var file = args.file;
    var rawFile = file.rawFile;
    const warnings = await diagram.importFromVisio(rawFile, { pageIndex: 0 });
    if (warnings.length) {
        for (var i = 0; i < warnings.length - 1; i++) {
            console.warn(warnings[i]);
        }
    }

}

function diagramImporting(args) {
    if (args.status === 'started') {
        // Import has started: show a loader / disable UI
    } else if (args.status === 'completed') {
        // Import completed: hide loader / enable UI
    } else if (args.status === 'failed') {
        console.error('Visio import failed.', args);
    }
}

var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '700px',
    diagramImporting: diagramImporting
});

diagram.appendTo('#element');
