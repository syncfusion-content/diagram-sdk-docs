/**
 * Default symbol palette sample
 */
//Initialize the flowshapes for the symbol palette
function getFlowShapes() {
    let flowShapes = [
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
  //Initialize connectors for palette
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
        id: 'Link2',
        type: 'Orthogonal',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
        style: { strokeWidth: 1, strokeColor: '#757575' },
      },
      {
        id: 'Link3',
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
        id: 'Link4',
        type: 'Straight',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
        style: { strokeWidth: 1, strokeColor: '#757575' },
      },
      {
        id: 'Link5',
        type: 'Bezier',
        sourcePoint: { x: 0, y: 0 },
        targetPoint: { x: 60, y: 60 },
        targetDecorator: { shape: 'None' },
        style: { strokeWidth: 1, strokeColor: '#757575' },
      },
    ];
    return connectors;
  }
  var palette = new ej.diagrams.SymbolPalette({
    palettes: [
      {
        id: 'flow',
        expanded: true,
        symbols: getFlowShapes(),
        title: 'Flow Shapes',
      },
      {
        id: 'connectors',
        symbols: getConnectors(),
        title: 'Connectors',
      },
    ],
    //Returns the default properties of node
    getNodeDefaults: function (node) {
      node.style.fill = 'yellow';
      return node;
    },
    //Returns the default properties of connector
    getConnectorDefaults: function (connector) {
      connector.targetDecorator.shape = 'DoubleArrow';
      return connector;
    },
  });
  
  palette.appendTo('#element');
  