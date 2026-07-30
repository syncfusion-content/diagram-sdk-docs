/**
 * Default symbol palette sample
 */
//Initialize the flowshapes for the symbol palatte
var flowShapes = [
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
var palette = new ej.diagrams.SymbolPalette({
  palettes: [
    {
      id: 'flow',
      symbols: flowShapes,
      title: 'Flow Shapes',
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

var diagram = new ej.diagrams.Diagram(
  {
    width: 1000,
    height: 500,
  },
  '#diagram'
);
