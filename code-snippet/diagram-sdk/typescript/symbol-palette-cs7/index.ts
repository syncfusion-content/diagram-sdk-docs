import {
    NodeModel,
    SymbolPalette,
    ConnectorModel,
  } from '@syncfusion/ej2-diagrams';
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
  
    palettes: [
      {
        id: 'flow',
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
    getNodeDefaults: function (node: NodeModel) {
      node.style.fill = 'yellow';
      return node;
    },
    //Returns the default properties of connector
    getConnectorDefaults: function (connector: ConnectorModel) {
      connector.targetDecorator.shape = 'DoubleArrow';
      return connector;
    },
  });
  palette.appendTo('#element');
  