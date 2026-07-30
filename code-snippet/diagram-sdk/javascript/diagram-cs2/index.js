/**
 * Custom tool
 */

let diagram;

// Enable the clone Tool for UserHandle.
function getTool(action) {
  let tool;
  if (action === 'clone') {
    tool = new CloneTool(diagram.commandHandler);
  }
  return tool;
}

// Defines the clone tool used to copy Node
class CloneTool extends ej.diagrams.MoveTool {
  mouseDown(args) {
    let newObject;
    if (diagram.selectedItems.nodes.length > 0) {
      newObject = ej.diagrams.cloneObject(diagram.selectedItems.nodes[0]);
    }
    newObject.id += ej.diagrams.randomId();
    diagram.paste([newObject]);
    args.source = diagram.nodes[diagram.nodes.length - 1];
    args.sourceWrapper = args.source.wrapper;
    super.mouseDown(args);
    this.inAction = true;
  }
}

//Defines the nodes collection in diagram
var nodes = [
  {
    id: 'NewIdea',
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 60,
    shape: { type: 'Flow', shape: 'Terminator' },
    annotations: [{ content: 'Custom tool' }],
  },
];

//Defines the user handle collection for nodes in diagram
let handles = [
  {
    name: 'clone',
    pathData:
      'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,' +
      '0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z ' +
      'M68.5,72.5h-30V34.4h30V72.5z',
    visible: true,
    offset: 0,
    side: 'Bottom',
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  },
];

diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  selectedItems: {
    constraints: ej.diagrams.SelectorConstraints.UserHandle,
    userHandles: handles,
  },
  //set CustomTool
  getCustomTool: getTool,
});
diagram.appendTo('#element');
diagram.select([diagram.nodes[0]]);

document.getElementById('getTool').onclick = () => {
  /**
   * To get tool
   * parameter  -  A string that defines the action that is going to be performed.
   */
  let cursor = diagram.getTool('clone');
  console.log(cursor);
};
