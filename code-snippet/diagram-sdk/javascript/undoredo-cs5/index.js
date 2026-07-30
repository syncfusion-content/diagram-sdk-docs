ej.diagrams.Diagram.Inject(ej.diagrams.UndoRedo);
var nodes = [
    {
        id: 'Start', width: 140, height: 50, offsetX: 300, offsetY: 50,
        annotations: [{
            id: 'label1',
            content: 'Start'
        }],
        shape: { type: 'Flow', shape: 'Terminator'}
    }
];

var diagram= new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes
},'#element');

//Creates a custom entry and adds that to history manager

 var entry = { undoObject: diagram.nodes[0] };
    diagram.historyList.push(entry);
    diagram.dataBind();

// Reverts the last action performed
diagram.undo();

// Restores the last undone action
diagram.redo();

