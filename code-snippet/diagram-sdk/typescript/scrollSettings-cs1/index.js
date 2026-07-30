var diagram;
diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '700px',
    rulerSettings: { showRulers: true },
    scrollSettings: {
      //To scroll the diagram infinitely
      scrollLimit: 'Infinity',
    },
    created: created,
  },
  '#element'
);
function created() {
  setTimeout(() => {
    diagram.scrollSettings.horizontalOffset = 100;
    diagram.scrollSettings.verticalOffset = 100;
    diagram.dataBind();
  });
}
