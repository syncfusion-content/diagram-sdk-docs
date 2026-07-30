var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    // Flip the node in Horizontal Direction
    flip: ej.diagrams.FlipDirection.Horizontal,
    shape: {
      type: 'Basic',
      shape: 'RightTriangle',
    },
    style: {
      fill: '#6BA5D7',
      strokeDashArray: '5,5',
    },
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

  document.getElementById('flipHorizontal').onclick = () => {
    // Flips the node horizontally.
    diagram.nodes[0].flip ^= ej.diagrams.FlipDirection.Horizontal;
    diagram.dataBind();
  }
  document.getElementById('flipVertical').onclick = () => {
    // Flips the node vertically.
    diagram.nodes[0].flip ^= ej.diagrams.FlipDirection.Vertical;
    diagram.dataBind();
  }
    
  document.getElementById('flipBoth').onclick = () => {
    // Flips the node horizontally and vertically.
    diagram.nodes[0].flip ^= ej.diagrams.FlipDirection.Both;
    diagram.dataBind();
  }
  document.getElementById('flipNone').onclick = () => {
    // No flip applied to the node.
    diagram.nodes[0].flip = ej.diagrams.FlipDirection.None;
    diagram.dataBind();
  }
    
  