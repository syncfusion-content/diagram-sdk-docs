var node = {
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  style: {
    fill: '#6BA5D7',
    strokeColor: 'white',
  },
  // Sets the annotation for the node
  annotations: [
    {
      // Sets the content for the annotation
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

document.getElementById('updateOffset').onclick = () =>{
  diagram.nodes[0].annotations[0].offset = {x:0, y:0.5};
  //To reflect the changes instantly
  diagram.dataBind();
}