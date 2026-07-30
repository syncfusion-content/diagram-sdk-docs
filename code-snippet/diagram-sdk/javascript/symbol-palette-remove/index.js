/**
 * Default symbol palette sample
 */
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
      id: 'Decision',
      shape: { type: 'Flow', shape: 'Decision' },
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

document.getElementById('removeBasicShape').onclick = () => {
  /**
   * parameter 1 - The ID of the palette where the shape to be removed.
   * parameter 2 - ID of the shape to be removed
   */
  let id = symbolPalette.palettes[0].symbols[0]?.id;
  symbolPalette.removePaletteItem('basic', id);
};

document.getElementById('removeFlowShape').onclick = () => {
  let id = symbolPalette.palettes[1].symbols[0]?.id;
  /**
   * parameter 1 - The ID of the palette where the shape to be removed.
   * parameter 2 - ID of the shape to be removed
   */
  symbolPalette.removePaletteItem('flow', id);
};
