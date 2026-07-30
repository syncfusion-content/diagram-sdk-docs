import {
  Diagram,
  DiagramContextMenu,
  ConnectorModel,
  NodeModel,
  DiagramBeforeMenuOpenEventArgs,
} from '@syncfusion/ej2-diagrams';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';
Diagram.Inject(DiagramContextMenu);
let connectors: ConnectorModel[] = [
  {
    id: 'connector1',
    sourceID: 'node1',
    targetID: 'node2',
  },
];
//Initializes the nodes
let node: NodeModel = {
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
};
let node2: NodeModel = {
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
};
//Initializes the Diagram component
let diagram: Diagram = new Diagram(
  {
    width: '100%',
    height: '350px',
    nodes: [node, node2],
    connectors: connectors,
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
    contextMenuBeforeItemRender: (args: MenuEventArgs) => {
      //Triggers for each menu item
      console.log('context menu before item render');
    },
    contextMenuOpen: function (args: DiagramBeforeMenuOpenEventArgs) {
      //Triggers when the menu is openned
      console.log('context menu openned');
    },
    contextMenuClick: function (args: MenuEventArgs) {
      //Triggers when the item is clicked
      console.log('context menu clicked');
    },
  },
  '#element'
);
