import {
  Diagram,
  NodeModel,
  UndoRedo
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(UndoRedo);
let node: NodeModel = {
  offsetX: 250,
  offsetY: 250,
  width: 100,
  height: 100,
  annotations: [
    {
      id: 'label1',
      content: 'Annotation',
    },
  ],
};
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  historyChange: function (args) {
    (document.getElementById('undo') as HTMLButtonElement).disabled = !diagram.historyManager.canUndo;
    (document.getElementById('redo') as HTMLButtonElement).disabled = !diagram.historyManager.canRedo;
  },
  nodes: [node],
});
(document.getElementById('undo') as HTMLInputElement).onclick =() => {
    diagram.undo();
  };
  (document.getElementById('redo') as HTMLInputElement).onclick =() => {
    diagram.redo();
  };
diagram.appendTo('#element');

