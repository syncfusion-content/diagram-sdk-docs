import { SymbolPalette, ConnectorModel } from '@syncfusion/ej2-diagrams';

function getConnectors() {
  var connectors: ConnectorModel[] = [
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
//Initializes the symbol palette
let palette: SymbolPalette = new SymbolPalette({
  //Expands only one palette at a time
  expandMode: 'Single',
  palettes: [
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
