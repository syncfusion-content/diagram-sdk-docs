var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    });
diagram.appendTo('#element');



document.getElementById('addAnnotation').onclick = () => {
    var annotation =  [{ id: 'label1', content: 'Annotation' }]
    //Parameters of addLabels method
    //1. Node - Node to add the annotation
    //2. Annotation - Annotation to be added to the node
    diagram.addLabels(diagram.nodes[0], annotation);
    diagram.dataBind();
};
