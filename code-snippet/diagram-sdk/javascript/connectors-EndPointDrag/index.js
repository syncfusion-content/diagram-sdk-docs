var connectors = [
    {
      id: 'connector1',
      style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2,
      },
      targetDecorator: {
        style: {
          fill: '#6BA5D7',
          strokeColor: '#6BA5D7',
        },
      },
      sourcePoint: {
        x: 100,
        y: 100,
      },
      targetPoint: {
        x: 200,
        y: 200,
      },
    },
  ];
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: '100%',
      height: '600px',
      connectors: connectors,
    },
    '#element'
  );
  
  document.getElementById('sourcePoint').onclick = () => {
    let connector = diagram.connectors[0];
    connector.sourcePoint = { x: 300, y: 100 };
    diagram.dataBind();
  };
  document.getElementById('targetPoint').onclick = () => {
    let connector = diagram.connectors[0];
    connector.targetPoint = { x: 300, y: 200 };
    diagram.dataBind();
  };
  
  document.getElementById('dragSourceEnd').onclick = () => {
    /**
     * parameter 1 - connector whose source point needs to be moved.
     * parameter 2 - A number representing the horizontal distance by which the source point should be moved.
     * parameter 3 - A number representing the vertical distance by which the source point should be moved.
     */
    diagram.dragSourceEnd(diagram.connectors[0], 50, 50);
  };
  
  document.getElementById('dragTargetEnd').onclick = () => {
    /**
     * parameter 1 - connector whose target point needs to be moved.
     * parameter 2 - A number representing the horizontal distance by which the target point should be moved.
     * parameter 3 - A number representing the vertical distance by which the target point should be moved.
     */
    diagram.dragTargetEnd(diagram.connectors[0], 50, 50);
  };