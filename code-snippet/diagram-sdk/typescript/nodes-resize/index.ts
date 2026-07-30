


import { Diagram, NodeModel, SymbolPalette,IDraggingEventArgs } from '@syncfusion/ej2-diagrams';
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
  positionChange: function (args:IDraggingEventArgs) {
    if(args.state === 'Completed'){
      console.log('Position Change');
    }
  },
});
diagram.appendTo('#element');
function created(): void {
  diagram.fitToPage({ mode: 'Width' });
}
(document.getElementById('resize') as HTMLInputElement).onclick = () => {
  diagram.scale(diagram.nodes[0], 0.5, 0.5, { x: 0.5, y: 0.5 })
};




