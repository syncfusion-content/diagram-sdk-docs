var node1 = {
    id: 'Transaction',
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 60,
    shape: {
        type: 'Flow',
        shape: 'Terminator'
    },
    annotations: [{
        id: 'label1',
        content: 'Start Transaction',
        offset: {
            x: 0.5,
            y: 0.5
        }
    }],
};

var node2 = {
    id: 'Verification',
    width: 150,
    height: 60,
    offsetX: 300,
    offsetY: 250,
    shape: {
        type: 'Flow',
        shape: 'Process'
    },
    annotations: [{
        id: 'label2',
        content: 'Verification',
        offset: {
            x: 0.5,
            y: 0.5
        }
    }]
};

var connectors = {
    id: 'connector1',
    type: 'Straight',
    sourceID: 'Transaction',
    targetID: 'Verification'
};
var connectors2 = {
    id: 'connector2',
    type: 'Straight',
    sourcePoint: {
        x: 200,
        y: 130
    },
    targetPoint: {
        x: 400,
        y: 130
    }
};
var connector3 = {
    id: 'connector3',
    type: 'Straight',
    sourcePoint: {
        x: 200,
        y: 170
    },
    targetPoint: {
        x: 400,
        y: 170
    }
};
//Enables bridging for every connector added in the model
var diagram = new ej.diagrams.Diagram({
    width: '100%',
    getConnectorDefaults: (obj)  => {
        obj.style.strokeColor = '#6BA5D7';
        obj.style.fill = '#6BA5D7';
        obj.style.strokeWidth = 2;
        obj.targetDecorator.style.fill = '#6BA5D7';
        obj.targetDecorator.style.strokeColor = '#6BA5D7';
        return obj;
    },
    getNodeDefaults: (node) => {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
    nodes: [node1, node2],
    height: '600px',
    //enables the bridging constraints for the connector
    constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Bridging,
    connectors: [connectors, connectors2, connector3]
}, '#element');

