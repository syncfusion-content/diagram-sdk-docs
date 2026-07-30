import { SymbolPalette, NodeModel, Diagram } from '@syncfusion/ej2-diagrams';

let flowShapes: NodeModel[] = [
  { id: 'terminator', shape: { type: 'Flow', shape: 'Terminator' } },
  { id: 'process', shape: { type: 'Flow', shape: 'Process' } },
  { id: 'decision', shape: { type: 'Flow', shape: 'Decision' } },
  { id: 'document', shape: { type: 'Flow', shape: 'Document' } },
  {
    id: 'preDefinedProcess',
    shape: { type: 'Flow', shape: 'PreDefinedProcess' },
  },
  { id: 'paperTap', shape: { type: 'Flow', shape: 'PaperTap' } },
  { id: 'directData', shape: { type: 'Flow', shape: 'DirectData' } },
  { id: 'sequentialData', shape: { type: 'Flow', shape: 'SequentialData' } },
  { id: 'sort', shape: { type: 'Flow', shape: 'Sort' } },
];
//Initializes the symbol palette
let palette: SymbolPalette = new SymbolPalette({
  palettes: [
    {
      id: 'flow',
      expanded: true,
      symbols: flowShapes,
      title: 'Flow Nodes',
    },
  ],
  //Enables search option for symbol palette
  enableSearch: true,
  width: '100%',
  height: '100%',
  symbolHeight: 60,
  symbolWidth: 60,
});
palette.appendTo('#element');

let diagram = new Diagram(
  {
    width: 1000,
    height: 500,
  },
  '#diagram'
);
