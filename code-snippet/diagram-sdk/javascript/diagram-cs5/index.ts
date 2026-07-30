import { Diagram, PortVisibility } from '@syncfusion/ej2-diagrams';
//Initializes the Diagram component
let diagram: Diagram = new Diagram(
  {
    width: '100%',
    height: '350px',
    //Defines nodes
    nodes: [
      {
        id: 'node1',
        width: 100,
        height: 100,
        annotations: [
          {
            content: 'Node 1',
            horizontalAlignment: 'Right',
            verticalAlignment: 'Top',
          },
        ],
        offsetX: 200,
        offsetY: 100,
        style: {
          strokeColor: '#6BA5D7',
          fill: '#6BA5D7',
        },
        ports: [
          {
            id: 'p1',
            offset: { x: 0.5, y: 0 },
            horizontalAlignment: 'Right',
            verticalAlignment: 'Bottom',
            visibility: PortVisibility.Visible,
          },
        ],
      },
    ],
    //Disables inversed alignment of port and annotation
    diagramSettings: { inversedAlignment: false },
  },
  '#element'
);
