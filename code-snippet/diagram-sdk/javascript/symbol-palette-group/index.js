/**
 * Default symbol palette sample
 */
function getGroupNodes() {
    var nodes = [
      {
        id: 'child1',
        width: 50,
        height: 50,
        style: { fill: 'green' },
        offsetX: 100,
        offsetY: 100,
      },
      {
        id: 'child2',
        width: 50,
        height: 50,
        style: { fill: 'yellow' },
        offsetX: 170,
        offsetY: 110,
      },
      {
        id: 'group1',
        children: ['child1', 'child2'],
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
      },
      {
        id: 'child3',
        width: 70,
        height: 40,
        style: { fill: 'pink' },
        offsetX: 100,
        offsetY: 150,
      },
      {
        id: 'child4',
        width: 70,
        height: 40,
        style: { fill: 'orange' },
        offsetX: 100,
        offsetY: 200,
      },
      {
        id: 'group2',
        children: ['child3', 'child4'],
        padding: { left: 10, right: 10, top: 10, bottom: 10 },
      },
    ];
    return nodes;
  }
  //Initializes the symbol palette
  var palette = new ej.diagrams.SymbolPalette({
    palettes: [
      {
        id: 'group',
        symbols: getGroupNodes(),
        title: 'Group Nodes',
      },
    ],
    width: '100%',
    height: '100%',
  });
  palette.appendTo('#element');
  
  var diagram = new ej.diagrams.Diagram(
    {
      width: 1000,
      height: 500,
    },
    '#diagram'
  );
  