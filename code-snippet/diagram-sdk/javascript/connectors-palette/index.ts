


import {Diagram,ConnectorModel,SymbolPalette} from '@syncfusion/ej2-diagrams';

let diagram: Diagram;

diagram = new Diagram({
  width: '100%',
  height: '700px',
});
diagram.appendTo('#element');

let connectorSymbols: ConnectorModel[] = [
  {
    id: 'Link1',
    type: 'Orthogonal',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: {
      shape: 'Arrow',
      style: { strokeColor: '#757575', fill: '#757575' },
    },
    style: { strokeWidth: 2, strokeColor: '#757575' },
  },
  {
    id: 'Link2',
    type: 'Orthogonal',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: {
      shape: 'Arrow',
      style: { strokeColor: '#757575', fill: '#757575' },
    },
    style: { strokeWidth: 2, strokeDashArray: '4 4', strokeColor: '#757575' },
  },
  {
    id: 'Link3',
    type: 'Straight',
    sourcePoint: { x: 0, y: 0 },
    targetPoint: { x: 40, y: 40 },
    targetDecorator: {
      shape: 'Arrow',
      style: { strokeColor: '#757575', fill: '#757575' },
    },
    style: { strokeWidth: 2, strokeColor: '#757575' },
  },
];

let palette: SymbolPalette = new SymbolPalette({
  expandMode: 'Multiple',
  symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
  symbolHeight: 60,
  symbolWidth: 60,
  palettes: [
    {
      id: 'Connector',
      expanded: true,
      symbols: connectorSymbols,
      iconCss: 'shapes',
      title: 'Connectors',
    },
  ],
  width: '100%',
  height: '150px',
});
palette.appendTo('#palette');

