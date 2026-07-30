import { Diagram, NodeModel, SymbolPalette } from '@syncfusion/ej2-diagrams';
let diagram: Diagram;

let nodes: NodeModel[] = [
  {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    visible: true,
    style: { fill: '#6AA8D7', strokeWidth: 1 },
    // Text(label) added to the node
  },
];

//Initializes diagram control
diagram = new Diagram({
  width: '70%',
  height: '645px',
  nodes: nodes,
  created: created,
});
diagram.appendTo('#element');
function created(): void {
  diagram.fitToPage({ mode: 'Width' });
}

function getSymbols() {
  let shapes = [
    {
      id: 'n1',
      height: 50,
      width: 50,
      offsetX: 50,
      offsetY: 50,
      style: { fill: 'green' },
    },
    {
      id: 'n2',
      height: 50,
      width: 50,
      offsetX: 100,
      offsetY: 100,
      style: { fill: 'yellow' },
    },
    {
      id: 'group1',
      children: ['n1', 'n2'],
      padding: { left: 10, right: 10, top: 10, bottom: 10 },
    },
    {
      id: 'n3',
      height: 50,
      width: 50,
      offsetX: 200,
      offsetY: 100,
      style: { fill: 'pink' },
    },
    {
      id: 'n4',
      height: 50,
      width: 50,
      offsetX: 200,
      offsetY: 170,
      style: { fill: 'orange' },
    },
    {
      id: 'group2',
      children: ['n3', 'n4'],
      padding: { left: 10, right: 10, top: 10, bottom: 10 },
    },
  ];
  return shapes;
}

let palette = new SymbolPalette({
  palettes: [
    {
      id: 'palette1',
      title: 'Basic Shapes',
      symbols: getSymbols(),
      expanded: true,
    },
  ],
  height: 500,
  width: '30%',
});

palette.appendTo('#palette');
