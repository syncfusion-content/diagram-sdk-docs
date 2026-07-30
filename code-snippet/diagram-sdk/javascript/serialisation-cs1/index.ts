import { Uploader } from '@syncfusion/ej2-inputs';
import { Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';

// initialize Uploader component
let uploadObject: Uploader = new Uploader({
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
function onUploadSuccess(args) {
  var file1 = args.file;
  var file = file1.rawFile;
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onloadend = loadDiagram;
}
let nodes: NodeModel[] = [
  {
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [
      {
        id: 'label1',
        content: 'Start',
      },
    ],
    shape: {
      type: 'Flow',
      shape: 'Terminator',
    },
  },
];

let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
});

diagram.appendTo('#element');

//Load the diagraming object.
function loadDiagram(event) {
  diagram.loadDiagram(event.target.result);
}

(document.getElementById('btnSave') as HTMLElement).onclick = function () {
  download(diagram.saveDiagram());
};
//save the diagram object in json data.
function download(data: string): void {
  if ((window.navigator as any).msSaveBlob) {
    let blob: any = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
    (window.navigator as any).msSaveBlob(blob, 'Diagram.json');
  } else {
    let dataStr: string =
      'data:text/json;charset=utf-8,' + encodeURIComponent(data);
    let a: HTMLAnchorElement = document.createElement('a');
    a.href = dataStr;
    a.download = 'Diagram.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
}
