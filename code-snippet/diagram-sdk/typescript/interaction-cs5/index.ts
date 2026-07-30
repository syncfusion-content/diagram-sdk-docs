


import { Diagram, NodeModel, BasicShapeModel, MoveTool, MouseEventArgs, IElement, UserHandleModel, ToolBase, SelectorConstraints, Actions, randomId, cloneObject } from '@syncfusion/ej2-diagrams';
let shape: BasicShapeModel = { type: 'Basic', shape: 'Rectangle' };
let node1: NodeModel = { id: 'node', offsetX: 100, offsetY: 100, shape: shape };
let handles: UserHandleModel[] = [{
    name: 'clone', pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3, 0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z', visible: true, offset: 0, side: 'Bottom',
    margin: { top: 0, bottom: 0, left: 0, right: 0 }
}];
let diagram: Diagram = new Diagram({
    width: '100%', height: '600px', nodes: [node1],
    selectedItems: { constraints: SelectorConstraints.All, userHandles: handles },
    getNodeDefaults: (node: NodeModel): NodeModel => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = '#6BA5D7';
        return node;
    },
    getCustomTool: getTool
});
diagram.appendTo('#element');
function getTool(action: string): ToolBase {
    let tool: ToolBase;
    if (action === 'clone') {
        tool = new CloneTool(diagram.commandHandler);
    }
    return tool;
}

//Defines the clone tool used to copy Node/Connector
class CloneTool extends MoveTool {
    public mouseDown(args: MouseEventArgs): void {
        let newObject: any;
        if (diagram.selectedItems.nodes.length > 0) {
            newObject = cloneObject(diagram.selectedItems.nodes[0]) as NodeModel;
        } else {
            newObject = cloneObject(diagram.selectedItems.connectors[0]) as ConnectorModel;
        }
        newObject.id += randomId();
        diagram.paste([newObject]);
        args.source = diagram.nodes[diagram.nodes.length - 1] as IElement;
        args.sourceWrapper = args.source.wrapper;
        super.mouseDown(args);
        this.inAction = true;
    }
}



