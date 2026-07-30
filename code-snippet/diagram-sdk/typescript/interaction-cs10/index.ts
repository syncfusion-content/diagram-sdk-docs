


import {
    Diagram,
    NodeModel,
    DiagramConstraints,
    UserHandleModel,
    SelectorConstraints,
    NodeConstraints
} from '@syncfusion/ej2-diagrams';
import {
    NodeAnimationSettings
} from '@syncfusion/ej2-navigations';
let node: NodeModel = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
    tooltip: { content: 'node1', position: 'BottomRight', relativeMode: 'Object' },
    constraints:NodeConstraints.Default | NodeConstraints.Tooltip
};
let handle: UserHandleModel[] = [{
    name: 'handle1',
    pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z',
    visible: true, backgroundColor: 'black', offset: 0, side: 'Right',
    pathColor: 'white',
    tooltip: { content: 'handle1', position: 'BottomRight', relativeMode: 'Object' },
}]
// initialize Diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node],
    constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
    userHandleTemplate: '#userHandletemplate',
    selectedItems: { constraints: SelectorConstraints.All,userHandles: handle },
});
diagram.appendTo('#element');



