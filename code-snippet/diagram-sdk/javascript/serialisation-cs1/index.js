// initialize Uploader component
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
  function onUploadSuccess(args) {
    var file1 = args.file;
    var file = file1.rawFile;
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onloadend = loadDiagram;
  }
  
  var nodes = [
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
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: nodes,
    },
    '#element'
  );
  //Load the diagraming object.
  function loadDiagram(event) {
    diagram.loadDiagram(event.target.result);
  }
  
  document.getElementById('btnSave').onclick = function () {
    download(diagram.saveDiagram());
  };
  //save the diagram object in json data.
  function download(data) {
    if (window.navigator.msSaveBlob) {
      var blob = new Blob([data], { type: 'data:text/json;charset=utf-8,' });
      window.navigator.msSaveOrOpenBlob(blob, 'Diagram.json');
    } else {
      var dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(data);
      var a = document.createElement('a');
      a.href = dataStr;
      a.download = 'Diagram.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
    }
  }
  