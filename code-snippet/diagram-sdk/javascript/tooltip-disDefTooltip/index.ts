import { Diagram, SelectorConstraints } from '@syncfusion/ej2-diagrams';
//Initializes the diagram component
let diagram: Diagram = new Diagram(
  {
    width: '100%',
    height: '350px',
    selectedItems: {
      //To disable default tooltip
      constraints: SelectorConstraints.All & ~SelectorConstraints.ToolTip,
    },
    //Defines nodes
    nodes: [
      {
        id: 'node1',
        width: 100,
        height: 100,
        annotations: [
          {
            id: 'label',
            content: 'Default tooltip disabled',
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
        offsetY: 200,
        style: {
          strokeColor: '#6BA5D7',
          fill: '#6BA5D7',
        },
      },
    ],
  },
  '#element'
);
