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
  },
  '#element'
);

document.getElementById('getDiagramContent').onclick = () => {
  /**
   * parameter (Optional) -  defines the collection of style files to be considered while exporting.
   */
  let content = diagram.getDiagramContent();
  console.log(content);
};
