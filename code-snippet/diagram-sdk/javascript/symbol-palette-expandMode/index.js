//Initialize the basicshapes for the symbol palette
function getBasicShapes() {
  var basicShapes = [
    {
      id: 'Rectangle',
      shape: { type: 'Basic', shape: 'Rectangle' },
      style: { strokeWidth: 2 },
    },
    {
      id: 'Ellipse',
      shape: { type: 'Basic', shape: 'RightTriangle' },
      style: { strokeWidth: 2 },
    },
    {
      id: 'Hexagon',
      shape: { type: 'Basic', shape: 'Hexagon' },
      style: { strokeWidth: 2 },
    },
  ];
  return basicShapes;
}
//Initialize the flowshapes for the symbol palette
function getFlowShapes() {
  var flowShapes = [
    {
      id: 'Process',
      shape: { type: 'Flow', shape: 'Process' },
      style: { strokeWidth: 2 },
    },
    {
      id: 'Document',
      shape: { type: 'Flow', shape: 'Document' },
      style: { strokeWidth: 2 },
    },
  ];
  return flowShapes;
}
//Initialize connectors for symbol palette
function getConnectors() {
  var connectors = [
    {
      id: 'Straight',
      type: 'Straight',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' },
      },
      style: { strokeWidth: 1, strokeColor: '#757575' },
    },
    {
      id: 'Orthogonal',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 1, strokeColor: '#757575' },
      targetDecorator: { shape: 'Arrow' },
    },
    {
      id: 'Bezier',
      type: 'Bezier',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' },
      },
      style: { strokeWidth: 1, strokeColor: '#757575' },
    },
  ];
  return connectors;
}
var palette = new ej.diagrams.SymbolPalette({
  //Expands only one palette at a time
  expandMode: 'Single',
  palettes: [
    {
      id: 'flow',
      expanded: true,
      symbols: getFlowShapes(),
      title: 'Flow Shapes',
    },
    {
      id: 'basic',
      expanded: true,
      symbols: getBasicShapes(),
      title: 'Basic Shapes',
    },
    {
      id: 'connectors',
      expanded: true,
      symbols: getConnectors(),
      title: 'Connectors',
    },
  ],
  width: '100%',
  height: '100%',
});
palette.appendTo('#element');
