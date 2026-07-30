


import {
    Diagram, NodeModel, ConnectorModel, UndoRedo
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
//Start to group the changes
diagram.startGroupAction();
//Makes the changes
let color: string[] = ['black', 'red', 'green', 'yellow']
for (var i = 0; i < color.length; i++) {
    // Updates the fillColor for all the child elements.
    diagram.nodes[0].style.fill = color[i];
    diagram.dataBind();
}
//Ends grouping the changes
diagram.endGroupAction();



