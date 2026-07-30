//Initializes the Diagram component
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '350px',
    nodes: [
      {
        id: 'node1',
        offsetX: 100,
        offsetY: 100,
        width: 70,
        height: 40,
        style: { fill: '#64abbb' },
      },
    ],
    commandManager: {
      commands: [
        {
          name: 'clone',
          canExecute: function () {
            let execute = diagram.selectedItems.nodes.length > 0;
            return execute;
          },
          execute: function () {
            diagram.copy();
            diagram.paste();
          },
          gesture: {
            //Press G to clone node
            key: ej.diagrams.Keys.G,
            keyModifiers: null,
          },
        },
        {
          name: 'color',
          canExecute: function () {
            let execute = diagram.selectedItems.nodes.length > 0;
            return execute;
          },
          execute: function () {
            diagram.selectedItems.nodes[0].style.fill =
              diagram.selectedItems.nodes[0].style.fill === '#64abbb'
                ? 'yellow'
                : '#64abbb';
            diagram.dataBind();
          },
          gesture: {
            //Press Shift+G of Alt+G to change node color
            key: ej.diagrams.Keys.G,
            keyModifiers:
              ej.diagrams.KeyModifiers.Shift | ej.diagrams.KeyModifiers.Alt,
          },
        },
      ],
    },
  },
  '#element'
);
