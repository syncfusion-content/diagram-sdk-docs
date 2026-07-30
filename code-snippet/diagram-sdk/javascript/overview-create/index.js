/**
 * OverView
 */

 // Initializtion of the diagram.
 let diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '790px',
    nodes: [{ id: 'node1', offsetX: 400, offsetY: 400, height: 100, width: 200 }],
    scrollSettings: { scrollLimit: 'Diagram' },
    // Sets the constraints of the SnapSettings
    snapSettings: { constraints: ej.diagrams.SnapConstraints.None },
  });
  diagram.appendTo('#element');
  
  // Initializtion of the Overview.
  let overview = new ej.diagrams.Overview({
    width: '300px',
    height: '150ppx',
    sourceID: 'element',
  });
  overview.appendTo('#overview');
  