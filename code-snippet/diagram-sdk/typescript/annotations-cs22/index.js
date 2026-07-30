var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    sstyle: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [
      {
        id: 'label1',
        content: 'Annotation',
      },
    ],
  };
  
  // initialize Diagram component
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      nodes: [node],
    },
    '#element'
  );
  document.getElementById('removeAnnotation').onclick = () => {
    let annotation = diagram.nodes[0].annotations;
    diagram.removeLabels(diagram.nodes[0], annotation);
  };
  