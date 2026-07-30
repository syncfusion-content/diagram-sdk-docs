ej.base.enableRipple(true);
ej.diagrams.Diagram.Inject(
  ej.diagrams.BpmnDiagrams,
  ej.diagrams.UndoRedo,
  ej.diagrams.DiagramContextMenu
);
ej.diagrams.SymbolPalette.Inject(ej.diagrams.BpmnDiagrams);
var diagram;

var bpmnShapes = [
  {
    id: 'Start',
    width: 35,
    height: 35,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'Start' },
    },
  },
  {
    id: 'Gateway',
    width: 35,
    height: 35,
    offsetX: 100,
    offsetY: 100,
    shape: { type: 'Bpmn', shape: 'Gateway', gateway: { type: 'Exclusive' } },
  },
  {
    id: 'DataObject',
    width: 35,
    height: 35,
    offsetX: 500,
    offsetY: 100,
    shape: {
      type: 'Bpmn',
      shape: 'DataObject',
      dataObject: { collection: false, type: 'None' },
    },
  },
  {
    id: 'textAnnotation',
    width: 35,
    height: 35,
    shape: {
      type: 'Bpmn',
      shape: 'TextAnnotation',
    },
    annotations: [{ content: 'textAnnotation' }],
  },
];

function dragEnter(args) {
  var obj = args.element;
  if (obj instanceof ej.diagrams.Node) {
    if (!obj.shape.activity.subProcess.collapsed) {
      obj.shape.activity.subProcess.transaction.cancel.visible = true;
      obj.shape.activity.subProcess.transaction.failure.visible = true;
      obj.shape.activity.subProcess.transaction.success.visible = true;
    } else {
      var oWidth = obj.width;
      var oHeight = obj.height;
      var ratio = 100 / obj.width;
      obj.width = 100;
      obj.height *= ratio;
      obj.offsetX += (obj.width - oWidth) / 2;
      obj.offsetY += (obj.height - oHeight) / 2;
    }
  }
}

diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '445px',
  snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
  dragEnter: dragEnter,
});
diagram.appendTo('#element');
diagram.fitToPage();

var palette = new ej.diagrams.SymbolPalette({
  expandMode: 'Multiple',
  symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
  symbolHeight: 60,
  symbolWidth: 60,
  palettes: [
    {
      id: 'Bpmn',
      expanded: true,
      symbols: bpmnShapes,
      iconCss: 'shapes',
      title: 'BPMN Shapes',
    },
  ],
  width: '100%',
  height: '471px',
  getNodeDefaults: function (symbol) {
    symbol.style.strokeColor = '#757575';
  },
});
palette.appendTo('#palette');
