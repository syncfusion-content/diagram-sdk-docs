import { NodeModel, SymbolPalette } from '@syncfusion/ej2-diagrams';
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
      id: 'swimlaneShapes',
      expanded: true,
      title: 'Swimlane Shapes',
      symbols: [
        {
          id: 'stackCanvas1',
          shape: {
            type: 'SwimLane',
            lanes: [
              {
                id: 'lane1',
                style: { fill: '#f5f5f5' },
                height: 60,
                width: 150,
                header: { width: 50, height: 50, style: { fill: '#C7D4DF' } },
              },
            ],
            orientation: 'Horizontal',
            isLane: true,
          },
          height: 60,
          width: 140,
          style: { fill: '#f5f5f5' },
          offsetX: 70,
          offsetY: 30,
        },
      ],
    },
    {
      id: 'basic',
      expanded: false,
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
  paletteExpanding: function (args) {
    if (args.palette.id === 'flow' || args.palette.id === 'basic') {
      // Basic shapes panel does not expand and flow shape panel does not collapse
      args.cancel = true;
    } else {
      // Swimlane shapes panel collapse and expand
      args.cancel = false;
    }
  },
});
symbolPalette.appendTo('#element');
