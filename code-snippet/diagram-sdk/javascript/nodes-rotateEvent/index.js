let diagram;

let nodes = [
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
diagram = new ej.diagrams.Diagram({
  width: '70%',
  height: '645px',
  nodes: nodes,
  getNodeDefaults: function (obj) {
    obj.style = { fill: 'skyblue' };
    obj.width = 75;
    obj.height = 50;
    return obj;
  },
  created: created,
  rotateChange: function (args) {
    if(args.state === 'Completed'){
      console.log('Rotate Change');
    }
  },
});
diagram.appendTo('#element');
function created() {
  diagram.fitToPage({ mode: 'Width' });
}
