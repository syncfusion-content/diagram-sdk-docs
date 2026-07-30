import { Diagram, NodeConstraints } from '@syncfusion/ej2-diagrams';

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
        annotations: [{ content: 'Node 1' }],
        offsetX: 200,
        offsetY: 100,
        style: {
          strokeColor: '#6BA5D7',
          fill: '#6BA5D7',
        },
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
          content: 'Node1',
          position: 'BottomCenter',
          relativeMode: 'Object',
          //To show tooltip on button click
          openOn: 'Custom',
        },
      },
    ],
  },
  '#element'
);

(document.getElementById('showTooltip') as HTMLInputElement).onclick = () => {
  /**
   * parameter -  The object for which the tooltip will be shown.
   */
  diagram.showTooltip(diagram.nodes[0]);
};

(document.getElementById('hideTooltip') as HTMLInputElement).onclick = () => {
  /**
   * parameter - The object for which the tooltip should be hidden.
   */
  diagram.hideTooltip(diagram.nodes[0]);
};
