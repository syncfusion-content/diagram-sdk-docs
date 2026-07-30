var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
     style: { fill: '#6BA5D7', strokeColor: 'white' },
     tooltip: { content: 'node1', position: 'BottomRight', relativeMode: 'Object' },
     constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
    };
    var handle = [{
        name: 'clone', pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,' +
            '0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z ' +
            'M68.5,72.5h-30V34.4h30V72.5z',
        visible: true, offset: 0, side: 'Bottom', margin: { top: 0, bottom: 0, left: 0, right: 0 },
        tooltip: { content: 'handle1', position: 'BottomRight', relativeMode: 'Object' }
    }];
// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node],
    constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Tooltip,
    nodeTemplate: '#nodetemplate', 
    userHandleTemplate: '#userHandletemplate',
    selectedItems: { constraints: ej.diagrams.SelectorConstraints.All,userHandles: handle },
    }, '#element');

