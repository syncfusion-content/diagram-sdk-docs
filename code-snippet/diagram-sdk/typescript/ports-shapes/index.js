var node = {
  // Position of the node
  offsetX: 250,
  offsetY: 250,
  // Size of the node
  width: 100,
  height: 100,
  style: { fill: '#6BA5D7', strokeColor: 'white' },
  ports: [
    {
      offset: {
        x: 1,
        y: 0.5,
      },
      visibility: ej.diagrams.PortVisibility.Visible,
      width: 15,
      height: 15,
      // Sets the shape of the port as Circle
      shape: 'Circle',
    },
    {
      offset: {
        x: 0,
        y: 0.5,
      },
      visibility: ej.diagrams.PortVisibility.Visible,
      width: 15,
      height: 15,
      // Sets the shape of the port as Square
      shape: 'Square',
    },
    {
      offset: {
        x: 0.5,
        y: 0,
      },
      visibility: ej.diagrams.PortVisibility.Visible,
      width: 15,
      height: 15,
      // Sets the shape of the port as X
      shape: 'X',
    },
    {
      offset: {
        x: 0.5,
        y: 1,
      },
      visibility: ej.diagrams.PortVisibility.Visible,
      width: 25,
      height: 25,
      // Sets the shape of the port as Custom
      shape: 'Custom',
      pathData:
        'M50 10 L60 40 L90 40 L65 60 L75 90 L50 70 L25 90 L35 60 L10 40 L40 40 Z',
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
