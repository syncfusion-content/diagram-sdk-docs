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
        annotations: [{ content: 'Node 1' }],
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

document.getElementById('showTooltip').onclick = () => {
  /**
   * parameter -  The object for which the tooltip will be shown.
   */
  diagram.showTooltip(diagram.nodes[0]);
};

document.getElementById('hideTooltip').onclick = () => {
  /**
   * parameter - The object for which the tooltip should be hidden.
   */
  diagram.hideTooltip(diagram.nodes[0]);
};
