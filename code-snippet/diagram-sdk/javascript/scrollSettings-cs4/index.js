var nodes = [{
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

var diagram = new ej.diagrams.Diagram({
        width: '100%',
    height: '600px',
    nodes: nodes,
    // set the autoScrollBorder
    scrollSettings:{canAutoScroll: true,autoScrollBorder:{left:100,right:100,top:100,bottom:100}},
    getNodeDefaults: (node) => {
        node.height =  100;
        node.width =  100;
        node.style.fill =  '#6BA5D7';
        node.style.strokeColor =  'white';
        return  node;
    }
},'#element');


