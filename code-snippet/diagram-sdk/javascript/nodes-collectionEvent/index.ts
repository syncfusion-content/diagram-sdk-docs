


import { Diagram, NodeModel, SymbolPalette,ICollectionChangeEventArgs } from '@syncfusion/ej2-diagrams';
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
  collectionChange: function (args:ICollectionChangeEventArgs) {
    if(args.state === 'Changed'){
      console.log('Collection Change');
    }
  },
});
diagram.appendTo('#element');
function created(): void {
  diagram.fitToPage({ mode: 'Width' });
}

(document.getElementById('add') as HTMLInputElement).onclick = () => {
  let node = {
    offsetX: 300,
    offsetY: 300,
    width: 100,
    height: 100,
    visible: true,
    style: { fill: '#6AA8D7', strokeWidth: 1 },
  };
  diagram.add(node);
}




