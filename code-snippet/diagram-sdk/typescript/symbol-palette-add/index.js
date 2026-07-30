
//Initialize basic shapes palette
function getBasicShapes() {
  var basicShapes = [
    {
      id: 'Rectangle',
      shape: { type: 'Basic', shape: 'Rectangle' },
      style: { strokeWidth: 2 },
    },
    {
      id: 'Ellipse',
      shape: { type: 'Basic', shape: 'Ellipse' },
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
//Initializes the symbol palette
var symbolPalette = new ej.diagrams.SymbolPalette({
  palettes: [
    {
      id: 'basic',
      expanded: true,
      symbols: getBasicShapes(),
      title: 'Basic Shapes',
    },
    {
      id: 'flow',
      expanded: true,
      symbols: getFlowShapes(),
      title: 'Flow shapes',
    },
  ],
  symbolHeight: 50,
  symbolWidth: 50,
  symbolPreview: { width: 100, height: 100 },
  expandMode: 'Multiple',
  height: '400px',
  width: '100%',
});
symbolPalette.appendTo('#element');

document.getElementById('addBasicShape').onclick = () => {
  let node = {
    id: 'Plus' + ej.diagrams.randomId(),
    shape: { type: 'Basic', shape: 'Plus' },
  };
  /**
   * parameter 1 - The ID of the palette where the new shape is to be added.
   * parameter 2 - node/connector to be added
   */
  symbolPalette.addPaletteItem('basic', node);
};

document.getElementById('addFlowShape').onclick = () => {
  let node = {
    id: 'Decision' + ej.diagrams.randomId(),
    shape: { type: 'Flow', shape: 'Decision' },
  };
  /**
   * parameter 1 - The ID of the palette where the new shape is to be added.
   * parameter 2 - node/connector to be added
   */
  symbolPalette.addPaletteItem('flow', node);
};
