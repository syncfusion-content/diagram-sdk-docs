


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
  getNodeDefaults: function (obj: NodeModel) {
    obj.style = { fill: 'skyblue' };
    obj.width = 75;
    obj.height = 50;
    return obj;
  },
  created: created,
});
diagram.appendTo('#element');
function created(): void {
  diagram.fitToPage({ mode: 'Width' });
}

let palette = new SymbolPalette({
  symbolHeight: 70,
  symbolWidth: 70,
  palettes: [
    {
      id: 'palette1',
      title: 'Basic Shapes',
      symbols: [
        {
          id: 'symbol1',
          height: 50,
          width: 50,
          style: { fill: 'skyblue' },
        },
      ],
      expanded: true,
    },
  ],
  height: 500,
  width: '30%',
});

palette.appendTo('#palette');




