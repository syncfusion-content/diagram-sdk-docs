/**
 * Default symbol palette sample
 */
//Initialize the flowshapes for the symbol palatte
var swimlaneShapes = [
    {
      id: 'stackCanvas1',
      shape: {
        type: 'SwimLane',
        lanes: [
          {
            id: 'lane1',
            style: { strokeColor: 'black' },
            height: 60,
            width: 150,
            header: {
              width: 50,
              height: 50,
              style: { strokeColor: 'black', fontSize: 11 },
            },
          },
        ],
        orientation: 'Horizontal',
        isLane: true,
      },
      height: 60,
      width: 140,
      offsetX: 70,
      offsetY: 30,
    },
    {
      id: 'stackCanvas2',
      shape: {
        type: 'SwimLane',
        lanes: [
          {
            id: 'lane1',
            style: { strokeColor: 'black' },
            height: 150,
            width: 60,
            header: {
              width: 50,
              height: 50,
              style: { strokeColor: 'black', fontSize: 11 },
            },
          },
        ],
        orientation: 'Vertical',
        isLane: true,
      },
      height: 140,
      width: 60,
      // style: { fill: '#f5f5f5' },
      offsetX: 70,
      offsetY: 30,
    },
    {
      id: 'verticalPhase',
      shape: {
        type: 'SwimLane',
        phases: [
          {
            style: {
              strokeWidth: 1,
              strokeDashArray: '3,3',
              strokeColor: '#A9A9A9',
            },
          },
        ],
        annotations: [{ text: '' }],
        orientation: 'Vertical',
        isPhase: true,
      },
      height: 60,
      width: 140,
    },
    {
      id: 'horizontalPhase',
      shape: {
        type: 'SwimLane',
        phases: [
          {
            style: {
              strokeWidth: 1,
              strokeDashArray: '3,3',
              strokeColor: '#A9A9A9',
            },
          },
        ],
        annotations: [{ text: '' }],
        orientation: 'Horizontal',
        isPhase: true,
      },
      height: 60,
      width: 140,
    },
  ];
  function setPaletteNodeDefaults(node) {
    node.width = 70;
    node.height = 70;
    node.style.strokeColor = '#3A3A3A';
  }
  var palette = new ej.diagrams.SymbolPalette({
    expandMode: 'Multiple',
    width:'30%',
    palettes: [
      {
        id: 'swimlane',
        expanded: true,
        symbols: swimlaneShapes,
        title: 'Swimlane Shapes',
      },
    ],
    symbolPreview: {
      height: 100,
      width: 100,
      offset: {
        x: 0.5,
        y: 0.5,
      },
    },
    symbolMargin: {
      left: 12,
      right: 12,
      top: 12,
      bottom: 12,
    },
    enableSearch: true,
    getNodeDefaults: setPaletteNodeDefaults,
    getSymbolInfo: (symbol) => {
      return {
        fit: true,
      };
    },
  });
  
  palette.appendTo('#palette');
  
  let diagram = new ej.diagrams.Diagram(
    {
      width: '70%',
      height: 900,
    },
    '#element'
  );
  