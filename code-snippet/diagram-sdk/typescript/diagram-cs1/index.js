ej.diagrams.Diagram.Inject(ej.diagrams.PrintAndExport);
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
      },
    ],
    //Custom cursors for Drag and select
    customCursor: [
      { action: 'Drag', cursor: '-webkit-grab' },
      { action: 'Select', cursor: 'pointer' },
    ],
  },
  '#element'
);

document.getElementById('getCursor').onclick = () => {
  /**
   * parameter 1 - The action for which the cursor is defined.
   * parameter 2 - Indicates whether the action is active.
   */
  let cursor = diagram.getCursor('Drag', false);
  console.log(cursor);
};
