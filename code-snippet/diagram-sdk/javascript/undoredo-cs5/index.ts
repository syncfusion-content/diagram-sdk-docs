


import {
    Diagram, NodeModel, ConnectorModel, UndoRedo,HistoryEntry
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(UndoRedo);
let nodes: NodeModel[] = [{
    id: 'Start',
    width: 140,
    height: 50,
    offsetX: 300,
    offsetY: 50,
    annotations: [{
        id: 'label1',
        content: 'Start'
    }],
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    }
}];
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: nodes,
    getNodeDefaults: (node: NodeModel) => {
        node.height =  100;
        node.width =  100;
        node.style.fill =  '#6BA5D7';
        node.style.strokeColor =  'white';
        return  node;
    }
});
diagram.appendTo('#element');
// canLog decide whether the entry add or not in history List
diagram.historyManager.canLog = function(entry: HistoryEntry) {
    entry.cancel = true;
    return entry;
}



