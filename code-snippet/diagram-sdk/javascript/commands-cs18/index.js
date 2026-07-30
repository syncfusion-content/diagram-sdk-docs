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
          //Preventing default cut command
          name: 'cut',
          canExecute: function () {
            return false;
          },
          execute: null,
          gesture: {
            key: ej.diagrams.Keys.X,
            keyModifiers: ej.diagrams.KeyModifiers.Control,
          },
        },
        {
          //Preventing default delete command
          name: 'delete',
          canExecute: function () {
            return false;
          },
          execute: null,
          gesture: {
            key: ej.diagrams.Keys.Delete,
          },
        },
        {
          //Modifying copy command to clone node
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
            //Press CTRL+C to clone node
            key: ej.diagrams.Keys.C,
            keyModifiers: ej.diagrams.KeyModifiers.Control,
          },
        },
      ],
    },
  },
  '#element'
);
