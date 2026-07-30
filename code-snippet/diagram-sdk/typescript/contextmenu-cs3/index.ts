import {
    Diagram,
    DiagramContextMenu,
    ConnectorModel,
    NodeModel,
  } from '@syncfusion/ej2-diagrams';
  import { MenuEventArgs } from '@syncfusion/ej2-navigations';
  import { createElement } from '@syncfusion/ej2-base';
  Diagram.Inject(DiagramContextMenu);
  //Initializes the nodes
  let node: NodeModel = {
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
  };
  let node2: NodeModel = {
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
  };
  //Initializes the Diagram component
  let diagram: Diagram = new Diagram(
    {
      width: '100%',
      height: '350px',
      nodes: [node, node2],
      contextMenuSettings: {
        //Enables the context menu
        show: true,
        items: [
          {
            text: 'Cut',
            id: 'Cut',
            target: '.e-diagramcontent',
            iconCss: 'e-cut e-icons',
          },
          {
            text: 'Copy',
            id: 'Copy',
            target: '.e-diagramcontent',
            iconCss: 'e-icons e-copy',
          },
          {
            text: 'Paste',
            id: 'Paste',
            target: '.e-diagramcontent',
            iconCss: 'e-icons e-paste',
          },
        ],
        // Hides the default context menu items
        showCustomMenuOnly: true,
      },
      contextMenuBeforeItemRender: (args: MenuEventArgs) => {
        // To render template in li.
        let shortCutSpan: HTMLElement = createElement('span');
        let text: string = args.item.text;
        let shortCutText: string =
          text === 'Cut' ? 'Ctrl + X' : text === 'Copy' ? 'Ctrl + C' : 'Ctrl + V';
        shortCutSpan.textContent = shortCutText;
        //Added CSS styles for the class shortcut to customize its position and appearance
        shortCutSpan.setAttribute('class', 'shortcut');
        args.element.appendChild(shortCutSpan);
      },
      contextMenuClick: function (args: MenuEventArgs) {
        let selectedNode = diagram.selectedItems.nodes[0];
        if (selectedNode) {
          if (args.item.text === 'Cut') {
            diagram.cut();
          } else if (args.item.text === 'Copy') {
            diagram.copy();
          }
        }
        if (args.item.text === 'Paste') {
          diagram.paste();
        }
      },
    },
    '#element'
  );
  