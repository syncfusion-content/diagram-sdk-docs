var nodes = [
  {
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
      fill: '#6BA5D7',
      strokeColor: 'white',
      strokeWidth: 1,
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
      strokeColor: 'white',
      strokeWidth: 1,
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
    contextMenuSettings: {
      //Enables the context menu
      show: true,
      items: [
        {
          text: 'menu item 1',
          id: 'item1',
        },
        {
          text: 'menu item 2',
          id: 'item2',
        },
      ],
      // Hides the default context menu items
      showCustomMenuOnly: true,
    },
    contextMenuBeforeItemRender: (args) => {
      //Triggers for each menu item
      console.log('context menu before item render');
    },
    contextMenuOpen: function (args) {
      //Triggers when the menu is openned
      console.log('context menu openned');
    },
    contextMenuClick: function (args) {
      //Triggers when the item is clicked
      console.log('context menu clicked');
    },
  },
  '#element'
);
