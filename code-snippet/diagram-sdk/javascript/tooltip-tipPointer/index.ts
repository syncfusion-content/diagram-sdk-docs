/**
 * Tooltip sample
 */
import { Diagram, NodeConstraints } from '@syncfusion/ej2-diagrams';

var diagram;
diagram = new Diagram(
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
            content: 'Tooltip pointer hidden',
            offset: {
              x: 0.5,
              y: 0.5,
            },
            style: {
              color: 'white',
            },
          },
        ],
        offsetX: 100,
        offsetY: 100,
        style: {
          strokeColor: '#6BA5D7',
          fill: '#6BA5D7',
        },
        constraints:NodeConstraints.Default |NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
          content: 'Tooltip pointer hidden',
          position: 'BottomCenter',
          relativeMode: 'Object',
          //Hide tip pointer
          showTipPointer: false,
        },
      },
      {
        id: 'node2',
        width: 100,
        height: 100,
        annotations: [
          {
            id: 'label',
            content: 'Tooltip pointer visible',
            offset: {
              x: 0.5,
              y: 0.5,
            },
            style: {
              color: 'white',
            },
          },
        ],
        offsetX: 300,
        offsetY: 100,
        style: {
          strokeColor: '#6BA5D7',
          fill: '#6BA5D7',
        },
        constraints:NodeConstraints.Default |NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
          content: 'Tooltip pointer visible',
          position: 'BottomCenter',
          relativeMode: 'Object',
          //Show tip pointer
          showTipPointer: true,
        },
      },
    ],
  },
  '#element'
);
