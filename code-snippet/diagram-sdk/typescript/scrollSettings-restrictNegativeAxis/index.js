var nodes = [
  {
    id: 'negativeNode',
    offsetX: -150,
    offsetY: -100,
    width: 140,
    height: 60,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [{ content: 'Negative Region Node' }],
  },
  {
    id: 'positiveNode',
    offsetX: 250,
    offsetY: 150,
    width: 140,
    height: 60,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [{ content: 'Positive Region Node' }],
  },
];
var connectors = [
  { id: 'connector1', sourceID: 'negativeNode', targetID: 'positiveNode' },
];
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    nodes: nodes,
    connectors: connectors,
    tool: ej.diagrams.DiagramTools.ZoomPan,
    rulerSettings: { showRulers: true },
    scrollSettings: { restrictNegativeAxis: false },
  },
  '#element'
);
// Initialize CheckBox to dynamically toggle restrictNegativeAxis at runtime
var checkBox = new ej.buttons.CheckBox({
  label: 'Restrict Negative Axis',
  checked: false,
  change: function (args) {
    diagram.scrollSettings.restrictNegativeAxis = args.checked;
    diagram.dataBind();
  },
});
checkBox.appendTo('#restrictNegativeAxis');
