ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);
let nodes = [
  {
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    annotations: [
      {
        content: 'Node',
      },
    ],
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
    },
  },
];
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  historyChange: function (args) {
    document.getElementById('undo').disabled = !diagram.historyManager.canUndo;
    document.getElementById('redo').disabled = !diagram.historyManager.canRedo;
  },
});
diagram.appendTo('#element');

document.getElementById('undo').onclick = () => {
  diagram.undo();
};

document.getElementById('redo').onclick = () => {
  diagram.redo();
};