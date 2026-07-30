import { NodeModel, randomId, SymbolPalette } from '@syncfusion/ej2-diagrams';
//Initialize basic shapes palette
function getBasicShapes(): NodeModel[] {
  let basicShapes: NodeModel[] = [
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
  var flowShapes: NodeModel[] = [
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
let symbolPalette: SymbolPalette = new SymbolPalette({
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
  height: '100%',
  width: '100%',
});
symbolPalette.appendTo('#element');

(document.getElementById('addBasicShape') as HTMLInputElement).onclick = () => {
  let node: NodeModel = {
    id: 'Plus' + randomId(),
    shape: { type: 'Basic', shape: 'Plus' },
  };
  /**
   * parameter 1 - The ID of the palette where the new shape is to be added.
   * parameter 2 - node/connector to be added
   */
  symbolPalette.addPaletteItem('basic', node);
};

(document.getElementById('addFlowShape') as HTMLInputElement).onclick = () => {
  let node: NodeModel = {
    id: 'Decision' + randomId(),
    shape: { type: 'Flow', shape: 'Decision' },
  };
  /**
   * parameter 1 - The ID of the palette where the new shape is to be added.
   * parameter 2 - node/connector to be added
   */
  symbolPalette.addPaletteItem('flow', node);
};
