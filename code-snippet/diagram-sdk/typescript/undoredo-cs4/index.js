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

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes
});

diagram.appendTo('#element');

//Start to group the changes
diagram.startGroupAction();

//Makes the changes
var color = ['black','red','green','yellow']
for (var i = 0; i < color.length; i++) {

	// Updates the fillColor for all the child elements.
	diagram.nodes[0].style.fill=color[i];
	diagram.dataBind();
}

//Ends grouping the changes
diagram.endGroupAction();

