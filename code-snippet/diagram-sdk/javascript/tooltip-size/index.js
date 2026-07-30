/**
 * Tooltip sample
 */
var diagram;
diagram = new ej.diagrams.Diagram(
  {
    width: '650px',
    height: '350px',
    //Defines nodes
    nodes: [
      {
        id: 'node1',
        width: 100,
        height: 100,
        annotations: [
          {
            id: 'label',
            content: 'Rectangle',
            offset: {
              x: 0.5,
              y: 0.5,
            },
            style: {
              color: 'white',
            },
          },
        ],
        offsetX: 200,
        offsetY: 100,
        style: {
          strokeColor: '#6BA5D7',
          fill: '#6BA5D7',
        },
        constraints:
          ej.diagrams.NodeConstraints.Default |
          ej.diagrams.NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
          content:
            'Syncfusion diagram nodes, connectors look and feel can also be customized any way you want. The JavaScript Diagram control provides a rich set of properties through which you can customize connector color, thickness, dash and dot appearance, corners, and even decorators',
          position: 'BottomCenter',
          relativeMode: 'Object',
          //Set size for tooltip
          width: 300,
          height: 100,
        },
      },
    ],
  },
  '#element'
);
