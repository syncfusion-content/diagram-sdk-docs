import { NodeModel, SymbolPalette } from '@syncfusion/ej2-diagrams';
//Initialize the flowshapes for the symbol palette
function getFlowShapes(): NodeModel[] {
  let flowShapes: NodeModel[] = [
    {
      id: 'process',
      shape: {
        type: 'Flow',
        shape: 'Process',
      },
    },
    {
      id: 'document',
      shape: {
        type: 'Flow',
        shape: 'Document',
      },
    },
    {
      id: 'predefinedprocess',
      shape: {
        type: 'Flow',
        shape: 'PreDefinedProcess',
      },
    },
  ];
  return flowShapes;
}
//Initialize the basic shapes for the symbol palette
function getBasicShapes(): NodeModel[] {
  let nodes: NodeModel[] = [
    {
      id: 'rectangle',
      shape: {
        type: 'Basic',
        shape: 'Rectangle',
      },
    },
    {
      id: 'plus',
      shape: {
        type: 'Basic',
        shape: 'Plus',
      },
    },
    {
      id: 'triangle',
      shape: {
        type: 'Basic',
        shape: 'RightTriangle',
      },
    },
  ];
  return nodes;
}
//Initialize the connectors for the symbol palette
function getConnectors() {
  let connectors = [
    {
      id: 'Link1',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 1, strokeColor: '#757575' },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' },
      },
    },
    {
      id: 'link3',
      type: 'Orthogonal',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: 'None' },
      style: { strokeWidth: 1, strokeColor: '#757575' },
    },
    {
      id: 'Link21',
      type: 'Straight',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      style: { strokeWidth: 1, strokeColor: '#757575' },
      targetDecorator: {
        shape: 'Arrow',
        style: { strokeColor: '#757575', fill: '#757575' },
      },
    },
    {
      id: 'link23',
      type: 'Straight',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: 'None' },
      style: { strokeWidth: 1, strokeColor: '#757575' },
    },
    {
      id: 'link33',
      type: 'Bezier',
      sourcePoint: { x: 0, y: 0 },
      targetPoint: { x: 60, y: 60 },
      targetDecorator: { shape: 'None' },
      style: { strokeWidth: 1, strokeColor: '#757575' },
    },
  ];
  return connectors;
}
//Initializes the symbol palette
let palette: SymbolPalette = new SymbolPalette({
  expandMode: 'Multiple',
  enablePersistence: true,

  palettes: [
    {
      id: 'flow',
      symbols: getFlowShapes(),
      title: 'Flow Shapes',
    },
    {
      id: 'basic',
      symbols: getBasicShapes(),
      title: 'Basic Shapes',
    },
    {
      id: 'connectors',
      symbols: getConnectors(),
      title: 'Connectors',
    },
  ],
});
palette.appendTo('#element');

(document.getElementById('removePalette') as HTMLInputElement).onclick = () => {
  /**
   * parameter - The ID of palette to be removed in symbol palette.
   */
  palette.removePalette('basic');
  palette.refresh();
};

(document.getElementById('removePalettes') as HTMLInputElement).onclick = () => {
  let palettes: string[] = ['flow', 'connectors'];
  /**
   * parameter - The ID array of palettes to be removed in symbol palette.
   */
  palette.removePalettes(palettes);
  palette.refresh();
};
