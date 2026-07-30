var connectors = [
  {
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
  },
];
var nodes = [
  {
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'black',
      strokeWidth: 2,
    },
    annotations: [
      {
        id: 'label1',
        content: 'Rectangle1',
        offset: {
          x: 0.5,
          y: 0.5,
        },
        style: {
          color: 'white',
        },
      },
    ],
  },
  {
    id: 'node2',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'black',
      strokeWidth: 2,
    },
    annotations: [
      {
        id: 'label2',
        content: 'Rectangle2',
        offset: {
          x: 0.5,
          y: 0.5,
        },
        style: {
          color: 'white',
        },
      },
    ],
  },
];
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '350px',
    nodes: nodes,
    connectors: connectors,
    contextMenuSettings: {
      //Enables the context menu
      show: true,
      items: [
        {
          text: 'Change fill',
          id: 'applyFill',
          target: '.e-diagramcontent',
          iconCss: 'e-icons e-paint-bucket',
        },
        {
          text: 'Change stroke',
          id: 'applyStroke',
          target: '.e-diagramcontent',
          iconCss: 'e-icons e-edit',
        },
        {
          text: 'Select All',
          id: 'selectAll',
          target: '.e-diagramcontent',
        },
      ],
      // Hides the default context menu items
      showCustomMenuOnly: true,
    },
    contextMenuOpen: function (args) {
      let hiddenItems = [];
      let selectedNode = diagram.selectedItems.nodes[0];
      let selectedConnector = diagram.selectedItems.connectors[0];
      if (selectedNode || selectedConnector) {
        hiddenItems.push('selectAll');
      } else {
        hiddenItems = ['applyFill', 'applyStroke'];
      }
      args.hiddenItems = hiddenItems;
    },
    contextMenuClick: function (args) {
      let selectedNode = diagram.selectedItems.nodes[0];
      let selectedConnector = diagram.selectedItems.connectors[0];
      if (selectedNode || selectedConnector) {
        if (selectedNode) {
          if (args.item.id === 'applyFill') {
            selectedNode.style.fill =
              selectedNode.style.fill === '#6BA5D7' ? 'green' : '#6BA5D7';
          } else if (args.item.id === 'applyStroke') {
            selectedNode.style.strokeColor =
              selectedNode.style.strokeColor === 'black' ? 'yellow' : 'black';
          }
        }
        if (selectedConnector) {
          if (args.item.id === 'applyFill') {
            selectedConnector.targetDecorator.style.fill =
              selectedConnector.targetDecorator.style.fill === 'yellow'
                ? 'black'
                : 'yellow';
          }
          selectedConnector.style.strokeColor =
            selectedConnector.style.strokeColor === 'black'
              ? 'yellow'
              : 'black';
        }
      } else {
        diagram.selectAll();
      }
    },
  },
  '#element'
);
