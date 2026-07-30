/**Tooltip sample */
var node = {
    // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    ports: [{
        offset: { x: 0.5, y: 0.5 }, visibility: ej.diagrams.PortVisibility.Visible,
        constraints: ej.diagrams.PortConstraints.Default | ej.diagrams.PortConstraints.ToolTip,
        //Defines mouse over tooltip for a node
        tooltip: {
            content: 'Port Tooltip',
        },
    }]
};

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node]
    }, '#element');