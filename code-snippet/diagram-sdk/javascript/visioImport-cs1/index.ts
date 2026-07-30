import { Diagram, ImportAndExportVisio, IImportingEventArgs } from '@syncfusion/ej2-diagrams';
import { Uploader } from '@syncfusion/ej2-inputs';

Diagram.Inject(ImportAndExportVisio);

let uploadObject: Uploader = new Uploader({
  asyncSettings: {
    saveUrl:
      'https://services.syncfusion.com/js/production/api/FileUploader/Save',
    removeUrl:
      'https://services.syncfusion.com/js/production/api/FileUploader/Remove',
  },
  success: onUploadSuccess,
});

uploadObject.appendTo('#fileupload');

async function onUploadSuccess(args) {
  let file = args.file;
  let rawFile = file.rawFile;
  const warnings = await diagram.importFromVisio(rawFile, { pageIndex: 0 });
  if (warnings.length) {
    for (var i = 0; i < warnings.length - 1; i++) {
      console.warn(warnings[i]);
    }
  }
}

function diagramImporting(args: IImportingEventArgs): void {
  if (args.status === 'started') {
    // Import has started: show a loader / disable UI
  } else if (args.status === 'completed') {
    // Import completed: hide loader / enable UI
  } else if (args.status === 'failed') {
    console.error('Visio import failed.', args);
  }
}

const diagram: Diagram = new Diagram({
  width: '100%',
  height: '700px',
  diagramImporting: diagramImporting
});

diagram.appendTo('#element');

